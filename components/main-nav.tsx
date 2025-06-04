"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex pl-4">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="font-bold text-xl bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
          Backend101
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Home
        </Link>
        <Link
          href="/nodejs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/nodejs" || pathname.startsWith("/nodejs/")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Node.js
        </Link>
        <Link
          href="/expressjs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/expressjs" || pathname.startsWith("/expressjs/")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Express.js
        </Link>
        <Link
          href="/rest-api"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/rest-api" || pathname.startsWith("/rest-api/")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          REST API
        </Link>
        <Link
          href="/mongodb"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/mongodb" || pathname.startsWith("/mongodb/")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          MongoDB
        </Link>
        <Link
          href="/auth"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/auth" || pathname.startsWith("/auth/")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Auth
        </Link>
        <Link
          href="/testing"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/testing" || pathname.startsWith("/testing/")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Testing
        </Link>
      </nav>
    </div>
  )
}