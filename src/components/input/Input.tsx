import cn from 'classnames'
import * as React from 'react'
import { forwardRef } from 'react'

import { Box, BoxProps } from '../box'
import { useFormControl } from '../formControl'
import S from './Input.style'

export interface InputProps extends BoxProps {
  readonly placeholder?: string
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, width, ...props }, ref) => {
    const inputProps = useFormControl<HTMLInputElement>(props)
    return (
      <Box
        {...inputProps}
        sx={S}
        disableFocusStyles
        ref={ref}
        as="input"
        className={cn('cap-input', className)}
        width={width || '100%'}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'

export default Input as React.FC<InputProps>
