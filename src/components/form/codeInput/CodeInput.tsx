import cn from 'classnames'
import * as React from 'react'

import { Box, BoxPropsOf } from '../../box'
import { useFormControl } from '../formControl'
import S from './CodeInput.styles'

export interface CodeInputProps extends BoxPropsOf<'input'> {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly isRequired?: boolean
  readonly length?: number
  readonly loading?: boolean
  readonly onComplete: (input: string) => void
  readonly isVerified?: boolean
  readonly value?: string
}

const CodeInput = ({
  length = 6,
  className,
  onComplete,
  isVerified,
  value,
  ...props
}: CodeInputProps) => {
  const [code, setCode] = React.useState(
    value ? value.split('') : [...Array(length)].map(() => ''),
  )
  const inputs = React.useRef<(HTMLInputElement | null)[]>([])
  const inputProps = useFormControl<HTMLInputElement>(props)

  const processInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    slot: number,
  ) => {
    const num = e.target.value
    if (/[^0-9]/.test(num)) return
    const newCode = [...code]
    newCode[slot] = num
    setCode(newCode)
    if (slot !== length - 1) {
      if (!!inputs && !!inputs.current && !!inputs.current[slot + 1]) {
        // @ts-ignore
        inputs.current[slot + 1].focus()
      }
    }
    if (newCode.every(num => num !== '')) {
      onComplete(newCode.join(''))
    }
  }

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, slot: number) => {
    if (e.code === 'Backspace' && !code[slot] && slot !== 0) {
      const newCode = [...code]
      newCode[slot - 1] = ''
      setCode(newCode)
      // @ts-ignore
      inputs.current[slot - 1].focus()
    }
  }

  return (
    <div
      className={cn('cap-code-input', className)}
      style={{ display: 'flex', flexFlow: 'row nowrap' }}
    >
      {code.map((num, idx) => {
        return (
          <Box
            {...inputProps}
            sx={S(isVerified)}
            disableFocusStyles
            as="input"
            key={idx}
            type="text"
            placeholder="-"
            inputMode="numeric"
            maxLength={1}
            value={num}
            autoFocus={!code[0].length && idx === 0}
            readOnly={inputProps.disabled}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              processInput(e, idx)
            }
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
              onKeyUp(e, idx)
            }
            ref={(ref: HTMLInputElement | null) => inputs.current.push(ref)}
          />
        )
      })}
    </div>
  )
}

export default CodeInput as React.FC<CodeInputProps>
