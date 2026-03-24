import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative grid w-full grid-cols-[0_1fr] items-start gap-y-(--alert-gap-y) rounded-(--alert-radius) border border-(--alert-border-color) px-(--alert-padding-x) py-(--alert-padding-y) text-sm has-[>svg]:grid-cols-[var(--alert-icon-column-size)_1fr] has-[>svg]:gap-x-(--alert-gap-x) [&>svg]:size-(--alert-icon-size) [&>svg]:translate-y-(--alert-icon-translate-y) [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-(--alert-bg) text-(--alert-fg)",
        destructive:
          "bg-(--alert-bg) text-(--alert-destructive-fg) *:data-[slot=alert-description]:text-(--alert-description-destructive-fg) [&>svg]:text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-(--alert-title-min-height) font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-(--alert-description-gap) text-sm text-(--alert-description-fg) [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
