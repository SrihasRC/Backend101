import { SiteHeader } from "@/components/site-header"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="container flex-1">
        <div className="flex flex-col lg:flex-row lg:gap-10 py-8">
          <div className="lg:flex-1">{children}</div>
        </div>
      </div>
      <footer className="border-t border-zinc-800 py-6 bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-zinc-400 md:text-left">
            © 2025 Backend101. MIT License.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername/backend101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 hover:text-zinc-100"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}