"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-(--checkbox-size) shrink-0 rounded-(--checkbox-radius) border border-(--checkbox-border-color) bg-(--checkbox-bg) shadow-xs transition-shadow outline-none focus-visible:border-(--checkbox-focus-border-color) focus-visible:ring-(length:--checkbox-focus-ring-width) focus-visible:ring-(--checkbox-focus-ring-color) disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-(--checkbox-invalid-border-color) aria-invalid:ring-(--checkbox-invalid-ring-color) data-[state=checked]:border-(--checkbox-checked-border-color) data-[state=checked]:bg-(--checkbox-checked-bg) data-[state=checked]:text-(--checkbox-checked-fg)",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-(--checkbox-indicator-size)" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
