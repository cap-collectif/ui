import cn from 'classnames'
import React from 'react'

import { useTheme } from '../../../hooks'
import { Box } from '../../box'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import { Input } from '../input'

export interface HourInputProps {
  readonly id?: string
  readonly className?: string
  readonly placeholder?: string
  readonly isDisabled?: boolean
  readonly disabled?: string
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
  readonly width?: string | number
  readonly onChange?: (value: string) => void
  readonly defaultValue?: string | null
}

const HourInput = React.forwardRef<HTMLInputElement, HourInputProps>(
  (
    {
      defaultValue,
      onChange,
      id = 'cap-hour-input-id',
      className,
      placeholder = '00:00',
      width,
      disabled,
      ...props
    },
    ref,
  ) => {
    const inputProps = useFormControl<HTMLInputElement>(props)
    const [value, setValue] = React.useState(defaultValue || '')
    const { colors } = useTheme()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value
      setValue(newValue)
      if (onChange) onChange(newValue)
    }

    return (
      <Box width={width || '92px'}>
        <Input
          {...inputProps}
          type="time"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={inputProps.disabled}
          aria-invalid={inputProps['aria-invalid']}
          className={cn('cap-hour-input', className)}
          ref={ref}
          style={{
            width: '100%',
            height: props.variantSize === 'sm' ? '34px' : '42px',
            padding: '0.5rem',
            borderColor: inputProps['aria-invalid']
              ? colors.red[500]
              : colors.gray[300],
          }}
        />
      </Box>
    )
  },
)

HourInput.displayName = 'HourInput'

export default HourInput
