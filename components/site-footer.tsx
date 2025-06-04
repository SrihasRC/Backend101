import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-zinc-400">
              © 2025 Backend101.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/SrihasRC/Backend101"
              className="text-sm text-zinc-400 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="/snippets"
              className="text-sm text-zinc-400 hover:text-white"
            >
              Snippets
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
