import cn from 'classnames'
import * as React from 'react'
import { forwardRef } from 'react'

import { CapUIFontFamily, CapUILineHeight } from '../../../styles'
import { Box, BoxProps } from '../../box'
import { useFormControlContext } from '../formControl'

export interface FormErrorMessageProps extends BoxProps {
  readonly isInvalid?: boolean
  readonly children?: React.ReactNode
}

export const FormErrorMessage = forwardRef<HTMLElement, FormErrorMessageProps>(
  ({ children, className, isInvalid, ...props }, ref) => {
    const field = useFormControlContext()
    if ((!field?.isInvalid && !isInvalid) || field.isDisabled) return null

    return (
      <Box
        ref={ref}
        color="red.500"
        fontFamily={CapUIFontFamily.OpenSans}
        lineHeight={CapUILineHeight.S}
        fontSize={3}
        className={cn('cap-form-error-message', className)}
        {...props}
      >
        {children}
      </Box>
    )
  },
)

FormErrorMessage.displayName = 'FormErrorMessage'

export default FormErrorMessage as React.FC<FormErrorMessageProps>
