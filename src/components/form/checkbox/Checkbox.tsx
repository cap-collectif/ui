import cn from 'classnames'
import * as React from 'react'
import { forwardRef } from 'react'

import { CapUIFontFamily, CapUILineHeight } from '../../../styles'
import { Box, BoxPropsOf } from '../../box'
import { Flex } from '../../layout'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import { CheckboxContainer } from './Checkbox.style'

export interface CheckboxProps extends BoxPropsOf<'input'> {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
  readonly label?: React.ReactNode
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    const inputProps = useFormControl<HTMLInputElement>(props)
    return (
      <CheckboxContainer>
        <input
          {...inputProps}
          ref={ref}
          type="checkbox"
          className={cn('cap-checkbox', className)}
          {...props}
        />
        <Flex
          as="label"
          htmlFor={props.id}
          lineHeight={CapUILineHeight.Base}
          color={inputProps.disabled ? 'gray.500' : 'gray.900'}
          fontFamily={CapUIFontFamily.Label}
        >
          {label ? <Box ml={1}>{label}</Box> : ''}
        </Flex>
      </CheckboxContainer>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export default Checkbox as React.FC<CheckboxProps>
