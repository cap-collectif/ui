import cn from 'classnames'
import * as React from 'react'

import { useTheme } from '../../../hooks'
import { pxToRem } from '../../../styles/modules/mixins'
import { Box, BoxPropsOf } from '../../box'
import { Icon, CapUIIcon, CapUIIconSize } from '../../icon'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import { focusWithinStyles, InputInner } from '../style'

export interface InputNumberProps extends BoxPropsOf<'input'> {
  readonly placeholder?: string
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
}

export const InputNumber = ({
  className,
  width,
  onChange,
  ...props
}: InputNumberProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const inputProps = useFormControl<HTMLInputElement>(props)
  const { variantSize, disabled } = inputProps
  const isEmpty = props.value !== 0 && !props.value
  const { colors } = useTheme()

  return (
    <InputInner
      sx={focusWithinStyles(!!disabled, isEmpty, inputProps.readOnly, colors)}
      variant={variantSize}
      as="div"
      display="flex"
      alignItems="center"
      width={width || pxToRem(104)}
      className="cap-input-number_container"
    >
      <Box
        as="button"
        aria-hidden
        tabIndex={-1}
        disabled={inputProps.disabled}
        onClick={() => {
          inputRef.current?.focus()
          inputRef.current?.setAttribute(
            'value',
            inputRef.current?.value || '0',
          )
          inputRef.current?.stepDown()
          if (onChange) {
            inputRef.current?.dispatchEvent(
              new Event('input', { bubbles: true }),
            )
          }
        }}
      >
        <Icon
          color="inherit"
          _hover={{ color: 'gray.black' }}
          name={CapUIIcon.Minus}
          size={CapUIIconSize.Sm}
        />
      </Box>
      <Box
        as="input"
        {...inputProps}
        ref={inputRef}
        type="number"
        className={cn('cap-input-number', className)}
        width="100%"
        bg="inherit"
        textAlign="center"
        onChange={onChange}
        {...props}
      />
      <Box
        as="button"
        aria-hidden
        tabIndex={-1}
        disabled={inputProps.disabled}
        onClick={() => {
          inputRef.current?.focus()
          inputRef.current?.setAttribute(
            'value',
            inputRef.current?.value || '0',
          )
          inputRef.current?.stepUp()
          if (onChange) {
            inputRef.current?.dispatchEvent(
              new Event('input', { bubbles: true }),
            )
          }
        }}
      >
        <Icon
          color="inherit"
          _hover={{ color: 'gray.black' }}
          name={CapUIIcon.Add}
          size={CapUIIconSize.Sm}
        />
      </Box>
    </InputInner>
  )
}
InputNumber.displayName = 'InputNumber'

export default InputNumber as React.FC<InputNumberProps>
