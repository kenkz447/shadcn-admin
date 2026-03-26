import { cn } from "@/lib/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-(--kbd-height) w-fit min-w-(--kbd-height) items-center justify-center gap-(--kbd-gap) rounded-(--kbd-radius) bg-muted px-(--kbd-padding-x) font-sans text-(length:--kbd-font-size) font-medium text-muted-foreground select-none in-data-[slot=tooltip-content]:bg-(--kbd-tooltip-bg) in-data-[slot=tooltip-content]:text-(--kbd-tooltip-fg) [&_svg:not([class*='size-'])]:size-(--kbd-icon-size)",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-(--kbd-gap)", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
