import cn from 'classnames'
import * as React from 'react'
import { ChromePicker } from 'react-color'

import type { PolymorphicBoxProps } from '../../box/Box'
import Box from '../../box/Box'
import { Flex } from '../../layout'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import S, { InputInner } from '../style'

export interface ColorPickerProps extends PolymorphicBoxProps<'input'> {
  readonly isDisabled?: boolean
  readonly variantSize?: CapInputSize
}

const toHexWithAlpha = (hex: string, opacity: number) =>
  `${hex}${Math.round(opacity * 255).toString(16)}`

const alphaGrid =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII='

export const ColorPicker: React.FC<ColorPickerProps> = React.forwardRef<
  HTMLInputElement,
  ColorPickerProps
>(({ className, onChange, ...props }, ref) => {
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false)
  const inputProps = useFormControl<HTMLInputElement>(props)

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
            onChange={color => {
              if (onChange)
                onChange(toHexWithAlpha(color.hex, color.rgb.a || 0))
            }}
          />
        </Box>
      ) : null}
      <Flex
        sx={{
          ...S,
          '&:focus-within': {
            borderColor: 'blue.500',
          },
        }}
        width="132px"
        alignItems="center"
        position="relative"
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
          onClick={() => setDisplayColorPicker(true)}
          bg={String(props.value)}
        ></Box>
        <InputInner
          {...inputProps}
          variant={inputProps.variantSize}
          disableFocusStyles
          ref={ref}
          borderRadius="button"
          as="input"
          className={cn('cap-input', className)}
          width="100%"
          {...props}
          onChange={e => {
            if (onChange) onChange(e.target.value)
          }}
          value={props.value}
        ></InputInner>
      </Flex>
    </>
  )
})

ColorPicker.displayName = 'ColorPicker'

export default ColorPicker
