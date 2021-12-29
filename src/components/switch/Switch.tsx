import cn from 'classnames'
import * as React from 'react'

import { Box, BoxPropsOf } from '../box'
import { useFormControl } from '../form'
import { sliderStyles } from './Switch.style'

export interface SwitchProps extends BoxPropsOf<'input'> {
  readonly id: string
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly label?: React.ReactNode
}

export const Switch: React.FC<SwitchProps> = ({
  className,
  label,
  ...props
}: SwitchProps) => {
  const inputProps = useFormControl<HTMLInputElement>(props)

  return (
    <Box
      as="label"
      htmlFor={props.id}
      className={cn('cap-switch', className)}
      display="inline-block"
      position="relative"
      width={8}
      height={4}
    >
      <Box
        as="input"
        {...inputProps}
        type="checkbox"
        className="cap-switch__input"
        width={0}
        height={0}
        opacity={0}
        {...props}
      />

      <Box as="div" className="cap-switch__slider" sx={sliderStyles} />
    </Box>
  )
}

Switch.displayName = 'Switch'

export default Switch
