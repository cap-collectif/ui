import cn from 'classnames'
import * as React from 'react'

import { useTheme } from '../../../hooks'
import {
  CapUIFontFamily,
  CapUIFontSize,
  CapUILineHeight,
} from '../../../styles'
import { labelTextStyles } from '../../../utils/labelTextStyle'
import { Box } from '../../box'
import { PolymorphicBoxProps } from '../../box/Box'
import { Flex, FlexProps } from '../../layout'
import { Text } from '../../typography'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import { boxStyles } from './Checkbox.style'

export interface CheckboxProps extends PolymorphicBoxProps<'input'> {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
  readonly id: string
  readonly direction?: FlexProps['direction']
}

export const Checkbox: React.FC<CheckboxProps> = React.forwardRef<
  HTMLInputElement,
  CheckboxProps
>(({ className, id, children, direction = 'row', ...props }, ref) => {
  const inputProps = useFormControl<HTMLInputElement>(props)
  const { colors } = useTheme()

  return (
    <Flex
      display="inline-flex"
      as="label"
      direction={direction}
      spacing={'xxs'}
      align="flex-start"
      htmlFor={id}
      fontFamily={CapUIFontFamily.Label}
    >
      <Box
        as="span"
        className={cn('cap-checkbox', className)}
        position="relative"
        width="24px"
        height="24px"
        flexShrink={0}
      >
        <Box
          as="input"
          {...props}
          {...inputProps}
          type="checkbox"
          className="cap-checkbox__input"
          width={0}
          height={0}
          opacity={0}
          id={id}
          ref={ref}
        />

        <Box as="span" className="cap-checkbox__box" sx={boxStyles(colors)} />
      </Box>

      {typeof children === 'string' ? (
        <Text
          as="span"
          fontSize={CapUIFontSize.BodyRegular}
          color={inputProps.disabled ? 'text.disable' : 'text.primary'}
          lineHeight={CapUILineHeight.M}
          sx={labelTextStyles()}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Flex>
  )
})

Checkbox.displayName = 'Checkbox'

export default Checkbox
