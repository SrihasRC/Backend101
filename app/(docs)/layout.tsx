import { ReactNode } from "react"
import { Sidebar } from "@/components/sidebar"

interface DocsLayoutProps {
  children: ReactNode
  params: {
    slug?: string[]
  }
}

export default function DocsLayout({ children, params }: DocsLayoutProps) {
  const sidebarItems = [
    {
      title: "Backend Essentials",
      href: "/",
      items: [
        {
          title: "Getting Started",
          href: "/",
        },
        {
          title: "Project Setup",
          href: "/project-setup",
        },
      ],
    },
    {
      title: "Node.js",
      href: "/nodejs",
      items: [
        {
          title: "Event Loop",
          href: "/nodejs#event-loop",
        },
        {
          title: "Modules",
          href: "/nodejs#modules",
        },
        {
          title: "Core Modules",
          href: "/nodejs#core-modules",
        },
        {
          title: "Async Programming",
          href: "/nodejs#async-programming",
        },
      ],
    },
    {
      title: "Express.js",
      href: "/expressjs",
      items: [
        {
          title: "Creating a Server",
          href: "/expressjs#creating-server",
        },
        {
          title: "Routing",
          href: "/expressjs#routing",
        },
        {
          title: "Middleware",
          href: "/expressjs#middleware",
        },
        {
          title: "Request & Response",
          href: "/expressjs#req-res",
        },
        {
          title: "Express Router",
          href: "/expressjs#express-router",
        },
      ],
    },
    {
      title: "REST API Design",
      href: "/rest-api",
      items: [
        {
          title: "REST Principles",
          href: "/rest-api#rest-principles",
        },
        {
          title: "HTTP Status Codes",
          href: "/rest-api#http-status-codes",
        },
        {
          title: "Sample CRUD API",
          href: "/rest-api#sample-crud-api",
        },
        {
          title: "API Architecture",
          href: "/rest-api#api-architecture",
        },
        {
          title: "API Documentation",
          href: "/rest-api#api-documentation",
        },
      ],
    },
    {
      title: "MongoDB",
      href: "/mongodb",
      items: [
        {
          title: "MongoDB Intro",
          href: "/mongodb#mongodb-intro",
        },
        {
          title: "Mongoose Models",
          href: "/mongodb#mongoose-models",
        },
        {
          title: "CRUD Operations",
          href: "/mongodb#crud-operations",
        },
        {
          title: "Advanced MongoDB",
          href: "/mongodb#advanced-mongodb",
        },
      ],
    },
    {
      title: "Authentication",
      href: "/auth",
      items: [
        {
          title: "JWT Authentication",
          href: "/auth#jwt-auth",
        },
        {
          title: "OAuth",
          href: "/auth#oauth",
        },
        {
          title: "Password Security",
          href: "/auth#password-security",
        },
      ],
    },
    {
      title: "Testing",
      href: "/testing",
      items: [
        {
          title: "Unit Testing",
          href: "/testing#unit-testing",
        },
        {
          title: "Integration Testing",
          href: "/testing#integration-testing",
        },
        {
          title: "API Testing",
          href: "/testing#api-testing",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar items={sidebarItems} />
      <div className="flex-1 px-4 pt-6 lg:px-8">{children}</div>
    </div>
  )
}