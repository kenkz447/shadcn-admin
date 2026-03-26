import * as React from 'react'

import {
    cva,
    type VariantProps,
} from 'class-variance-authority'
import { Slot } from 'radix-ui'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "aria-invalid:ring-(--btn-ring-color-invalid) aria-invalid:border-(--btn-border-color-invalid) rounded-(--btn-radius) border border-transparent bg-clip-padding text-(length:--btn-text-size) font-medium aria-invalid:ring-(length:--btn-ring-width-invalid) active:translate-y-px [&_svg:not([class*='size-'])]:size-(--btn-icon-size) group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline: "border-(--btn-outline-border-color) bg-(--btn-outline-bg) hover:bg-(--btn-outline-bg-hover) hover:text-foreground aria-expanded:bg-(--btn-outline-bg-hover) aria-expanded:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-(--btn-ghost-bg-hover) hover:text-foreground aria-expanded:bg-(--btn-ghost-bg-hover) aria-expanded:text-foreground",
        destructive: "bg-(--btn-destructive-bg) hover:bg-(--btn-destructive-bg-hover) focus-visible:ring-(--btn-destructive-ring-color-focus) text-destructive focus-visible:border-(--btn-destructive-border-color-focus)",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-(--btn-height) gap-(--btn-gap) px-(--btn-padding-x) has-data-[icon=inline-end]:pr-(--btn-has-icon-padding) has-data-[icon=inline-start]:pl-(--btn-has-icon-padding)",
        xs: "h-(--btn-height-xs) gap-(--btn-gap-xs) rounded-(--btn-radius-xs) px-(--btn-padding-x-xs) text-(length:--btn-text-size-xs) in-data-[slot=button-group]:rounded-(--btn-group-radius) has-data-[icon=inline-end]:pr-(--btn-has-icon-padding-xs) has-data-[icon=inline-start]:pl-(--btn-has-icon-padding-xs) [&_svg:not([class*='size-'])]:size-(--btn-icon-size-xs)",
        sm: "h-(--btn-height-sm) gap-(--btn-gap-sm) rounded-(--btn-radius-sm) px-(--btn-padding-x-sm) text-(length:--btn-text-size-sm) in-data-[slot=button-group]:rounded-(--btn-group-radius) has-data-[icon=inline-end]:pr-(--btn-has-icon-padding-sm) has-data-[icon=inline-start]:pl-(--btn-has-icon-padding-sm) [&_svg:not([class*='size-'])]:size-(--btn-icon-size-sm)",
        lg: "h-(--btn-height-lg) gap-(--btn-gap-lg) px-(--btn-padding-x-lg) has-data-[icon=inline-end]:pr-(--btn-has-icon-padding-lg) has-data-[icon=inline-start]:pl-(--btn-has-icon-padding-lg)",
        icon: "size-(--btn-size-icon)",
        "icon-xs": "size-(--btn-size-icon-xs) rounded-(--btn-radius-xs) in-data-[slot=button-group]:rounded-(--btn-group-radius) [&_svg:not([class*='size-'])]:size-(--btn-icon-size-xs)",
        "icon-sm": "size-(--btn-size-icon-sm) rounded-(--btn-radius-sm) in-data-[slot=button-group]:rounded-(--btn-group-radius)",
        "icon-lg": "size-(--btn-size-icon-lg)",
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
