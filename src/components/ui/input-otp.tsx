"use client"

import * as React from 'react'

import {
    OTPInput,
    OTPInputContext,
} from 'input-otp'
import { MinusIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-(--input-otp-gap) has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "relative flex h-(--input-otp-slot-size) w-(--input-otp-slot-size) items-center justify-center border-y border-r border-(--input-otp-slot-border-color) bg-(--input-otp-slot-bg) text-sm shadow-xs transition-all outline-none first:rounded-l-(--input-otp-slot-radius) first:border-l last:rounded-r-(--input-otp-slot-radius) aria-invalid:border-(--input-otp-slot-border-color-invalid) data-[active=true]:z-10 data-[active=true]:border-(--input-otp-slot-border-color-active) data-[active=true]:ring-(length:--input-otp-slot-ring-width-active) data-[active=true]:ring-(--input-otp-slot-ring-color-active) data-[active=true]:aria-invalid:border-(--input-otp-slot-border-color-invalid) data-[active=true]:aria-invalid:ring-(--input-otp-slot-ring-color-invalid)",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-(--input-otp-caret-height) w-[var(--input-otp-caret-width)] animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot }
