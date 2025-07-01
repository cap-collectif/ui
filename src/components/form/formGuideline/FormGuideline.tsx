import cn from 'classnames'
import * as React from 'react'

import { CapUIFontSize, CapUILineHeight } from '../../../styles'
import { Box, BoxProps } from '../../box'
import { useFormControl } from '../formControl'

export interface FormGuidelineProps extends BoxProps {
  readonly children?: React.ReactNode
}

export const FormGuideline: React.FC<FormGuidelineProps> = React.forwardRef<
  HTMLSpanElement,
  FormGuidelineProps
>(({ children, className, ...props }, ref) => {
  const inputProps = useFormControl({})
  return (
    <Box
      ref={ref}
      as="span"
      color={inputProps?.disabled ? 'text.disable' : 'text.tertiary'}
      lineHeight={CapUILineHeight.S}
      fontSize={CapUIFontSize.BodySmall}
      className={cn('cap-form-guideline', className)}
      mb="xxs"
      {...props}
    >
      {children}
    </Box>
  )
})

FormGuideline.displayName = 'FormGuideline'

export default FormGuideline
