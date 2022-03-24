import cn from 'classnames'
import * as React from 'react'

import { CapUIFontFamily, CapUILineHeight } from '../../../styles'
import { Box, BoxProps } from '../../box'

export interface FormGuidelineProps extends BoxProps {
  readonly children?: React.ReactNode
}

export const FormGuideline: React.FC<FormGuidelineProps> = React.forwardRef<
  HTMLSpanElement,
  FormGuidelineProps
>(({ children, className, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      as="span"
      color="gray.700"
      fontFamily={CapUIFontFamily.Label}
      lineHeight={CapUILineHeight.Sm}
      fontSize={2}
      className={cn('cap-form-guideline', className)}
      mb={1}
      {...props}
    >
      {children}
    </Box>
  )
})

FormGuideline.displayName = 'FormGuideline'

export default FormGuideline
