import cn from 'classnames'
import React from 'react'

import { Input } from '../../input'
import { InputProps } from '../../input/Input'

export type DateInputProps = InputProps

const DateInput: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  DateInputProps
>(({ className, ...props }, ref) => {
  return (
    <Input
      type="date"
      className={cn('cap-date-input', className)}
      ref={ref}
      {...props}
    />
  )
})

export default DateInput
