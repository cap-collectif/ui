import cn from 'classnames'
import * as React from 'react'

import {
  CapUIFontFamily,
  CapUIFontSize,
  CapUILineHeight,
} from '../../../styles'
import { Flex, FlexProps } from '../../layout/Flex'
import { Text } from '../../typography'

export interface FormLabelProps extends FlexProps {
  readonly htmlFor?: string
  readonly label: string
  readonly children?: React.ReactNode
}

export const FormLabel: React.FC<FormLabelProps> = React.forwardRef<
  HTMLLabelElement,
  FormLabelProps
>(({ children, className, label, ...props }, ref) => {
  return (
    <Flex
      as="label"
      align="center"
      spacing={1}
      ref={ref}
      fontFamily={CapUIFontFamily.Label}
      lineHeight={CapUILineHeight.S}
      fontSize={CapUIFontSize.BodySmall}
      className={cn('cap-form-label', className)}
      {...props}
    >
      <Text
        fontFamily={CapUIFontFamily.Label}
        lineHeight={CapUILineHeight.S}
        fontSize={CapUIFontSize.BodySmall}
        color="gray.900"
      >
        {label}
      </Text>
      {children}
    </Flex>
  )
})

FormLabel.displayName = 'FormLabel'

export default FormLabel
