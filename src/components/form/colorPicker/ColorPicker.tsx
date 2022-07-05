import cn from 'classnames'
import * as React from 'react'
import { ChromePicker } from 'react-color'

import Box, { BoxPropsOf } from '../../box/Box'
import { Flex } from '../../layout'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import S, { InputInner } from '../style'

export interface ColorPickerProps
  extends Omit<BoxPropsOf<'input'>, 'onChange' | 'value'> {
  readonly isDisabled?: boolean
  readonly variantSize?: CapInputSize
  readonly value: string | null
  readonly onChange: (value: string | null) => void
  readonly withOpacity?: boolean
}

const toHexwithOpacity = (hex: string, opacity: number) =>
  `${hex}${Math.round(opacity * 255).toString(16)}`

const alphaGrid =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII='

export const ColorPicker: React.FC<ColorPickerProps> = ({
  className,
  onChange,
  withOpacity = false,
  ...props
}) => {
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false)
  const inputProps = useFormControl<HTMLInputElement>(props)

  const { disabled } = inputProps

  return (
    <>
      {displayColorPicker ? (
        <Box position="absolute" zIndex={2}>
          <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            onClick={() => setDisplayColorPicker(false)}
          />
          <ChromePicker
            color={String(props.value)}
            disableAlpha={!withOpacity}
            onChange={color => {
              if (onChange)
                onChange(
                  withOpacity
                    ? toHexwithOpacity(color.hex, color.rgb.a || 0)
                    : color.hex,
                )
            }}
          />
        </Box>
      ) : null}
      <Flex
        sx={{
          ...S,
          '&:focus-within,&:active,&:focus': {
            borderColor: disabled ? 'gray.300' : 'blue.500',
          },
        }}
        width="132px"
        alignItems="center"
        position="relative"
        bg={disabled ? 'gray.100' : 'white'}
      >
        <Box
          position="absolute"
          borderRadius="button"
          height={4}
          width={4}
          left={2}
          sx={{ background: `url("${alphaGrid}")` }}
        />
        <Box
          as="button"
          flex="none"
          ml={2}
          height={4}
          width={4}
          zIndex={1}
          borderRadius="button"
          disabled={disabled}
          onClick={() => setDisplayColorPicker(true)}
          bg={String(props.value)}
          sx={{ cursor: disabled ? 'auto' : 'pointer' }}
        ></Box>
        <InputInner
          {...inputProps}
          variant={inputProps.variantSize}
          disableFocusStyles
          borderRadius="button"
          as="input"
          className={cn('cap-color-picker', className)}
          width="100%"
          bg={inputProps.disabled ? 'gray.100' : 'white'}
          {...props}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange)
              onChange(e.target.value?.substring(0, withOpacity ? 9 : 7))
          }}
          value={props.value}
        ></InputInner>
      </Flex>
    </>
  )
}

ColorPicker.displayName = 'ColorPicker'

export default ColorPicker
