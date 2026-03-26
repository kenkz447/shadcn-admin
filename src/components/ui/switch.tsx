import * as React from 'react'

import { Switch as SwitchPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'

function Switch({
 className,
 size ="default",
 ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
 size?:"sm"|"default"
}) {
 return (
 <SwitchPrimitive.Root
 data-slot="switch"
 data-size={size}
 className={cn(
"peer group/switch inline-flex shrink-0 items-center rounded-(--switch-radius) border border-(--switch-border-color) shadow-xs transition-all outline-none focus-visible:border-(--switch-border-color-focus) focus-visible:ring-(length:--switch-ring-width-focus) disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-(--switch-track-height) data-[size=default]:w-(--switch-track-width) data-[size=sm]:h-(--switch-track-height-sm) data-[size=sm]:w-(--switch-track-width-sm) data-[state=checked]:bg-(--switch-track-bg-checked) data-[state=unchecked]:bg-(--switch-track-bg-unchecked)",
 className
 )}
 {...props}
 >
 <SwitchPrimitive.Thumb
 data-slot="switch-thumb"
 className={cn(
"pointer-events-none block rounded-(--switch-radius) bg-(--switch-thumb-bg) ring-0 transition-transform group-data-[size=default]/switch:size-(--switch-thumb-size) group-data-[size=sm]/switch:size-(--switch-thumb-size-sm) data-[state=checked]:translate-x-(--switch-thumb-translate-checked) data-[state=unchecked]:translate-x-(--switch-thumb-translate-unchecked) dark:data-[state=checked]:bg-(--switch-thumb-bg-checked-dark) dark:data-[state=unchecked]:bg-(--switch-thumb-bg-unchecked-dark)"
 )}
 />
 </SwitchPrimitive.Root>
 )
}

export { Switch }
