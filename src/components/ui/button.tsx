import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center font-medium text-sm whitespace-nowrap transition-all outline-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-btn-primary text-btn-primary-foreground hover:bg-btn-primary-hover",
        destructive:
          "bg-btn-destructive text-btn-destructive-foreground hover:bg-btn-destructive-hover focus-visible:ring-btn-destructive-focus",
        outline:
          "border border-btn-outline-border bg-btn-outline shadow-xs hover:bg-btn-outline-hover hover:text-accent-foreground",
        secondary:
          "bg-btn-secondary text-btn-secondary-foreground hover:bg-btn-secondary-hover",
        ghost:
          "hover:bg-btn-ghost-hover hover:text-btn-ghost-foreground",
        link: "text-btn-primary underline-offset-4 hover:underline",
      },
      size: {
        md: "h-btn-md px-btn-px-md rounded-btn-md gap-btn-gap-md [&_svg:not([class*='size-'])]:size-btn-svg-size-md",
        sm: "h-btn-sm px-btn-px-sm rounded-btn-sm gap-btn-gap-sm [&_svg:not([class*='size-'])]:size-btn-svg-size-sm",
        lg: "h-btn-lg px-btn-px-lg rounded-btn-lg gap-btn-gap-lg [&_svg:not([class*='size-'])]:size-btn-svg-size-lg",
        icon: "size-btn-md rounded-btn-md gap-btn-gap-md [&_svg:not([class*='size-'])]:size-btn-svg-size-md",
        "icon-sm": "size-btn-sm rounded-btn-sm gap-btn-gap-sm [&_svg:not([class*='size-'])]:size-btn-svg-size-sm",
        "icon-lg": "size-btn-lg rounded-btn-lg gap-btn-gap-lg [&_svg:not([class*='size-'])]:size-btn-svg-size-lg",
      },
      focus: {
        visible: "focus-visible:border-btn-focus-border focus-visible:ring-[3px] focus-visible:ring-btn-focus-ring",
        none: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      focus: "visible",
    },
  }
)

function Button({
  className,
  variant,
  size,
  focus,
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
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, focus, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
