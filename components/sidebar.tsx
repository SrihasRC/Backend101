"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

interface SidebarNavProps {
  items: {
    title: string
    href: string
    description?: string
    items?: {
      title: string
      href: string
    }[]
  }[]
}

export function Sidebar({ items }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <div className="w-full lg:w-64 lg:shrink-0 border-r border-zinc-800 lg:h-[calc(100vh-64px)] sticky top-16">
      <div className="h-full py-6 pl-8 pr-6 lg:pl-10 overflow-auto">
        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.href} className="space-y-3">
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium hover:underline",
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                {item.title}
              </Link>

              {item.items?.length && (
                <div className="space-y-1 ml-4 border-l border-zinc-800 pl-3">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={cn(
                        "text-xs",
                        pathname === subItem.href
                          ? "text-primary font-medium"
                          : "text-zinc-400 hover:text-zinc-200"
                      )}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}