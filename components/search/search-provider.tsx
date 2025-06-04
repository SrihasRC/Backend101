"use client"

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react"

type SearchContextType = {
  searchTerm: string
  searchResults: SearchResult[]
  isSearching: boolean
  setSearchTerm: (term: string) => void
  performSearch: () => void
}

export type SearchResult = {
  title: string
  description: string
  href: string
  section?: string
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Define search content (you can move this to a separate file if it grows)
  const searchableContent: SearchResult[] = [
    // Node.js Section
    {
      title: "Node.js Event Loop",
      description: "Learn about the Node.js event loop and how it handles asynchronous operations",
      href: "/nodejs#event-loop",
      section: "Node.js",
    },
    {
      title: "Node.js Modules",
      description: "Understanding Node.js module system and how to use it effectively",
      href: "/nodejs#modules",
      section: "Node.js",
    },
    
    // Express.js Section
    {
      title: "Express.js Routing",
      description: "Create and manage routes in your Express.js applications",
      href: "/expressjs#routing",
      section: "Express.js",
    },
    {
      title: "Express.js Middleware",
      description: "Learn how to use and create middleware functions in Express.js",
      href: "/expressjs#middleware",
      section: "Express.js",
    },
    
    // MongoDB Section
    {
      title: "MongoDB Introduction",
      description: "Get started with MongoDB, a NoSQL document database",
      href: "/mongodb#mongodb-intro",
      section: "MongoDB",
    },
    {
      title: "Mongoose Models",
      description: "Learn how to define and use Mongoose models for MongoDB",
      href: "/mongodb#mongoose-models",
      section: "MongoDB",
    },
    {
      title: "MongoDB Indexing",
      description: "Learn about indexing in MongoDB for improved query performance",
      href: "/mongodb#mongodb-indexing",
      section: "MongoDB",
    },
    
    // REST API Section
    {
      title: "REST API Design Principles",
      description: "Best practices for designing REST APIs",
      href: "/rest-api#rest-principles",
      section: "REST API",
    },
    {
      title: "API Endpoints",
      description: "How to structure and implement REST API endpoints",
      href: "/rest-api#api-endpoints",
      section: "REST API",
    },
    
    // Authentication Section
    {
      title: "JWT Authentication",
      description: "Implement JWT authentication in your Node.js applications",
      href: "/auth#jwt-auth",
      section: "Authentication",
    },
    {
      title: "Authentication Strategies",
      description: "Different authentication strategies for web applications",
      href: "/auth#auth-strategies",
      section: "Authentication",
    },
    
    // Testing Section
    {
      title: "Unit Testing",
      description: "Learn about unit testing in Node.js applications",
      href: "/testing#unit-testing",
      section: "Testing",
    },
    {
      title: "Integration Testing",
      description: "Approaches to integration testing in backend applications",
      href: "/testing#integration-testing",
      section: "Testing",
    },
    
    // Environment Setup Section
    {
      title: "Development Environment",
      description: "Setting up your development environment for backend development",
      href: "/environment-setup#dev-environment",
      section: "Environment Setup",
    },
    {
      title: "Project Configuration",
      description: "Configuring your backend project for development and production",
      href: "/environment-setup#project-config",
      section: "Environment Setup",
    },
    
    // Project Structure Section
    {
      title: "Backend Architecture",
      description: "Organizing your backend project structure for scalability",
      href: "/project-structure#architecture",
      section: "Project Structure",
    },
    {
      title: "MVC Pattern",
      description: "Implementing the Model-View-Controller pattern in your backend",
      href: "/project-structure#mvc-pattern",
      section: "Project Structure",
    }
  ]

  const performSearch = useCallback(() => {
    if (!searchTerm.trim()) {
      setSearchResults([])
      return
    }

    setIsSearching(true)
    
    // Simulate a search delay (like a real search would have)
    setTimeout(() => {
      const term = searchTerm.toLowerCase()
      const results = searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term) ||
          (item.section && item.section.toLowerCase().includes(term))
      )
      setSearchResults(results)
      setIsSearching(false)
    }, 300)
  }, [searchTerm])

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        searchResults,
        isSearching,
        setSearchTerm,
        performSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
}