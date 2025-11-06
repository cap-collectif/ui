import cn from 'classnames'
import * as React from 'react'

import { useTheme } from '../../../hooks'
import { CapUIFontSize, CapUILineHeight } from '../../../styles'
import { pxToRem } from '../../../styles/modules/mixins'
import type { PolymorphicBoxProps } from '../../box/Box'
import { Flex } from '../../layout'
import { Text } from '../../typography'
import { CapInputSize, InputVariantColor } from '../enums'
import { useFormControl } from '../formControl'
import S, { InputInner } from '../style'

export interface TextAreaProps extends PolymorphicBoxProps<'textarea'> {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
  readonly variantColor?: InputVariantColor
  readonly resize?:
    | 'none'
    | 'both'
    | 'horizontal'
    | 'vertical'
    | 'block'
    | 'inline'
    | 'inherit'
    | 'initial'
    | 'unset'
}

export const TextArea: React.FC<TextAreaProps> = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(({ className, maxLength, value, width, resize = 'none', ...props }, ref) => {
  const { colors } = useTheme()
  const inputProps = useFormControl<HTMLTextAreaElement>(props)

  return (
    <Flex direction="column" width={width || '100%'} position="relative">
      <InputInner
        {...inputProps}
        sx={{ ...S(colors, inputProps.variantColor), resize }}
        variant={inputProps.variantSize}
        variantColor={inputProps.variantColor}
        ref={ref}
        as="textarea"
        className={cn('cap-textarea', className)}
        width="100%"
        rows={3}
        value={value}
        maxLength={maxLength}
        {...props}
      />
      {maxLength && !inputProps['aria-invalid'] && (
        <Text
          as="div"
          position="absolute"
          right={0}
          top={pxToRem(-20)}
          color="text.tertiary"
          fontSize={CapUIFontSize.Caption}
          lineHeight={CapUILineHeight.S}
          bg="inherit"
        >
          {(value && typeof value === 'string' && value.length) || 0}/
          {maxLength}
        </Text>
      )}
    </Flex>
  )
})

TextArea.displayName = 'TextArea'

export default TextArea
