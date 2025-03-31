import cn from 'classnames'
import * as React from 'react'
import { ChromePicker, TwitterPicker } from 'react-color'

import Box, { BoxPropsOf } from '../../box/Box'
import { Flex } from '../../layout'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import S, { InputInner } from '../style'
import { CapColorPickerVariant } from './enums'

export interface ColorPickerProps
  extends Omit<BoxPropsOf<'input'>, 'onChange' | 'value'> {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly isRequired?: boolean
  readonly variantSize?: CapInputSize
  readonly value: string | null
  readonly onChange: (value: string | null) => void
  readonly withOpacity?: boolean
  readonly variant?: CapColorPickerVariant
  readonly colors?: string[]
}

const toHexwithOpacity = (hex: string, opacity: number) =>
  `${hex}${Math.round(opacity * 255).toString(16)}`

const alphaGrid =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII='

export const ColorPicker: React.FC<ColorPickerProps> = ({
  className,
  onChange,
  withOpacity = false,
  variant = CapColorPickerVariant.Chrome,
  colors,
  ...props
}) => {
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false)
  const inputProps = useFormControl<HTMLInputElement>(props)

  const { disabled } = inputProps
  const invalid = inputProps['aria-invalid']
  return (
    <>
      {displayColorPicker ? (
        <Box position="absolute" zIndex={2} top="50px">
          <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            onClick={() => setDisplayColorPicker(false)}
          />
          {variant === CapColorPickerVariant.Chrome ? (
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
          ) : (
            <Box
              sx={{
                'span + div': {
                  display: 'none !important',
                },
                '[id^=rc-editable-input]': {
                  display: 'none',
                },
              }}
            >
              <TwitterPicker
                colors={
                  colors || [
                    '#1A88FF',
                    '#33CEE6',
                    '#46D267',
                    '#FFC61A',
                    '#FFA31A',
                    '#DD3C4C',
                  ]
                }
                width="135px"
                triangle="hide"
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
          )}
        </Box>
      ) : null}
      <Flex
        sx={{
          ...S,
          '&:focus-within,&:active,&:focus': {
            borderColor: disabled
              ? 'gray.300'
              : invalid
              ? 'red.500'
              : 'primary.base',
          },
          '&:focus-within': { bg: disabled ? 'gray.100' : 'white' },
        }}
        borderColor={invalid ? 'red.500' : undefined}
        width="132px"
        alignItems="center"
        position="relative"
        bg={disabled ? 'gray.100' : invalid ? 'red.150' : 'white'}
        className="cap-color-picker_container"
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
          type="button"
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
        />
        <InputInner
          {...inputProps}
          variant={inputProps.variantSize}
          borderRadius="button"
          as="input"
          className={cn('cap-color-picker', className)}
          width="100%"
          bg={inputProps.disabled ? 'gray.100' : invalid ? 'red.150' : 'white'}
          sx={{ '&:active,&:focus': { bg: disabled ? 'gray.100' : 'white' } }}
          {...props}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange)
              onChange(e.target.value?.substring(0, withOpacity ? 9 : 7))
          }}
          value={props.value}
        />
      </Flex>
    </>
  )
}

ColorPicker.displayName = 'ColorPicker'

export default ColorPicker
