import { OTPInput, OTPInputProps, SlotProps } from 'input-otp'
import React, { Ref } from 'react'

import Box from '../../box/Box'
import { Flex } from '../../layout/Flex'
import { useFormControl } from '../formControl'

export type CodeInputProps = Omit<OTPInputProps, 'children'> & {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly isRequired?: boolean
  readonly length?: number
  readonly onComplete: (input: string) => void
  readonly isVerified?: boolean
  readonly value?: string
  readonly id?: string
  readonly ref?: Ref<HTMLInputElement | null>
}

type CodeInputRef = HTMLInputElement | null

const boxHeight = 10

const CodeInput = React.forwardRef<CodeInputRef, CodeInputProps>(
  (
    {
      length = 6,
      className,
      onComplete,
      isVerified = false,
      value,
      id = 'Code_Input',
      ...props
    }: CodeInputProps,
    ref,
  ) => {
    const inputProps = useFormControl<HTMLInputElement>(props)

    return (
      <OTPInput
        autoFocus
        maxLength={6}
        containerClassName="otp-input-wrapper"
        onComplete={onComplete}
        inputMode="numeric"
        pushPasswordManagerStrategy={'none'}
        {...inputProps}
        ref={ref}
        value={value}
        render={({ slots }) => (
          <Flex
            gap={6}
            width={'fit-content'}
            height={boxHeight}
            position={'relative'}
          >
            <Flex gap={2}>
              {slots.slice(0, 3).map((slot, idx) => (
                <Slot
                  key={idx}
                  {...slot}
                  isVerified={isVerified}
                  isInvalid={inputProps['aria-invalid'] || false}
                  isDisabled={inputProps.disabled}
                  hasFakeCaret={true}
                />
              ))}
            </Flex>

            <Flex gap={2}>
              {slots.slice(3).map((slot, idx) => (
                <Slot
                  key={idx}
                  {...slot}
                  isVerified={isVerified}
                  isInvalid={inputProps['aria-invalid'] || false}
                  isDisabled={inputProps.disabled}
                  hasFakeCaret={true}
                />
              ))}
            </Flex>
          </Flex>
        )}
      />
    )
  },
)

type SlotExtendedProps = SlotProps & {
  isVerified: boolean
  isInvalid: boolean
  isDisabled: boolean
}
function Slot(props: SlotExtendedProps) {
  const getSlotStyles = (
    props: SlotExtendedProps,
    element: 'border-color' | 'bg-color',
  ) => {
    switch (element) {
      case 'border-color':
        return props.isVerified
          ? 'green.500'
          : props.isInvalid
          ? 'red.500'
          : props.isActive
          ? 'primary.500'
          : props.isDisabled
          ? 'gray.300'
          : 'gray.200'

      case 'bg-color':
        return props.isVerified
          ? 'green.150'
          : props.isInvalid
          ? 'red.150'
          : props.isDisabled
          ? 'gray.100'
          : 'white'
    }
  }

  return (
    <Box
      border={'1px solid'}
      borderColor={getSlotStyles(props, 'border-color')}
      backgroundColor={getSlotStyles(props, 'bg-color')}
      width={9}
      height={boxHeight}
      borderRadius={'normal'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      style={{ caretColor: 'transparent' }}
      className="code-input-box"
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && props.isActive && !props.char && <FakeCaret />}
    </Box>
  )
}

function FakeCaret() {
  return <Box color="gray.300">|</Box>
}

export default CodeInput
