import * as React from 'react'

import {
  cva,
  type VariantProps,
} from 'class-variance-authority'
import { Slot } from 'radix-ui'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      color: {
        secondary: "[--btn-bg:var(--secondary)] [--btn-fg:var(--secondary-foreground)] [--btn-border:var(--secondary)]",
        primary: "[--btn-bg:var(--primary)] [--btn-fg:var(--primary-foreground)] [--btn-border:var(--primary)]",
        destructive: "[--btn-bg:var(--destructive)] [--btn-fg:var(--destructive-foreground)] [--btn-border:var(--destructive)]",
      },
      appearance: {
        solid: "bg-[var(--btn-bg)] text-[var(--btn-fg)] border-[var(--btn-border)] hover:bg-[var(--btn-bg)/90] focus-visible:ring-[var(--btn-border)]/20 dark:focus-visible:ring-[var(--btn-border)]/40",
        outline: "border-[var(--btn-border)] bg-transparent shadow-xs hover:bg-[var(--btn-bg)/10] hover:text-[var(--btn-fg)]",
        ghost: "hover:bg-[var(--btn-bg)/10] hover:text-[var(--btn-fg)]",
        link: "text-[var(--btn-bg)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      color: "primary",
      appearance: "solid",
      size: "default",
    },
  }
)

function Button({
  className,
  appearance = "solid",
  size = "default",
  color = "primary",
  asChild = false,
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
