import * as React from "react"
import { CircleIcon } from "lucide-react"
import { RadioGroup as RadioGroupPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-(--radio-group-gap)", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "aspect-square size-(--radio-size) shrink-0 rounded-(--radio-radius) border border-(--radio-border-color) bg-(--radio-bg) text-(--radio-color) shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-(--radio-focus-border-color) focus-visible:ring-(length:--radio-focus-ring-width) focus-visible:ring-(--radio-focus-ring-color) disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-(--radio-invalid-border-color) aria-invalid:ring-(--radio-invalid-ring-color)",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="absolute top-1/2 left-1/2 size-(--radio-indicator-size) -translate-x-1/2 -translate-y-1/2 fill-(--radio-indicator-color)" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
