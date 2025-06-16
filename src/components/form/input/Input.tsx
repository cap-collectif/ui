import cn from 'classnames'
import * as React from 'react'

import { useTheme } from '../../../hooks'
import type { PolymorphicBoxProps } from '../../box/Box'
import Box from '../../box/Box'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { Tooltip } from '../../tooltip'
import { CapInputSize, InputVariantColor } from '../enums'
import { useFormControl } from '../formControl'
import S, { focusWithinStyles, InputInner } from '../style'

export interface InputProps extends PolymorphicBoxProps<'input'> {
  isDisabled?: boolean
  isInvalid?: boolean
  isReadonly?: boolean
  variantSize?: CapInputSize
  variantColor?: InputVariantColor
  onClickActions?: Array<{
    icon: CapUIIcon
    onClick: () => void
    label: string
  }>
}

export const Input: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ className, onClickActions, ...props }, ref) => {
  const { colors } = useTheme()
  const inputProps = useFormControl<HTMLInputElement>(props)
  const { disabled } = inputProps
  const isEmpty = props.value !== 0 && !props.value

  if ((props.type && props.type !== 'text') || !onClickActions) {
    return (
      <InputInner
        {...inputProps}
        sx={S(colors, inputProps.variantColor, isEmpty)}
        variant={inputProps.variantSize}
        ref={ref}
        as="input"
        className={cn('cap-input', className)}
        width="100%"
        {...props}
      />
    )
  }

  return (
    <InputInner
      sx={focusWithinStyles(
        !!disabled,
        isEmpty,
        inputProps.readOnly,
        colors,
        inputProps.variantColor,
      )}
      variant={inputProps.variantSize}
      as="div"
      display="flex"
      className={cn('cap-input-outer', className)}
    >
      <Box
        {...inputProps}
        className="cap-input"
        as="input"
        width="100%"
        ref={ref}
        bg="inherit"
        {...props}
      />
      {onClickActions
        ? onClickActions.map(action => (
            <Tooltip label={action.label}>
              <Box
                as="button"
                onClick={action.onClick}
                type="button"
                disabled={disabled}
                sx={{ cursor: disabled ? 'default' : 'pointer' }}
                ml={4}
              >
                <Icon
                  className="cap-input-icon"
                  name={action.icon}
                  size={CapUIIconSize.Sm}
                  color="inherit"
                />
              </Box>
            </Tooltip>
          ))
        : null}
    </InputInner>
  )
})

Input.displayName = 'Input'

export default Input
