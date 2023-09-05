import classNames from 'classnames'
import React from 'react'
import { components, ControlProps, Props } from 'react-select'
import ReactSelect from 'react-select'

import { useTheme } from '../../../hooks'
import { Box } from '../../box'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import { reactSelectStyle } from '../style'
import options from './HourInput.utils'

export interface HourInputProps
  extends Omit<Props, 'onChange' | 'isMulti' | 'value'> {
  readonly isDisabled?: boolean
  readonly disabled?: string
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
  readonly width?: string | number
  readonly onChange?: (value: string) => void
  readonly value?: string | null
}

const Control = ({ children, ...props }: ControlProps) => (
  <components.Control {...props}>
    {Array.isArray(children) && children[0]}
    <Icon
      mr={1}
      name={CapUIIcon.Clock}
      size={CapUIIconSize.Md}
      color="gray.700"
    />
  </components.Control>
)

const HourInput = ({
  value,
  onChange,
  id = 'cap-Hour-input-id',
  className,
  placeholder = '00:00',
  width,
  disabled,
  ...props
}: HourInputProps) => {
  const inputProps = useFormControl<HTMLInputElement>(props)
  const [input, setInput] = React.useState(value || '')
  const { colors } = useTheme()

  React.useEffect(() => {
    setInput(value || '')
  }, [value])

  return (
    <Box
      width={width || '92px'}
      sx={{ input: { opacity: value ? '1 !important' : 0 } }}
    >
      <ReactSelect
        {...inputProps}
        styles={reactSelectStyle(
          colors,
          inputProps['aria-invalid'],
          inputProps.disabled,
          inputProps.variantSize || CapInputSize.Sm,
        )}
        inputValue={input || ''}
        value={!value ? null : { label: value || '', value }}
        onInputChange={(newValue, action) => {
          if (action.action === 'input-change') {
            setInput(newValue)
            if (onChange) onChange(newValue)
          }
        }}
        // @ts-ignore newValue is supposed to be generic (unknown)
        onChange={(newValue: { label: string; value: string }) => {
          if (newValue) {
            setInput(newValue.value)
            if (onChange && newValue) onChange(newValue.value)
          }
        }}
        className={classNames('cap-hour-input', className)}
        classNamePrefix="cap-hour-input"
        isDisabled={inputProps.disabled}
        aria-invalid={inputProps['aria-invalid']}
        components={{ Control }}
        options={options}
        maxMenuHeight={210}
        menuPortalTarget={document?.body}
        placeholder={placeholder}
        noOptionsMessage={() => null}
        {...props}
      />
    </Box>
  )
}

export default HourInput
