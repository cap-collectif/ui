import cn from 'classnames'
import * as React from 'react'

import { useTheme } from '../../hooks'
import { CapUIFontSize, CapUILineHeight } from '../../styles'
import { labelTextStyles } from '../../utils/labelTextStyle'
import { Box, PolymorphicBoxProps } from '../box/Box'
import { useFormControl } from '../form'
import { Flex, FlexProps } from '../layout'
import { Text } from '../typography'
import { sliderStyles } from './Switch.style'

export interface SwitchProps
  extends Omit<PolymorphicBoxProps<'input'>, keyof FlexProps>,
    FlexProps {
  readonly id: string
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly direction?: FlexProps['direction']
}

export const Switch: React.FC<SwitchProps> = React.forwardRef<
  HTMLInputElement,
  SwitchProps
>(({ className, children, id, direction = 'row', ...props }, ref) => {
  const inputProps = useFormControl<HTMLInputElement>(props)
  const { colors } = useTheme()
  return (
    <Flex
      display="inline-flex"
      as="label"
      direction={direction}
      spacing={'xs'}
      align="center"
      htmlFor={id}
    >
      <Box
        as="span"
        className={cn('cap-switch', className)}
        position="relative"
        width={8}
        height={4}
      >
        <Box
          as="input"
          {...props}
          {...inputProps}
          type="checkbox"
          className="cap-switch__input"
          width={0}
          height={0}
          opacity={0}
          id={id}
          ref={ref}
        />

        <Box
          as="span"
          className="cap-switch__slider"
          sx={sliderStyles(colors)}
        />
      </Box>

      {typeof children === 'string' ? (
        <Text
          as="span"
          fontSize={CapUIFontSize.BodyRegular}
          lineHeight={CapUILineHeight.M}
          color={inputProps.disabled ? 'text.disable' : 'text.primary'}
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

Switch.displayName = 'Switch'

export default Switch
