import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-behavior="input"
            data-slot="input"
            className={cn(
                "h-(--input-size-md) w-full min-w-0 rounded-(--input-radius-md) border border-(--input-border-color) bg-(--input-bg) px-(--input-padding-x) py-(--input-padding-y) text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-(--input-size-sm) file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-(--input-placeholder-color) disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                className
            )}
            {...props}
        />
    )
}

export { Input }
