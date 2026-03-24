import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-(--textarea-min-height) w-full rounded-(--textarea-radius) border border-(--textarea-border-color) bg-(--textarea-bg) px-(--textarea-padding-x) py-(--textarea-padding-y) text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-(--textarea-placeholder-color) focus-visible:border-(--textarea-focus-border-color) focus-visible:ring-(length:--textarea-focus-ring-width) focus-visible:ring-(--textarea-focus-ring-color) disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-(--textarea-invalid-border-color) aria-invalid:ring-(--textarea-invalid-ring-color) md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
