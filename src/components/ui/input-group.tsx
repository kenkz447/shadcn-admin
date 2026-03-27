"use client"

import * as React from 'react'

import {
    cva,
    type VariantProps,
} from 'class-variance-authority'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-behavior="input-group"
      data-slot="input-group"
      role="group"
      className={cn(
        "border-input dark:bg-input/30 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-disabled:bg-input/50 dark:has-disabled:bg-input/80 h-(--input-group-height) rounded-(--input-group-radius) border transition-colors in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot][aria-invalid=true]]:ring-[3px] has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto",
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "text-muted-foreground h-auto gap-(--input-group-addon-gap) py-(--input-group-addon-padding-y) text-(length:--input-group-addon-font-size) font-medium group-data-[disabled=true]/input-group:opacity-50 [&>svg:not([class*='size-'])]:size-(--input-group-addon-icon-size) flex cursor-text items-center justify-center select-none",
  {
    variants: {
      align: {
        "inline-start": "pl-(--input-group-addon-padding-x) has-[>button]:ml-(--input-group-addon-control-offset) has-[>kbd]:ml-(--input-group-addon-control-offset) order-first",
        "inline-end": "pr-(--input-group-addon-padding-x) has-[>button]:mr-(--input-group-addon-control-offset) has-[>kbd]:mr-(--input-group-addon-control-offset) order-last",
        "block-start":
          "px-(--input-group-addon-block-padding-x) pt-(--input-group-addon-block-padding-y) group-has-[>input]/input-group:pt-(--input-group-addon-block-padding-y) [.border-b]:pb-(--input-group-addon-block-padding-y) order-first w-full justify-start",
        "block-end":
          "px-(--input-group-addon-block-padding-x) pb-(--input-group-addon-block-padding-y) group-has-[>input]/input-group:pb-(--input-group-addon-block-padding-y) [.border-t]:pt-(--input-group-addon-block-padding-y) order-last w-full justify-start",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  "shadow-none",
  {
    variants: {
      size: {
        xs: "",
        sm: "",
        "icon-xs": "",
        "icon-sm": "",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
)

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "sm",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      size={size}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-muted-foreground gap-(--input-group-text-gap) text-(length:--input-group-text-font-size) [&_svg:not([class*='size-'])]:size-(--input-group-text-icon-size) flex items-center [&_svg]:pointer-events-none",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn("rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1", className)}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn("rounded-none border-0 bg-transparent py-(--input-group-textarea-padding-y) shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1 resize-none", className)}
      {...props}
    />
  )
}

export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea }
