import cn from 'classnames'
import * as React from 'react'

import { CapUILineHeight } from '../../styles'
import { Box, BoxPropsOf } from '../box'
import { useFormControl } from '../form'
import { Flex, FlexProps } from '../layout'
import { Text } from '../typography'
import { sliderStyles } from './Switch.style'

export interface SwitchProps
  extends Omit<BoxPropsOf<'input'>, keyof FlexProps>,
    FlexProps {
  readonly id: string
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly direction?: FlexProps['direction']
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, children, id, direction = 'row', ...props }, ref) => {
    const inputProps = useFormControl<HTMLInputElement>(props)

    return (
      <Flex
        display="inline-flex"
        as="label"
        direction={direction}
        spacing={2}
        align="center"
        htmlFor={id}
      >
        <Box
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

          <Box as="div" className="cap-switch__slider" sx={sliderStyles} />
        </Box>

        {typeof children === 'string' ? (
          <Text as="span" fontSize={3} lineHeight={CapUILineHeight.Base}>
            {children}
          </Text>
        ) : (
          children
        )}
      </Flex>
    )
  },
)

Switch.displayName = 'Switch'

export default Switch as React.FC<SwitchProps>
