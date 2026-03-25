"use client"

import * as React from 'react'

import { Command as CommandPrimitive } from 'cmdk'
import {
    CheckIcon,
    SearchIcon,
} from 'lucide-react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import {
    InputGroup,
    InputGroupAddon,
} from '@/components/ui/input-group'
import { cn } from '@/lib/utils'

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "bg-(--command-bg) text-(--command-fg) rounded-(--command-radius)! p-(--command-content-padding) flex size-full flex-col overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = false,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn(
          "rounded-(--command-radius)! top-1/3 translate-y-0 overflow-hidden p-0",
          className
        )}
        showCloseButton={showCloseButton}
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div data-slot="command-input-wrapper" className="p-(--command-content-padding) pb-0">
      <InputGroup className="bg-(--command-input-wrapper-bg) border-(--command-input-wrapper-border-color) h-(--command-input-wrapper-height)! rounded-(--command-radius)! shadow-none! *:data-[slot=input-group-addon]:pl-(--command-input-wrapper-padding-x)!">
        <CommandPrimitive.Input
          data-slot="command-input"
          className={cn(
            "w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        />
        <InputGroupAddon>
          <SearchIcon className="size-(--command-input-icon-size) shrink-0 opacity-(--command-input-icon-opacity)" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "no-scrollbar max-h-(--command-list-max-height) scroll-py-(--command-list-scroll-padding-y) outline-none overflow-x-hidden overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn("py-(--command-empty-padding-y) text-center text-sm", className)}
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn("text-foreground **:[[cmdk-group-heading]]:text-(--command-group-heading-fg) overflow-hidden p-(--command-group-padding) **:[[cmdk-group-heading]]:px-(--command-group-heading-padding-x) **:[[cmdk-group-heading]]:py-(--command-group-heading-padding-y) **:[[cmdk-group-heading]]:font-medium", className)}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("bg-(--command-separator-color) mx-(--command-separator-margin-x) h-(--command-separator-height)", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-selected:bg-(--command-item-selected-bg) data-selected:text-(--command-item-selected-fg) data-selected:*:[svg]:text-(--command-item-selected-fg) relative flex cursor-default items-center gap-(--command-item-gap) rounded-(--command-item-radius) px-(--command-item-padding-x) py-(--command-item-padding-y) text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! [&_svg:not([class*='size-'])]:size-(--command-item-icon-size) group/command-item data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
      <CheckIcon className="ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" />
    </CommandPrimitive.Item>
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn("text-(--command-shortcut-fg) group-data-selected/command-item:text-(--command-shortcut-selected-fg) ml-auto text-xs tracking-widest", className)}
      {...props}
    />
  )
}

export { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut }
