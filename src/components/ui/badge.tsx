import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-(--badge-gap) overflow-hidden rounded-(--badge-radius) border border-(--badge-border-color) px-(--badge-padding-x) py-(--badge-padding-y) text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-(--badge-focus-border-color) focus-visible:ring-(length:--badge-focus-ring-width) focus-visible:ring-(--badge-focus-ring-color) aria-invalid:border-(--badge-invalid-border-color) aria-invalid:ring-(--badge-invalid-ring-color) [&>svg]:pointer-events-none [&>svg]:size-(--badge-icon-size)",
  {
    variants: {
      variant: {
        default: "bg-(--badge-primary-bg) text-(--badge-primary-fg) [a&]:hover:bg-(--badge-primary-hover-bg)",
        secondary:
          "bg-(--badge-secondary-bg) text-(--badge-secondary-fg) [a&]:hover:bg-(--badge-secondary-hover-bg)",
        destructive:
          "bg-(--badge-destructive-bg) text-(--badge-destructive-fg) focus-visible:ring-(--badge-destructive-focus-ring-color) [a&]:hover:bg-(--badge-destructive-hover-bg)",
        outline:
          "border-(--badge-outline-border-color) text-(--badge-outline-fg) [a&]:hover:bg-(--badge-outline-hover-bg) [a&]:hover:text-(--badge-outline-hover-fg)",
        ghost: "[a&]:hover:bg-(--badge-ghost-hover-bg) [a&]:hover:text-(--badge-ghost-hover-fg)",
        link: "text-(--badge-link-fg) underline-offset-4 [a&]:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
