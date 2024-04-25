import cn from 'classnames'
import * as React from 'react'

import { Box, BoxPropsOf } from '../../box'
import { Flex } from '../../layout'
import { useFormControl } from '../formControl'
import S from './CodeInput.styles'

export interface CodeInputProps extends BoxPropsOf<'input'> {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly isRequired?: boolean
  readonly length?: number
  readonly onComplete: (input: string) => void
  readonly isVerified?: boolean
  readonly value?: string
  readonly id?: string
}

const CodeInput: React.FC<CodeInputProps> = ({
  length = 6,
  className,
  onComplete,
  isVerified,
  value,
  id = 'code__input',
  ...props
}: CodeInputProps) => {
  const [code, setCode] = React.useState(
    value ? value.split('') : [...Array(length).fill('')],
  )
  const inputs = React.useRef<HTMLInputElement[]>([])
  const inputProps = useFormControl<HTMLInputElement>(props)

  const ANY_DIGIT_REGEX = /^[0-9]*$/

  const processInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    slot: number,
  ) => {
    const num = e.target.value
    if (!ANY_DIGIT_REGEX.test(num)) return
    const newCode = [...code]
    newCode[slot] = num
    setCode(newCode)

    if (slot !== length - 1) {
      inputs.current[slot + 1].focus()
    }
    if (newCode.every(num => num !== '')) {
      onComplete(newCode.join(''))
    }
    // prevent several digits from being entered in the last slot
    if (slot === length - 1 && num) {
      inputs.current[slot].blur()
    }
  }

  const onKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    slot: number,
  ) => {
    // handle backspace
    if (e.key === 'Backspace' && !code[slot]) {
      e.preventDefault()
      return handleBackspace(slot)
    }
    // handle non-digit key pressed
    if (!ANY_DIGIT_REGEX.test(e.key)) {
      e.preventDefault()
      return
    }
  }

  // goes back to the previous value and removes it + focuses on it to fill it again
  const handleBackspace = (slot: number) => {
    if (slot !== 0) {
      const newCode = [...code]
      newCode[slot - 1] = ''
      setCode(newCode)
      inputs.current[slot - 1].focus()
    }
  }

  return (
    <Flex className={cn('cap-code-input', className)} direction="row" id={id}>
      {code.map((num, idx) => (
        <Box
          {...inputProps}
          sx={S(isVerified)}
          disableFocusStyles
          as="input"
          key={idx}
          type="number"
          placeholder="-"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={1}
          value={num}
          autoFocus={!value && idx === 0}
          readOnly={inputProps.disabled}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            processInput(e, idx)
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            onKeyDown(e, idx)
          }
          ref={(ref: HTMLInputElement) => inputs.current.push(ref)}
        />
      ))}
    </Flex>
  )
}

export default CodeInput
