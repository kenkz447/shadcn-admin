"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-(--sonner-icon-size)" />,
        info: <InfoIcon className="size-(--sonner-icon-size)" />,
        warning: <TriangleAlertIcon className="size-(--sonner-icon-size)" />,
        error: <OctagonXIcon className="size-(--sonner-icon-size)" />,
        loading: <Loader2Icon className="size-(--sonner-icon-size) animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border-color": "var(--border)",
          "--border-radius": "var(--sonner-border-radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
