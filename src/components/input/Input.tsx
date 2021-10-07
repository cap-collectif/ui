import cn from 'classnames'
import * as React from 'react'
import { forwardRef } from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

import { Box, BoxProps } from '../box'
import { useFormControl } from '../formControl'
import S from './Input.style'

export interface InputProps extends BoxProps {
  readonly placeholder?: string
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly size?: 'sm' | 'md'
}
const InputInner = styled(Box)(
  variant({
    variants: {
      sm: {
        px: 3,
        py: 1,
      },
      md: {
        px: 3,
        py: 2,
      },
    },
  }),
)

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'sm', className, ...props }, ref) => {
    const inputProps = useFormControl<HTMLInputElement>(props)
    return (
      <InputInner
        {...inputProps}
        sx={S}
        variant={size}
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
