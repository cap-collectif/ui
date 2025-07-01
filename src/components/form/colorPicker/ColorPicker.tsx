import cn from 'classnames'
import * as React from 'react'
import { ChromePicker, TwitterPicker } from 'react-color'

import { useTheme } from '../../../hooks'
import { pxToRem } from '../../../styles/modules/mixins'
import Box, { BoxPropsOf } from '../../box/Box'
import { Flex } from '../../layout'
import { CapInputSize, InputVariantColor } from '../enums'
import { useFormControl } from '../formControl'
import { focusWithinStyles, InputInner } from '../style'
import { CapColorPickerVariant } from './enums'

export interface ColorPickerProps
  extends Omit<BoxPropsOf<'input'>, 'onChange' | 'value'> {
  isDisabled?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  variantSize?: CapInputSize
  value: string | null
  onChange: (value: string | null) => void
  withOpacity?: boolean
  variant?: CapColorPickerVariant
  colors?: string[]
  openPickerLabel?: string
  variantColor?: InputVariantColor
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
  variantColor = 'default',
  colors,
  openPickerLabel = 'Ouvrir le colorPicker',
  ...props
}) => {
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false)
  const inputProps = useFormControl<HTMLInputElement>(props)
  const { colors: themeColors } = useTheme()

  const { disabled } = inputProps

  const handleFocus = () => setDisplayColorPicker(false)

  return (
    <>
      <Flex
        sx={focusWithinStyles(
          !!disabled,
          !props.value,
          inputProps.readOnly,
          themeColors,
          variantColor,
        )}
        width={pxToRem(132)}
        alignItems="center"
        position="relative"
        className="cap-color-picker_container"
      >
        <Box
          position="absolute"
          borderRadius="button"
          height={4}
          width={4}
          left={2}
          aria-hidden
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
          onFocus={handleFocus}
          bg={String(props.value)}
          sx={{ cursor: disabled ? 'auto' : 'pointer' }}
          aria-label={openPickerLabel}
        />
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
        <InputInner
          {...inputProps}
          variant={inputProps.variantSize}
          borderRadius="button"
          as="input"
          className={cn('cap-color-picker', className)}
          width="100%"
          bg="transparent"
          sx={{ '&:focus-visible': { outline: 'none' } }}
          {...props}
          onFocus={handleFocus}
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
