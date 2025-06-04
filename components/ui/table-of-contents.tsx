"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronDown } from "lucide-react"; // Import icons for expand/collapse

interface TocItem {
  id: string;
  text: string;
  level: number;
  children?: TocItem[]; // Add children property for nested structure
}

interface TableOfContentsProps {
  className?: string;
  contentSelector?: string; // Add a selector to target specific content area
  maxDepth?: number; // Maximum depth of headings to include
  initiallyExpanded?: boolean; // Whether all sections should be initially expanded
}

export function TableOfContents({ 
  className, 
  contentSelector = "main", // Default to main element
  maxDepth = 3, // Default to show up to h3
  initiallyExpanded = true // Default to expanded
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const contentLoadedRef = useRef<boolean>(false);
  const headingElementsRef = useRef<{ [id: string]: HTMLElement }>({});
  const initializedRef = useRef<boolean>(false);

  // Function to generate a slug from text
  const generateSlug = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/-+/g, '-')      // Remove consecutive hyphens
      .trim();                  // Trim leading/trailing whitespace
  };

  // Function to toggle a section's expanded state
  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Process flat headings list into a hierarchical structure
  const buildNestedHeadings = (flatHeadings: TocItem[]): TocItem[] => {
    const root: TocItem[] = [];
    const stack: [TocItem[], number][] = [[root, 0]];
    
    flatHeadings.forEach(heading => {
      // Skip headings deeper than maxDepth
      if (heading.level > maxDepth) return;
      
      while (stack.length > 1 && stack[stack.length - 1][1] >= heading.level) {
        stack.pop();
      }
      
      const [parent] = stack[stack.length - 1];
      const newHeading = { ...heading, children: [] };
      parent.push(newHeading);
      
      stack.push([newHeading.children!, heading.level]);
      
      // Initialize this heading as expanded based on initiallyExpanded prop
      if (!expandedSections.hasOwnProperty(heading.id)) {
        setExpandedSections(prev => ({
          ...prev,
          [heading.id]: initiallyExpanded
        }));
      }
    });
    
    return root;
  };

  useEffect(() => {
    // Function to collect headings
    const collectHeadings = () => {
      // Get the content container
      const contentContainer = document.querySelector(contentSelector) || document;
      
      if (!contentContainer) {
        console.log("Content container not found:", contentSelector);
        return;
      }
      
      // First, add IDs to any heading elements that don't have them
      const headingsWithoutIds = contentContainer.querySelectorAll(
        Array.from({ length: maxDepth }, (_, i) => `h${i + 1}:not([id])`).join(', ')
      );
      
      if (headingsWithoutIds.length > 0) {
        console.log("Found headings without IDs:", headingsWithoutIds.length);
        
        headingsWithoutIds.forEach((element) => {
          const text = element.textContent || "";
          if (text.trim()) {
            const slug = generateSlug(text);
            // Ensure unique ID by adding a suffix if needed
            let uniqueId = slug;
            let counter = 1;
            while (document.getElementById(uniqueId)) {
              uniqueId = `${slug}-${counter}`;
              counter++;
            }
            element.id = uniqueId;
          }
        });
      }
      
      let items: TocItem[] = [];
      
      // Approach 1: Get all h1-h{maxDepth} elements from the content area (now all should have IDs)
      const headingSelector = Array.from({ length: maxDepth }, (_, i) => `h${i + 1}[id]`).join(', ');
      const headingElements = Array.from(contentContainer.querySelectorAll(headingSelector));
      
      if (headingElements.length > 0) {
        console.log("Found headings with IDs:", headingElements.length);
        
        items = headingElements.map((element) => {
          // Store reference to the heading element
          headingElementsRef.current[element.id] = element as HTMLElement;
          
          return {
            id: element.id,
            text: element.textContent || "",
            level: parseInt(element.tagName.substring(1), 10),
            children: []
          };
        });
      } else {
        console.log("No headings with direct IDs found, looking for sections with IDs...");
        
        // Approach 2: Look for sections with IDs that contain headings
        const sectionElements = Array.from(contentContainer.querySelectorAll("section[id]"));
        
        if (sectionElements.length > 0) {
          console.log("Found sections with IDs:", sectionElements.length);
          
          items = sectionElements.map((section) => {
            // Find the first heading in this section
            const headingEl = section.querySelector("h1, h2, h3, h4, h5, h6");
            const headingText = headingEl?.textContent || "Section";
            const headingLevel = headingEl ? 
              parseInt(headingEl.tagName.substring(1), 10) : 2;
              
            // Skip if level exceeds maxDepth
            if (headingLevel > maxDepth) return null;
              
            // Store reference to the section element
            headingElementsRef.current[section.id] = section as HTMLElement;
            
            return {
              id: section.id,
              text: headingText,
              level: headingLevel,
              children: []
            };
          }).filter(Boolean) as TocItem[];
        }
      }

      if (items.length > 0) {
        contentLoadedRef.current = true;
        // Process flat list into hierarchical structure
        setHeadings(items);
        
        // Clean up previous observer if it exists
        if (observerRef.current) {
          observerRef.current.disconnect();
        }

        // Set up intersection observer to highlight the active section
        const options = {
          rootMargin: '-80px 0px -40% 0px', // Adjust based on your header height
          threshold: [0, 0.25, 0.5, 0.75, 1],
        };
        
        observerRef.current = new IntersectionObserver((entries) => {
          // Get all entries that are currently intersecting
          const visibleEntries = entries.filter((entry) => entry.isIntersecting);
          
          if (visibleEntries.length > 0) {
            // Find the heading closest to the top of the viewport that is at least partially visible
            let bestVisibleHeading = visibleEntries[0];
            let bestScore = Infinity;
            
            for (const entry of visibleEntries) {
              const rect = entry.target.getBoundingClientRect();
              // Calculate a score based on distance from top and intersection ratio
              // Lower score is better - prefer elements near the top of the viewport
              const score = Math.abs(rect.top) * (1 - entry.intersectionRatio);
              
              if (score < bestScore) {
                bestScore = score;
                bestVisibleHeading = entry;
              }
            }
            
            const newActiveId = bestVisibleHeading.target.id;
            setActiveId(newActiveId);
            
            // Ensure parent sections of the active item are expanded
            const expandParents = (flatItems: TocItem[], id: string) => {
              const item = flatItems.find(h => h.id === id);
              if (!item) return;
              
              // For each heading, find if it's a parent of our active heading
              flatItems.forEach(heading => {
                if (heading.level < item.level) {
                  setExpandedSections(prev => ({
                    ...prev,
                    [heading.id]: true
                  }));
                }
              });
            };
            
            expandParents(items, newActiveId);
          } else if (entries.length > 0) {
            // When no headings are visible, find the one that's closest to entering the viewport
            // This helps when scrolling fast through content
            let closestHeading = entries[0];
            let minDistance = Infinity;
            
            for (const entry of entries) {
              const rect = entry.target.getBoundingClientRect();
              // Get distance to the top of the viewport (negative if above viewport)
              const distance = rect.top < 0 ? Math.abs(rect.bottom) : rect.top;
              
              if (distance < minDistance) {
                minDistance = distance;
                closestHeading = entry;
              }
            }
            
            setActiveId(closestHeading.target.id);
          }
        }, options);

        // Observe all heading elements
        Object.values(headingElementsRef.current).forEach((element) => {
          observerRef.current?.observe(element);
        });
      } else {
        console.log("No headings or sections with IDs found in container:", contentSelector);
      }
    };

    // Add a small delay to ensure content is rendered
    const timer = setTimeout(() => {
      collectHeadings();
      initializedRef.current = true;
    }, 500);

    // Re-collect headings when content changes
    const observer = new MutationObserver(() => {
      if (initializedRef.current) {
        collectHeadings();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Clean up
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      observerRef.current?.disconnect();
    };
  }, [contentSelector, maxDepth, initiallyExpanded]);

  // If no headings or content not loaded, show loading or empty state
  if (headings.length === 0) {
    return contentLoadedRef.current ? null : (
      <div className={cn("text-sm", className)}>
        <div className="opacity-70 mb-2 text-sm">On this page</div>
        <div className="animate-pulse">Loading table of contents...</div>
      </div>
    );
  }

  // Recursive function to render the nested headings
  const renderHeadings = (items: TocItem[]) => {
    return items.map((heading) => {
      const hasChildren = heading.children && heading.children.length > 0;
      const isExpanded = expandedSections[heading.id] ?? initiallyExpanded;
      
      return (
        <div key={heading.id} className={cn(
          "transition-all",
          heading.level === 1 ? "" : `ml-${heading.level * 2}`
        )}>
          <div className="flex items-center">
            {hasChildren && (
              <button 
                onClick={() => toggleSection(heading.id)}
                className="mr-1 p-1 hover:bg-muted rounded-sm focus:outline-none focus:ring-1 focus:ring-muted-foreground"
                aria-label={isExpanded ? "Collapse section" : "Expand section"}
              >
                {isExpanded ? 
                  <ChevronDown className="h-3 w-3" /> : 
                  <ChevronRight className="h-3 w-3" />
                }
              </button>
            )}
            <a
              href={`#${heading.id}`}
              className={cn(
                "block text-sm py-1 transition-colors hover:text-foreground grow",
                heading.level === 1 ? "font-medium" : "",
                activeId === heading.id
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
              onClick={(e) => {
                e.preventDefault();
                // Get the element to scroll to
                const targetElement = document.getElementById(heading.id);
                if (targetElement) {
                  // Calculate position with offset to account for fixed header
                  const headerOffset = 100; // Adjust this value based on your header height
                  const elementPosition = targetElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                  // Scroll to the adjusted position
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
                setActiveId(heading.id);
              }}
            >
              {heading.text}
            </a>
          </div>
          
          {hasChildren && isExpanded && (
            <div className="pl-2 border-l border-muted space-y-1 my-1">
              {renderHeadings(heading.children!)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className={cn("text-sm sticky top-20", className)}>
      <div className="opacity-70 mb-2 text-sm">On this page</div>
      <div className="space-y-1 max-h-[calc(100vh-10rem)] overflow-y-auto scrollbar-hide">
        {renderHeadings(buildNestedHeadings(headings))}
      </div>
    </div>
  );
}

// Add this custom CSS for scrollbar hiding
// Define a utility class that hides the scrollbar but keeps scrolling functionality
const scrollbarHideStyles = `
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

// Add the styles to the document
if (typeof document !== "undefined") {
  // Only run in browser environment
  const style = document.createElement("style");
  style.textContent = scrollbarHideStyles;
  document.head.appendChild(style);
}