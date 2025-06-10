import cn from 'classnames'
import * as React from 'react'
import Select from 'react-select/creatable'

import { useTheme } from '../../../hooks'
import { Box } from '../../box'
import { InputVariantColor } from '../enums'
import { useFormControl } from '../formControl'
import { reactSelectStyle } from '../style'
import { SelectProps } from './'
import { MultiValue, Control } from './Select'

export interface CreatableSelectProps extends SelectProps {
  formatCreateLabel?: (userInput: string) => React.ReactNode
  onCreateOption?: (userInput: string) => void
  variantColor?: InputVariantColor
}

export function CreatableSelect({
  className,
  width,
  ...props
}: CreatableSelectProps) {
  const inputProps = useFormControl<HTMLInputElement>(props)
  const { colors } = useTheme()

  return (
    <Box width={width || '100%'}>
      {/* @ts-ignore:  https://github.com/DefinitelyTyped/DefinitelyTyped/pull/49673 */}
      <Select
        styles={reactSelectStyle(
          colors,
          inputProps.variantSize,
          inputProps.variantColor,
        )}
        className={cn('cap-creatable-select', className)}
        classNamePrefix="cap-creatable-select"
        isDisabled={inputProps.disabled}
        aria-invalid={inputProps['aria-invalid']}
        components={{ MultiValue, Control }}
        maxMenuHeight={210}
        menuPortalTarget={document?.body}
        {...props}
      />
    </Box>
  )
}

CreatableSelect.displayName = 'CreatableSelect'

export default CreatableSelect as React.FC<CreatableSelectProps>
