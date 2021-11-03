import cn from 'classnames'
import * as React from 'react'
import { forwardRef } from 'react'

import { CapUIFontFamily, CapUILineHeight } from '../../../styles'
import { Flex, FlexProps } from '../../layout/Flex'
import { Text } from '../../typography'

export interface FormLabelProps extends FlexProps {
  readonly htmlFor?: string
  readonly label: string
  readonly children?: React.ReactNode
}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ children, className, label, ...props }, ref) => {
    return (
      <Flex
        as="label"
        align="center"
        spacing={1}
        ref={ref}
        fontFamily={CapUIFontFamily.Label}
        lineHeight={CapUILineHeight.Sm}
        fontSize={2}
        className={cn('cap-form-label', className)}
        {...props}
      >
        <Text
          fontFamily={CapUIFontFamily.Label}
          lineHeight={CapUILineHeight.Sm}
          fontSize={2}
          color="gray.900"
        >
          {label}
        </Text>
        {children}
      </Flex>
    )
  },
)

FormLabel.displayName = 'FormLabel'

export default FormLabel as React.FC<FormLabelProps>
