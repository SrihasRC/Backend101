import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[calc(100vh-56px)] flex items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-zinc-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
          {/* Animated particles/dots effect */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute h-2 w-2 rounded-full bg-cyan-500 animate-ping"
              style={{
                top: "20%",
                left: "10%",
                animationDelay: "0s",
                animationDuration: "4s",
              }}
            ></div>
            <div
              className="absolute h-2 w-2 rounded-full bg-green-500 animate-ping"
              style={{
                top: "70%",
                left: "20%",
                animationDelay: "0.5s",
                animationDuration: "3s",
              }}
            ></div>
            <div
              className="absolute h-2 w-2 rounded-full bg-purple-500 animate-ping"
              style={{
                top: "40%",
                left: "80%",
                animationDelay: "1s",
                animationDuration: "5s",
              }}
            ></div>
            <div
              className="absolute h-2 w-2 rounded-full bg-yellow-500 animate-ping"
              style={{
                top: "80%",
                left: "70%",
                animationDelay: "1.5s",
                animationDuration: "4.5s",
              }}
            ></div>
            <div
              className="absolute h-2 w-2 rounded-full bg-blue-500 animate-ping"
              style={{
                top: "30%",
                left: "60%",
                animationDelay: "2s",
                animationDuration: "3.5s",
              }}
            ></div>
          </div>
        </div>
        <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-block p-1 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg mb-4">
                <span className="text-xs font-mono text-green-400 px-3 py-1">
                  Backend Development Simplified
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 animate-gradient">
                  Backend101
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl lg:text-2xl">
                A modern cheatsheet for Node.js and Express.js backend
                development.
              </p>
            </div>
            <div className="space-x-4 pt-6">
              <Button
                asChild
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 border-0 shadow-lg shadow-green-900/20"
              >
                <Link href="/nodejs">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-zinc-700 hover:bg-zinc-800/50 shadow-lg"
              >
                <Link href="/project-structure">View Project Structure</Link>
              </Button>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
                className="text-zinc-500"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
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

            <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-700 transition-all">
              <div className="mb-4 text-yellow-500">
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
                  <path d="M12 3v19" />
                  <path d="M5 10h14" />
                  <path d="M5 16h14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">MongoDB Integration</h3>
              <p className="mb-4 text-sm text-zinc-400">
                Connect your Node.js apps with MongoDB using Mongoose and the native driver.
              </p>
              <Link
                href="/mongodb"
                className="text-sm text-yellow-500 hover:underline"
              >
                Learn More →
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-700 transition-all">
              <div className="mb-4 text-blue-500">
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
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Authentication & Security</h3>
              <p className="mb-4 text-sm text-zinc-400">
                Implement JWT, OAuth, and secure password handling in your Node.js apps.
              </p>
              <Link
                href="/auth"
                className="text-sm text-blue-500 hover:underline"
              >
                Learn More →
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-700 transition-all">
              <div className="mb-4 text-red-500">
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
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Testing Strategies</h3>
              <p className="mb-4 text-sm text-zinc-400">
                Master unit, integration, and API testing with Jest, Mocha, and Supertest.
              </p>
              <Link
                href="/testing"
                className="text-sm text-red-500 hover:underline"
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
              code={`import express from 'express';
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
    </>
  );
}
