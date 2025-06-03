import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-black to-zinc-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500">
                  Backend101
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
                  A modern cheatsheet for Node.js and Express.js backend
                  development.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild variant="glow" size="lg">
                  <Link href="/nodejs">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/project-structure">View Project Structure</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-700 transition-all">
                <div className="mb-4 text-cyan-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10"
                  >
                    <path d="M6.56 7.98A5.5 5.5 0 0 0 6 10c0 2.2 1.8 4 4 4a4 4 0 0 0 1.98-.51" />
                    <circle cx="15" cy="13" r="3" />
                    <path d="M17.67 5.34a7 7 0 0 0-12.3 2.51" />
                    <path d="M20.97 14a7 7 0 0 1-12.58 4.56" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Node.js Essentials</h3>
                <p className="mb-4 text-sm text-zinc-400">
                  Master core concepts like the event loop, modules, and async
                  patterns.
                </p>
                <Link
                  href="/nodejs"
                  className="text-sm text-cyan-500 hover:underline"
                >
                  Learn More →
                </Link>
              </div>

              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-700 transition-all">
                <div className="mb-4 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Express.js Fundamentals</h3>
                <p className="mb-4 text-sm text-zinc-400">
                  Create servers, define routes, and implement middleware with
                  ease.
                </p>
                <Link
                  href="/expressjs"
                  className="text-sm text-green-500 hover:underline"
                >
                  Learn More →
                </Link>
              </div>

              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-700 transition-all">
                <div className="mb-4 text-purple-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10"
                  >
                    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">REST API Design</h3>
                <p className="mb-4 text-sm text-zinc-400">
                  Build robust APIs with proper status codes, routes, and error
                  handling.
                </p>
                <Link
                  href="/rest-api"
                  className="text-sm text-purple-500 hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Code Sample Section */}
        <section className="py-16 md:py-24 bg-zinc-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Quick Start Example
              </h2>
              <p className="mt-2 text-zinc-400">
                A simple Express.js server to get you started
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <CodeBlock
                language="javascript"
                title="server.js"
                code={`const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Backend101 API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
              />
              <div className="mt-4 text-center">
                <Button asChild variant="outline">
                  <Link href="/expressjs">Learn More About Express.js</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-zinc-400">
                © 2025 Backend101. MIT License.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/yourusername/backend101"
                className="text-sm text-zinc-400 hover:text-white"
              >
                GitHub
              </Link>
              <Link
                href="/snippets"
                className="text-sm text-zinc-400 hover:text-white"
              >
                Snippets
              </Link>
              <Link
                href="/tools-testing"
                className="text-sm text-zinc-400 hover:text-white"
              >
                Tools & Testing
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
