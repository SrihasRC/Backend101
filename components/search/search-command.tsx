"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Search, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSearch } from "./search-provider"

export function SearchCommand() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { searchTerm, searchResults, isSearching, setSearchTerm, performSearch } = useSearch()

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("[data-search-container]")) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle search input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    if (value.trim()) {
      performSearch()
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  // Handle result click
  const handleResultClick = (href: string) => {
    setIsOpen(false)
    router.push(href)
  }

  // Handle search submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchResults.length > 0) {
      handleResultClick(searchResults[0].href)
    }
  }

  // Group search results by section
  const groupedResults: Record<string, typeof searchResults> = {}
  searchResults.forEach((result) => {
    const section = result.section || "Other"
    if (!groupedResults[section]) {
      groupedResults[section] = []
    }
    groupedResults[section].push(result)
  })

  return (
    <div className="relative w-full" data-search-container>
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search documentation..."
          className="w-full bg-background pl-8 md:w-[200px] lg:w-[250px]"
          value={searchTerm}
          onChange={handleInputChange}
          onClick={() => {
            if (searchTerm.trim() && searchResults.length > 0) {
              setIsOpen(true)
            }
          }}
        />
        {isSearching && (
          <div className="absolute right-2.5 top-2.5">
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          </div>
        )}
      </form>

      {/* Search Results Dropdown */}
      {isOpen && searchResults.length > 0 && (
        <div className="absolute top-full z-50 mt-1 max-h-80 w-full overflow-auto rounded-md border border-zinc-800 bg-zinc-950 py-1 shadow-md">
          {Object.entries(groupedResults).map(([section, results]) => (
            <div key={section} className="px-1 py-2">
              <div className="mb-1 px-2 text-xs font-medium text-zinc-400">{section}</div>
              <div className="space-y-1">
                {results.map((result, i) => (
                  <Button
                    key={i}
                    variant="ghost"
                    className={cn(
                      "flex w-full cursor-pointer justify-start px-2 py-1 text-sm",
                      "hover:bg-zinc-800"
                    )}
                    onClick={() => handleResultClick(result.href)}
                  >
                    <div>
                      <div className="text-sm font-medium">{result.title}</div>
                      <div className="text-xs text-zinc-400 line-clamp-1">
                        {result.description}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* No Results */}
      {isOpen && searchTerm && !isSearching && searchResults.length === 0 && (
        <div className="absolute top-full z-50 mt-1 w-full rounded-md border border-zinc-800 bg-zinc-950 py-6 shadow-md">
          <div className="text-center text-sm text-zinc-400">
            No results found for &quot;{searchTerm}&quot;
          </div>
        </div>
      )}
    </div>
  )
}