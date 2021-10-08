import cn from 'classnames'
import * as React from 'react'
import { forwardRef } from 'react'

import { BoxProps } from '../../box'
import { useFormControl } from '../formControl'
import S, { InputInner } from '../style'

export interface InputProps extends BoxProps {
  readonly placeholder?: string
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: 'sm' | 'md'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const inputProps = useFormControl<HTMLInputElement>(props)
    return (
      <InputInner
        {...inputProps}
        sx={S}
        variant={inputProps.variantSize || 'sm'}
        disableFocusStyles
        ref={ref}
        as="input"
        className={cn('cap-input', className)}
        width="100%"
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'

export default Input as React.FC<InputProps>
