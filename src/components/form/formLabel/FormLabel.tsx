import cn from 'classnames'
import * as React from 'react'

import {
  CapUIFontFamily,
  CapUIFontSize,
  CapUILineHeight,
} from '../../../styles'
import { Flex, FlexProps } from '../../layout/Flex'
import { Text } from '../../typography'
import { useFormControl } from '../formControl'

export interface FormLabelProps extends FlexProps {
  readonly htmlFor?: string
  readonly label: string
  readonly children?: React.ReactNode
}

export const FormLabel: React.FC<FormLabelProps> = React.forwardRef<
  HTMLLabelElement,
  FormLabelProps
>(({ children, className, label, htmlFor, ...props }, ref) => {
  const inputProps = useFormControl({})
  const inputId = inputProps?.inputId || htmlFor
  return (
    <Flex
      as="label"
      align="center"
      spacing="xxs"
      ref={ref}
      fontFamily={CapUIFontFamily.Label}
      lineHeight={CapUILineHeight.S}
      fontSize={CapUIFontSize.BodySmall}
      className={cn('cap-form-label', className)}
      htmlFor={inputId}
      {...props}
    >
      <Text
        as="span"
        display="block"
        fontFamily={CapUIFontFamily.Label}
        lineHeight={CapUILineHeight.S}
        fontSize={CapUIFontSize.BodySmall}
        color={inputProps?.disabled ? 'text.disable' : 'text.secondary'}
      >
        {label}
      </Text>
      {children}
    </Flex>
  )
})

FormLabel.displayName = 'FormLabel'

export default FormLabel
