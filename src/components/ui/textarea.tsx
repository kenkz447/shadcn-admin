import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
 return (
 <textarea
 data-slot="textarea"
 className={cn(
"flex field-sizing-content min-h-(--textarea-min-height) w-full rounded-(--textarea-radius) border border-(--textarea-border-color) bg-(--textarea-bg) px-(--textarea-padding-x) py-(--textarea-padding-y) text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-(--textarea-placeholder-color) focus-visible:border-(--textarea-border-color-focus) disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-(--textarea-border-color-invalid) aria-invalid:ring-(--textarea-ring-color-invalid) md:text-sm",
 className
 )}
 {...props}
 />
 )
}

export { Textarea }
