import { OTPInput, OTPInputProps, SlotProps } from 'input-otp'
import React from 'react'

import Box from '../../box/Box'
import { Flex } from '../../layout/Flex'
import { useFormControl } from '../formControl'

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

const boxWidth = 9
const boxHeight = 10

const CodeInputLib: React.FC<OTPInputExtendedProps> = ({
  length = 6,
  className,
  onComplete,
  isVerified = false,
  isInvalid = false,
  isDisabled = false,
  value,
  id = 'code__input',
  ...props
}: OTPInputExtendedProps) => {
  const [code, setCode] = React.useState(value)
  const inputProps = useFormControl<HTMLInputElement>(props)

  return (
    <OTPInput
      maxLength={6}
      // containerClassName="group flex items-center has-[:disabled]:opacity-30"
      containerClassName="otp-input-wrapper"
      // isVerified={isVerified}
      onComplete={() => setCode(value)}
      inputMode="numeric"
      // disabled={isDisabled}
      {...inputProps}
      render={({ slots }) => (
        <Flex gap={4} width={boxWidth} height={boxHeight}>
          <Flex gap={2}>
            {slots.slice(0, 3).map((slot, idx) => (
              <Slot
                key={idx}
                {...slot}
                isVerified={isVerified}
                isInvalid={isInvalid}
                isDisabled={isDisabled}
                hasFakeCaret={true}
              />
            ))}
          </Flex>

          {/* <Box color="gray.300" margin={'auto'}> */}
          <Box
            color="gray.300"
            margin={'auto'}
            height={0}
            border={'0.5px solid'}
            borderColor={'gray.500'}
          >
            &nbsp;&nbsp;
          </Box>

          <Flex gap={'10px'}>
            {slots.slice(3).map((slot, idx) => (
              <Slot
                key={idx}
                {...slot}
                isVerified={isVerified}
                isInvalid={isInvalid}
                isDisabled={isDisabled}
                hasFakeCaret={true}
              />
            ))}
          </Flex>
        </Flex>
      )}
    />
  )
}

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
      width={boxWidth}
      height={boxHeight}
      borderRadius={'normal'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      style={{ caretColor: 'transparent' }}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && props.isActive && !props.char && <FakeCaret />}
    </Box>
  )
}

function FakeCaret() {
  return <Box color="gray.300">|</Box>
}

export default CodeInputLib
