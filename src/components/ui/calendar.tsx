import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
} from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar bg-(--calendar-bg) p-(--calendar-padding) [--cell-size:var(--calendar-cell-size)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-(--calendar-months-gap) md:flex-row",
          defaultClassNames.months
        ),
        month: cn(
          "flex w-full flex-col gap-(--calendar-month-gap)",
          defaultClassNames.month
        ),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-(--calendar-nav-gap)",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-(--calendar-dropdown-gap) text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative rounded-(--calendar-dropdown-radius) border border-(--calendar-dropdown-border-color) shadow-xs has-focus:border-(--calendar-dropdown-focus-border-color) has-focus:ring-(length:--calendar-dropdown-focus-ring-width) has-focus:ring-(--calendar-dropdown-focus-ring-color)",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute inset-0 bg-(--calendar-overlay-bg) opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "font-medium select-none",
          captionLayout === "label"
            ? "text-sm"
            : "flex h-(--calendar-cell-size) items-center gap-(--calendar-nav-gap) rounded-(--calendar-dropdown-radius) pr-(--calendar-nav-gap) pl-(--calendar-dropdown-gap) text-sm [&>svg]:size-(--calendar-caption-icon-size) [&>svg]:text-(--calendar-muted-fg)",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-(--calendar-weekday-radius) text-(length:--calendar-weekday-text-size) font-normal text-(--calendar-muted-fg) select-none",
          defaultClassNames.weekday
        ),
        week: cn(
          "mt-(--calendar-week-margin-top) flex w-full",
          defaultClassNames.week
        ),
        week_number_header: cn(
          "w-(--cell-size) select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-(length:--calendar-week-number-text-size) text-(--calendar-muted-fg) select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-(--calendar-range-radius)",
          props.showWeekNumber
            ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--calendar-range-radius)"
            : "[&:first-child[data-selected=true]_button]:rounded-l-(--calendar-range-radius)",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-(--calendar-range-radius) bg-(--calendar-range-middle-bg)",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn(
          "rounded-r-(--calendar-range-radius) bg-(--calendar-range-middle-bg)",
          defaultClassNames.range_end
        ),
        today: cn(
          "rounded-(--calendar-range-radius) bg-(--calendar-today-bg) text-(--calendar-today-fg) data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-(--calendar-muted-fg) aria-selected:text-(--calendar-muted-fg)",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-(--calendar-muted-fg) opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon
                className={cn("size-(--calendar-nav-icon-size)", className)}
                {...props}
              />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-(--calendar-nav-icon-size)", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon
              className={cn("size-(--calendar-nav-icon-size)", className)}
              {...props}
            />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-(--calendar-day-button-gap) leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-(length:--calendar-day-button-ring-width) group-data-[focused=true]/day:ring-(--calendar-day-button-ring-color) data-[range-end=true]:rounded-(--calendar-range-radius) data-[range-end=true]:rounded-r-(--calendar-range-radius) data-[range-end=true]:bg-(--calendar-range-selected-bg) data-[range-end=true]:text-(--calendar-range-selected-fg) data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-(--calendar-range-middle-bg) data-[range-middle=true]:text-(--calendar-range-middle-fg) data-[range-start=true]:rounded-(--calendar-range-radius) data-[range-start=true]:rounded-l-(--calendar-range-radius) data-[range-start=true]:bg-(--calendar-range-selected-bg) data-[range-start=true]:text-(--calendar-range-selected-fg) data-[selected-single=true]:bg-(--calendar-range-selected-bg) data-[selected-single=true]:text-(--calendar-range-selected-fg) dark:hover:text-(--calendar-day-hover-dark-fg) [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
