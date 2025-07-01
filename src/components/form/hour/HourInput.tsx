import cn from 'classnames'
import React from 'react'

import { pxToRem } from '../../../styles/modules/mixins'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import { Input, InputProps } from '../input'

export type HourInputProps = InputProps

const HourInput: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  HourInputProps
>(({ className, width = '100px', ...props }, ref) => {
  const inputProps = useFormControl<HTMLInputElement>(props)
  return (
    <Input
      {...inputProps}
      type="time"
      className={cn('cap-hour-input', className)}
      ref={ref}
      width={width}
      height={pxToRem(props.variantSize === CapInputSize.Sm ? 32 : 40)}
    />
  )
})

HourInput.displayName = 'HourInput'

export default HourInput
