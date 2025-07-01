import { OTPInput, OTPInputProps, SlotProps } from 'input-otp'
import React, { Ref } from 'react'

import { useTheme } from '../../../hooks'
import Box from '../../box/Box'
import { Flex } from '../../layout/Flex'
import { InputVariantColor } from '../enums'
import { useFormControl } from '../formControl'

export type CodeInputProps = Omit<OTPInputProps, 'children' | 'maxLength'> & {
  isDisabled?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  onComplete: (input: string) => void
  isVerified?: boolean
  value?: string
  id?: string
  ref?: Ref<HTMLInputElement | null>
  title: string
  variantColor?: InputVariantColor
}

type CodeInputRef = HTMLInputElement | null

const boxHeight = 10

// Note: this component is built for sms OTP verification, which is a 6-digit value.
// It is designed to visually return 6 inputs ("slots"), grouped by 3
const DEFAULT_LENGTH = 6

const CodeInput = React.forwardRef<CodeInputRef, CodeInputProps>(
  (
    {
      className,
      onComplete,
      isVerified = false,
      value,
      variantColor = 'default',
      ...props
    }: CodeInputProps,
    ref,
  ) => {
    const inputProps = useFormControl<HTMLInputElement>(props)

    return (
      <OTPInput
        autoFocus
        maxLength={DEFAULT_LENGTH}
        containerClassName="otp-input-wrapper"
        onComplete={onComplete}
        inputMode="numeric"
        pushPasswordManagerStrategy="none"
        {...inputProps}
        readOnly={isVerified || inputProps.readOnly}
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
                  variantColor={variantColor}
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
                  variantColor={variantColor}
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
  variantColor?: InputVariantColor
}
const Slot = (props: SlotExtendedProps) => {
  const { colors } = useTheme()

  const getSlotStyles = (
    {
      isActive,
      isVerified,
      isDisabled,
      char,
      variantColor = 'default',
    }: SlotExtendedProps,
    element: 'border-color' | 'bg-color',
  ) => {
    switch (element) {
      case 'border-color':
        return colors.input[variantColor].border[
          isVerified
            ? 'readonly'
            : isActive
            ? 'selected'
            : isDisabled
            ? 'disable'
            : !!char
            ? 'default'
            : 'placeholder'
        ]

      case 'bg-color':
        return colors.input[variantColor].background[
          isVerified
            ? 'readonly'
            : isActive
            ? 'selected'
            : isDisabled
            ? 'disable'
            : 'default'
        ]
    }
  }

  return (
    <Flex
      justify={'center'}
      align={'center'}
      borderBottom="1px solid"
      borderColor={getSlotStyles(props, 'border-color')}
      backgroundColor={getSlotStyles(props, 'bg-color')}
      width={9}
      height={boxHeight}
      borderTopLeftRadius="normal"
      borderTopRightRadius="normal"
      style={{ caretColor: 'transparent' }}
      className="code-input-box"
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && !props.char && (
        <FakeCaret isDisabled={props.isDisabled} />
      )}
    </Flex>
  )
}

const FakeCaret = ({ isDisabled }: { isDisabled: boolean }) => (
  <Box color={isDisabled ? 'text.disable' : 'text.primary'} as="span">
    -
  </Box>
)

export default CodeInput
