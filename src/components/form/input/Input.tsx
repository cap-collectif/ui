import cn from 'classnames'
import * as React from 'react'
import { forwardRef } from 'react'

import { BoxPropsOf } from '../../box'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import S, { InputInner } from '../style'

export interface InputProps extends BoxPropsOf<'input'> {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const inputProps = useFormControl<HTMLInputElement>(props)
    return (
      <InputInner
        {...inputProps}
        sx={S}
        variant={inputProps.variantSize}
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
