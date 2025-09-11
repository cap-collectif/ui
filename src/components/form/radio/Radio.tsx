import { SystemStyleObject } from '@styled-system/css'
import cn from 'classnames'
import * as React from 'react'

import { useTheme } from '../../../hooks'
import {
  CapUIFontFamily,
  CapUIFontSize,
  CapUILineHeight,
} from '../../../styles'
import { Box } from '../../box'
import { PolymorphicBoxProps } from '../../box/Box'
import { Flex, FlexProps } from '../../layout'
import { Text } from '../../typography'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import { boxStyles, labelStyles } from './Radio.style'

export interface RadioProps extends PolymorphicBoxProps<'input'> {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
  readonly id: string
  readonly direction?: FlexProps['direction']
  readonly labelSx?: SystemStyleObject
}

export const Radio: React.FC<RadioProps> = React.forwardRef<
  HTMLInputElement,
  RadioProps
>(({ className, id, children, direction = 'row', labelSx, ...props }, ref) => {
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
      sx={labelSx}
    >
      <Box
        as="span"
        className={cn('cap-radio', className)}
        position="relative"
        width="24px"
        height="24px"
        flexShrink={0}
      >
        <Box
          as="input"
          {...props}
          {...inputProps}
          type="radio"
          className="cap-radio__input"
          width={0}
          height={0}
          opacity={0}
          id={id}
          ref={ref}
        />

        <Box as="span" className="cap-radio__box" sx={boxStyles(colors)} />
      </Box>

      {typeof children === 'string' ? (
        <Text
          as="span"
          fontSize={CapUIFontSize.BodyRegular}
          color={inputProps.disabled ? 'text.disable' : 'text.primary'}
          lineHeight={CapUILineHeight.M}
          sx={labelStyles()}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Flex>
  )
})

Radio.displayName = 'Radio'

export default Radio
