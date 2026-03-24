import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-(--button-focus-ring-color) aria-invalid:ring-(--button-invalid-ring-color) aria-invalid:border-(--button-invalid-border-color) rounded-(--button-radius) border border-transparent bg-clip-padding text-(length:--button-text-size) font-medium focus-visible:ring-(length:--button-focus-ring-width) aria-invalid:ring-(length:--button-invalid-ring-width) active:translate-y-px [&_svg:not([class*='size-'])]:size-(--button-icon-size) group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline: "border-(--button-outline-border-color) bg-(--button-outline-bg) hover:bg-(--button-outline-hover-bg) hover:text-foreground aria-expanded:bg-(--button-outline-hover-bg) aria-expanded:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-(--button-ghost-hover-bg) hover:text-foreground aria-expanded:bg-(--button-ghost-hover-bg) aria-expanded:text-foreground",
        destructive: "bg-(--button-destructive-bg) hover:bg-(--button-destructive-hover-bg) focus-visible:ring-(--button-destructive-focus-ring-color) text-destructive focus-visible:border-(--button-destructive-focus-border-color)",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-(--button-height) gap-(--button-gap) px-(--button-padding-x) has-data-[icon=inline-end]:pr-(--button-padding-inline-end) has-data-[icon=inline-start]:pl-(--button-padding-inline-start)",
        xs: "h-(--button-height-xs) gap-(--button-gap-xs) rounded-(--button-radius-xs) px-(--button-padding-x-xs) text-(length:--button-text-size-xs) in-data-[slot=button-group]:rounded-(--button-group-radius) has-data-[icon=inline-end]:pr-(--button-padding-inline-end-xs) has-data-[icon=inline-start]:pl-(--button-padding-inline-start-xs) [&_svg:not([class*='size-'])]:size-(--button-icon-size-xs)",
        sm: "h-(--button-height-sm) gap-(--button-gap-sm) rounded-(--button-radius-sm) px-(--button-padding-x-sm) text-(length:--button-text-size-sm) in-data-[slot=button-group]:rounded-(--button-group-radius) has-data-[icon=inline-end]:pr-(--button-padding-inline-end-sm) has-data-[icon=inline-start]:pl-(--button-padding-inline-start-sm) [&_svg:not([class*='size-'])]:size-(--button-icon-size-sm)",
        lg: "h-(--button-height-lg) gap-(--button-gap-lg) px-(--button-padding-x-lg) has-data-[icon=inline-end]:pr-(--button-padding-inline-end-lg) has-data-[icon=inline-start]:pl-(--button-padding-inline-start-lg)",
        icon: "size-(--button-size-icon)",
        "icon-xs": "size-(--button-size-icon-xs) rounded-(--button-radius-xs) in-data-[slot=button-group]:rounded-(--button-group-radius) [&_svg:not([class*='size-'])]:size-(--button-icon-size-xs)",
        "icon-sm": "size-(--button-size-icon-sm) rounded-(--button-radius-sm) in-data-[slot=button-group]:rounded-(--button-group-radius)",
        "icon-lg": "size-(--button-size-icon-lg)",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
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
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
