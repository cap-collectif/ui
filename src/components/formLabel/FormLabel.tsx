import cn from 'classnames'
import * as React from 'react'
import { forwardRef } from 'react'

import { CapUIFontFamily, CapUILineHeight } from '../../styles'
import { Flex, FlexProps } from '../layout/Flex'

export interface FormLabelProps extends FlexProps {
  readonly htmlFor?: string
  readonly children?: React.ReactNode
}

export const FormLabel = forwardRef<FormLabelProps, FlexProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Flex
        align="center"
        spacing={1}
        ref={ref}
        color="gray.900"
        fontFamily={CapUIFontFamily.OpenSans}
        lineHeight={CapUILineHeight.S}
        fontSize={2}
        className={cn('cap-form-label', className)}
        {...props}
      >
        {children}
      </Flex>
    )
  },
)

FormLabel.displayName = 'FormLabel'

export default FormLabel as React.FC<FormLabelProps>
