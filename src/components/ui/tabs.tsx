import * as React from 'react'

import {
    cva,
    type VariantProps,
} from 'class-variance-authority'
import { Tabs as TabsPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'

function Tabs({
    className,
    orientation = "horizontal",
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
    return (
        <TabsPrimitive.Root
            data-slot="tabs"
            data-orientation={orientation}
            orientation={orientation}
            className={cn(
                "group/tabs flex gap-(--tabs-gap) data-[orientation=horizontal]:flex-col",
                className
            )}
            {...props}
        />
    )
}

const tabsListVariants = cva(
    "group/tabs-list inline-flex w-fit items-center justify-center rounded-(--tabs-radius) p-(--tabs-padding) text-(--tabs-fg) group-data-[orientation=horizontal]/tabs:h-(--tabs-size-md) group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",
    {
        variants: {
            variant: {
                default: "bg-(--tabs-bg)",
                line: "gap-(--tabs-line-gap) bg-transparent",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function TabsList({
    className,
    variant = "default",
    ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
    VariantProps<typeof tabsListVariants>) {
    return (
        <TabsPrimitive.List
            data-slot="tabs-list"
            data-variant={variant}
            className={cn(tabsListVariants({ variant }), className)}
            {...props}
        />
    )
}

function TabsTrigger({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
    return (
        <TabsPrimitive.Trigger
            data-slot="tabs-trigger"
            className={cn(
                "relative inline-flex h-(--tabs-item-height) flex-1 items-center justify-center gap-(--tabs-item-gap) rounded-(--tabs-item-radius) border border-(--tabs-item-border) px-(--tabs-item-padding-x) py-(--tabs-item-padding-y) text-sm font-medium whitespace-nowrap text-(--tabs-item-fg) transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:bg-(--tabs-item-bg-hover) hover:text-(--tabs-item-fg-hover) focus-visible:border-(--tabs-item-border-color-focus) focus-visible:outline-1 focus-visible:outline-(--tabs-item-border-color-focus) disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
                "data-[state=active]:border-(--tabs-item-border-active) data-[state=active]:bg-(--tabs-item-bg-active) data-[state=active]:text-(--tabs-item-fg-active)",
                "after:absolute after:bg-(--tabs-indicator-color) after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-(--tabs-indicator-offset-horizontal) group-data-[orientation=horizontal]/tabs:after:h-(--tabs-indicator-thickness-horizontal) group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:right-(--tabs-indicator-offset-vertical) group-data-[orientation=vertical]/tabs:after:w-(--tabs-indicator-thickness-vertical) group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
                className
            )}
            {...props}
        />
    )
}

function TabsContent({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
    return (
        <TabsPrimitive.Content
            data-slot="tabs-content"
            className={cn("flex-1 outline-none", className)}
            {...props}
        />
    )
}

export { Tabs, TabsContent, TabsList, tabsListVariants, TabsTrigger }
