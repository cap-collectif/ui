import cn from 'classnames'
import * as React from 'react'

import { Box, BoxPropsOf } from '../../box'
import { Button } from '../../button'
import { Icon, CapUIIcon, CapUIIconSize } from '../../icon'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import S, { InputInner } from '../style'

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
  const [isHover, setIsHover] = React.useState(false)
  const { variantSize } = inputProps
  return (
    <Box position="relative" width={width || '104px'}>
      <Button
        disabled={inputProps.disabled}
        variant="tertiary"
        backgroundColor="unset"
        position="absolute"
        right={3}
        bottom={variantSize === CapInputSize.Sm ? 1 : 2}
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
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Icon
          color="gray.500"
          _hover={{ color: 'gray.900' }}
          name={CapUIIcon.ArrowDown}
          size={CapUIIconSize.Xs}
        />
      </Button>
      <InputInner
        {...inputProps}
        sx={S}
        variant={variantSize}
        ref={inputRef}
        as="input"
        type="number"
        className={cn('cap-input-number', className, { hover: isHover })}
        width="100%"
        onChange={onChange}
        {...props}
      />
      <Button
        disabled={inputProps.disabled}
        variant="tertiary"
        bg="none"
        position="absolute"
        right={3}
        top={variantSize === CapInputSize.Sm ? 1 : 2}
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
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Icon
          color="gray.500"
          _hover={{ color: 'gray.900' }}
          name={CapUIIcon.ArrowUp}
          size={CapUIIconSize.Xs}
        />
      </Button>
    </Box>
  )
}
InputNumber.displayName = 'InputNumber'

export default InputNumber as React.FC<InputNumberProps>
