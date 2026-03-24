"use client"

import * as React from "react"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { Select as SelectPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "flex w-fit items-center justify-between gap-(--select-trigger-gap) rounded-(--select-trigger-radius) border border-(--select-trigger-border-color) bg-(--select-trigger-bg) px-(--select-trigger-padding-x) py-(--select-trigger-padding-y) text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-(--select-trigger-focus-border-color) focus-visible:ring-(length:--select-trigger-focus-ring-width) focus-visible:ring-(--select-trigger-focus-ring-color) disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-(--select-trigger-invalid-border-color) aria-invalid:ring-(--select-trigger-invalid-ring-color) data-placeholder:text-(--select-trigger-placeholder-color) data-[size=default]:h-(--select-trigger-height) data-[size=sm]:h-(--select-trigger-height-sm) *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-(--select-trigger-gap) hover:bg-(--select-trigger-hover-bg) [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-(--select-icon-size) [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-(--select-icon-size) opacity-(--select-icon-opacity)" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "relative z-50 max-h-(--radix-select-content-available-height) min-w-(--select-content-min-width) origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-(--select-content-radius) border border-(--select-content-border-color) bg-(--select-content-bg) text-(--select-content-fg) shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          position === "popper" &&
            "data-[side=bottom]:translate-y-(--select-content-offset) data-[side=left]:translate-x-(--select-content-offset-negative) data-[side=right]:translate-x-(--select-content-offset) data-[side=top]:translate-y-(--select-content-offset-negative)",
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-(--select-viewport-padding)",
            position === "popper" &&
              "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width) scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        "px-(--select-label-padding-x) py-(--select-label-padding-y) text-xs text-(--select-label-fg)",
        className
      )}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-(--select-item-gap) rounded-(--select-item-radius) py-(--select-item-padding-y) pr-(--select-item-padding-right) pl-(--select-item-padding-left) text-sm outline-hidden select-none focus:bg-(--select-item-focus-bg) focus:text-(--select-item-focus-fg) data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-(--select-icon-size) [&_svg:not([class*='text-'])]:text-(--select-item-icon-fg) *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-(--select-item-gap)",
        className
      )}
      {...props}
    >
      <span
        data-slot="select-item-indicator"
        className="absolute right-(--select-item-indicator-offset-right) flex size-(--select-item-indicator-size) items-center justify-center"
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-(--select-icon-size)" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        "pointer-events-none mx-(--select-separator-margin-x) my-(--select-separator-margin-y) h-(--select-separator-height) bg-(--select-separator-color)",
        className
      )}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-(--select-scroll-button-padding-y)",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-(--select-icon-size)" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-(--select-scroll-button-padding-y)",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-(--select-icon-size)" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
