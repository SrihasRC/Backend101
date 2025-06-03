"use client"

import React, { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

interface CodeBlockProps {
  code: string
  language: string
  title?: string
  className?: string
  showLineNumbers?: boolean
}

export function CodeBlock({
  code,
  language,
  title,
  className,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("rounded-lg overflow-hidden my-4 bg-zinc-900 border border-zinc-700", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
        <div className="flex items-center gap-2">
          {title && (
            <span className="text-sm font-mono text-zinc-400">
              {title}
            </span>
          )}
          <span className="text-xs px-2 py-1 rounded bg-zinc-700 text-zinc-300 font-mono">
            {language}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setCollapsed(!collapsed)}
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-zinc-400 hover:text-white"
          >
            {collapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </Button>
          <Button
            onClick={copyToClipboard}
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-zinc-400 hover:text-white"
          >
            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
          </Button>
        </div>
      </div>
      {!collapsed && (
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.9rem",
            backgroundColor: "transparent",
          }}
          lineNumberStyle={{
            color: "#666",
            fontSize: "0.75rem",
          }}
        >
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  )
}