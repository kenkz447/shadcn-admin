import * as React from 'react'

import { Switch as SwitchPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'

function Switch({
    className,
    ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
    return (
        <SwitchPrimitive.Root
            data-slot="switch"
            className={cn(
                "peer group/switch inline-flex shrink-0 items-center rounded-(--switch-radius) border border-(--switch-border-color) shadow-xs transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50 h-(--switch-track-height) w-(--switch-track-width) data-[state=checked]:bg-(--switch-track-bg-checked) data-[state=unchecked]:bg-(--switch-track-bg-unchecked)",
                className
            )}
            {...props}
        >
            <SwitchPrimitive.Thumb
                data-slot="switch-thumb"
                className={cn(
                    "pointer-events-none block rounded-(--switch-radius) bg-(--switch-thumb-bg) ring-0 transition-transform size-(--switch-thumb-size) data-[state=checked]:translate-x-(--switch-thumb-translate-checked) data-[state=unchecked]:translate-x-(--switch-thumb-translate-unchecked) dark:data-[state=checked]:bg-(--switch-thumb-bg-checked-dark) dark:data-[state=unchecked]:bg-(--switch-thumb-bg-unchecked-dark)"
                )}
            />
        </SwitchPrimitive.Root>
    )
}

export { Switch }
