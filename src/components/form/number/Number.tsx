import cn from 'classnames'
import * as React from 'react'

import { Box, BoxProps } from '../../box'
import { Button } from '../../button'
import { Icon, CapUIIcon, CapUIIconSize } from '../../icon'
import { useFormControl } from '../formControl'
import S, { InputInner } from '../style'

export interface NumberProps extends BoxProps {
  readonly placeholder?: string
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: 'sm' | 'md'
  readonly min?: number
  readonly max?: number
  readonly step?: number
}

export const Number = ({
  className,
  width,
  onChange,
  ...props
}: NumberProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const inputProps = useFormControl<HTMLInputElement>(props)
  const [isHover, setIsHover] = React.useState(false)
  const { variantSize } = inputProps
  return (
    <Box position="relative" width={width || '104px'}>
      <Button
        disableFocusStyles
        disabled={inputProps.disabled}
        variant="tertiary"
        backgroundColor="unset"
        position="absolute"
        right={3}
        bottom={variantSize === 'sm' ? 1 : 2}
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
          name={CapUIIcon.ArrowDown}
          size={CapUIIconSize.Xs}
        />
      </Button>
      <InputInner
        {...inputProps}
        sx={S}
        variant={variantSize || 'sm'}
        disableFocusStyles
        ref={inputRef}
        as="input"
        type="number"
        className={cn('cap-input-number', className, { hover: isHover })}
        width="100%"
        onChange={onChange}
        {...props}
      />
      <Button
        disableFocusStyles
        disabled={inputProps.disabled}
        variant="tertiary"
        bg="none"
        position="absolute"
        right={3}
        top={variantSize === 'sm' ? 1 : 2}
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
          name={CapUIIcon.ArrowUp}
          size={CapUIIconSize.Xs}
        />
      </Button>
    </Box>
  )
}
Number.displayName = 'Number'

export default Number as React.FC<NumberProps>
