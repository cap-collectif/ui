import cn from 'classnames'
import React, { FC } from 'react'

import { Input } from '../../input'
import { InputProps } from '../../input/Input'

// TODO forwardref
const DateInput: FC<InputProps> = ({
  id = 'cap-date-input-id',
  className,
  ...props
}) => {
  return (
    <Input type="date" className={cn('cap-date-input', className)} {...props} />
  )
}

export default DateInput
