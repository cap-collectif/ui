import cn from 'classnames'
import React from 'react'

import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import { Input, InputProps } from '../input'

export type HourInputProps = InputProps

const HourInput: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  HourInputProps
>(({ id = 'cap-hour-input-id', className, width = '100px', ...props }, ref) => {
  const inputProps = useFormControl<HTMLInputElement>(props)
  return (
    <Input
      {...inputProps}
      type="time"
      className={cn('cap-hour-input', className)}
      ref={ref}
      width={width}
      height={props.variantSize === CapInputSize.Sm ? '34px' : '42px'}
    />
  )
})

HourInput.displayName = 'HourInput'

export default HourInput
