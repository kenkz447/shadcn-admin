import * as React from 'react'

import {
  cva,
  type VariantProps,
} from 'class-variance-authority'
import { Slot } from 'radix-ui'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      color: {
        primary: "[--btn-bg:var(--color-btn-primary)] [--btn-fg:var(--color-btn-primary-foreground)] [--btn-border:var(--color-btn-primary)] [--btn-bg-hover:var(--color-btn-primary)/80] [--btn-fg-hover:var(--color-btn-primary-foreground)/80] [--btn-border-hover:var(--color-btn-primary)/80]",
        secondary: "[--btn-bg:var(--color-btn-secondary)] [--btn-fg:var(--color-btn-secondary-foreground)] [--btn-border:var(--color-btn-secondary)] [--btn-bg-hover:var(--color-btn-secondary)] [--btn-fg-hover:var(--color-btn-secondary-foreground)/80] [--btn-border-hover:var(--color-btn-secondary)/80]",
        destructive: "[--btn-bg:var(--color-btn-destructive)] [--btn-fg:var(--color-btn-destructive-foreground)] [--btn-border:var(--color-btn-destructive)] [--btn-bg-hover:var(--color-btn-destructive)/80] [--btn-fg-hover:var(--color-btn-destructive-foreground)/80] [--btn-border-hover:var(--color-btn-destructive)/80]",
      },
      appearance: {
        solid: "bg-[var(--btn-bg)] text-[var(--btn-fg)] hover:bg-(--btn-bg-hover) hover:text-[var(--btn-fg-hover)]",
        outline: "bg-transparent border-[var(--btn-border)] hover:bg-[var(--btn-bg-hover)] hover:text-[var(--btn-fg-hover)] hover:border-[var(--btn-border-hover)]",
        ghost: "hover:bg-[var(--btn-bg)] hover:text-[var(--btn-fg)]",
        link: "text-[var(--btn-bg)] underline-offset-4 hover:underline",
      },
      size: {
        md: "h-btn-md px-btn-px-md rounded-btn-md",
        sm: "h-btn-sm px-btn-px-sm rounded-btn-sm",
        lg: "h-btn-lg px-btn-px-lg rounded-btn-lg",
        icon: "size-btn-md rounded-btn-md",
        "icon-sm": "size-btn-sm rounded-btn-sm",
        "icon-lg": "size-btn-lg rounded-btn-lg",
      },
    },
    defaultVariants: {
      color: "primary",
      appearance: "solid",
      size: "md",
    },
  }
)

function Button({
  className,
  appearance,
  size,
  color,
  asChild,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-appearance={appearance}
      data-size={size}
      className={cn(buttonVariants({ appearance, size, className, color }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
