import { OTPInput, OTPInputProps, SlotProps } from 'input-otp'
import React from 'react'

import Box from '../../box/Box'
import { Flex } from '../../layout/Flex'
import S from './CodeInputLib.styles'

type OTPInputExtendedProps = OTPInputProps & {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly isRequired?: boolean
  readonly length?: number
  readonly onComplete: (input: string) => void
  readonly isVerified?: boolean
  readonly value?: string
  readonly id?: string
}

const CodeInputLib: React.FC<OTPInputExtendedProps> = ({
  length = 6,
  className,
  onComplete,
  isVerified,
  value,
  id = 'code__input',
  ...props
}: OTPInputExtendedProps) => {
  return (
    <OTPInput
      maxLength={6}
      // containerClassName="group flex items-center has-[:disabled]:opacity-30"
      containerClassName="otp-input-wrapper"
      render={({ slots }) => (
        <Flex>
          <Flex>
            {slots.slice(0, 3).map((slot, idx) => (
              <Slot key={idx} {...slot} isVerified={isVerified || false} />
            ))}
          </Flex>

          <FakeDash />

          <Flex>
            {slots.slice(3).map((slot, idx) => (
              <Slot key={idx} {...slot} isVerified={isVerified || false} />
            ))}
          </Flex>
        </Flex>
      )}
    />
  )
}

type SlotExtendedProps = SlotProps & {
  isVerified: boolean
}
function Slot(props: SlotExtendedProps) {
  return (
    <Box
      sx={S(props.isVerified)}
      // className={cn(
      //   'relative w-10 h-14 text-[2rem]',
      //   'flex items-center justify-center',
      //   'transition-all duration-300',
      //   'border-border border-y border-r first:border-l first:rounded-l-md last:rounded-r-md',
      //   'group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20',
      //   'outline outline-0 outline-accent-foreground/20',
      //   { 'outline-4 outline-accent-foreground': props.isActive },
      // )}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </Box>
  )
}

// You can emulate a fake textbox caret!
function FakeCaret() {
  return (
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
      <div className="w-px h-8 bg-white" />
    </div>
  )
}

// Inspired by Stripe's MFA input.
function FakeDash() {
  return (
    <div className="flex w-10 justify-center items-center">
      <div className="w-3 h-1 rounded-full bg-border" />
    </div>
  )
}

export default CodeInputLib
