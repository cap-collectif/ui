import cn from 'classnames'
import * as React from 'react'

import { CapUIFontFamily, CapUILineHeight } from '../../../styles'
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

  return (
    <Flex
      display="inline-flex"
      as="label"
      direction={direction}
      spacing={1}
      align="flexStart"
      htmlFor={id}
      fontFamily={CapUIFontFamily.Label}
    >
      <Box
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

        <Box as="div" className="cap-checkbox__box" sx={boxStyles} />
      </Box>

      {typeof children === 'string' ? (
        <Text
          as="span"
          fontSize={3}
          color={inputProps.disabled ? 'gray.500' : 'gray.900'}
          lineHeight={CapUILineHeight.Base}
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
