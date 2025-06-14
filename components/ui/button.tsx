"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-green-600 text-white hover:bg-green-700",
        destructive:
          "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border border-zinc-800 bg-transparent hover:bg-zinc-800/30 hover:text-zinc-100",
        secondary:
          "bg-zinc-800 text-white hover:bg-zinc-700",
        ghost:
          "hover:bg-zinc-800/30 hover:text-zinc-100",
        link:
          "text-green-500 underline-offset-4 hover:underline",
        glow:
          "bg-gradient-to-r from-green-500 to-cyan-500 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:from-green-600 hover:to-cyan-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-6",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
