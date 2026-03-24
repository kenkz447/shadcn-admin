import * as React from "react"
import { Avatar as AvatarPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: "default" | "sm" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex size-(--avatar-size) shrink-0 overflow-hidden rounded-(--avatar-radius) select-none data-[size=lg]:size-(--avatar-size-lg) data-[size=sm]:size-(--avatar-size-sm)",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-(--avatar-fallback-radius) bg-(--avatar-fallback-bg) text-sm text-(--avatar-fallback-fg) group-data-[size=sm]/avatar:text-xs",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-(--avatar-badge-radius) bg-(--avatar-badge-bg) text-(--avatar-badge-fg) ring-(length:--avatar-badge-ring-width) ring-(--avatar-badge-ring-color) select-none",
        "group-data-[size=sm]/avatar:size-(--avatar-badge-size-sm) group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-(--avatar-badge-size) group-data-[size=default]/avatar:[&>svg]:size-(--avatar-badge-icon-size)",
        "group-data-[size=lg]/avatar:size-(--avatar-badge-size-lg) group-data-[size=lg]/avatar:[&>svg]:size-(--avatar-badge-icon-size)",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex space-x-(--avatar-group-space-x) *:data-[slot=avatar]:ring-(length:--avatar-group-ring-width) *:data-[slot=avatar]:ring-(--avatar-group-ring-color)",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-(--avatar-group-count-size) shrink-0 items-center justify-center rounded-(--avatar-group-count-radius) bg-(--avatar-fallback-bg) text-sm text-(--avatar-fallback-fg) ring-(length:--avatar-group-ring-width) ring-(--avatar-group-ring-color) group-has-data-[size=lg]/avatar-group:size-(--avatar-group-count-size-lg) group-has-data-[size=sm]/avatar-group:size-(--avatar-group-count-size-sm) [&>svg]:size-(--avatar-group-count-icon-size) group-has-data-[size=lg]/avatar-group:[&>svg]:size-(--avatar-group-count-icon-size-lg) group-has-data-[size=sm]/avatar-group:[&>svg]:size-(--avatar-group-count-icon-size-sm)",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
}
