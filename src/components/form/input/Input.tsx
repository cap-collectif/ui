import cn from 'classnames'
import * as React from 'react'

import type { PolymorphicBoxProps } from '../../box/Box'
import Box from '../../box/Box'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import S, { focusWithinStyles, InputInner } from '../style'

export interface InputProps extends PolymorphicBoxProps<'input'> {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
  readonly onClear?: () => void
}

export const Input: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ className, onClear, ...props }, ref) => {
  const inputProps = useFormControl<HTMLInputElement>(props)
  const { disabled } = inputProps
  if ((props.type && props.type !== 'input') || !onClear) {
    return (
      <InputInner
        {...inputProps}
        sx={S}
        variant={inputProps.variantSize}
        disableFocusStyles
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
      sx={focusWithinStyles(!!inputProps['aria-invalid'], !!disabled)}
      variant={inputProps.variantSize}
      as="div"
      display="flex"
      className={cn('cap-input', className)}
    >
      <Box
        {...inputProps}
        as="input"
        disableFocusStyles
        width="100%"
        ref={ref}
        bg="inherit"
        {...props}
      />
      {onClear ? (
        <Box
          as="button"
          onClick={onClear}
          type="button"
          disabled={disabled}
          sx={{ cursor: disabled ? 'default' : 'pointer' }}
        >
          <Icon
            name={CapUIIcon.Trash}
            size={CapUIIconSize.Sm}
            color="gray.500"
          />
        </Box>
      ) : null}
    </InputInner>
  )
})

Input.displayName = 'Input'

export default Input
