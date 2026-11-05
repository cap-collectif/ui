import cn from 'classnames'
import * as React from 'react'
import Select from 'react-select/creatable'

import { useTheme } from '../../../hooks'
import { Box } from '../../box'
import { InputVariantColor } from '../enums'
import { useFormControl } from '../formControl'
import { reactSelectStyle } from '../style'
import { SelectProps } from './'
import { Control, MultiValue } from './Select'

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
  const isReadonly = !!inputProps.readOnly
  const { colors } = useTheme()

  return (
    <Box width={width || '100%'}>
      {/* @ts-ignore:  https://github.com/DefinitelyTyped/DefinitelyTyped/pull/49673 */}
      <Select
        styles={reactSelectStyle(
          colors,
          inputProps.variantSize,
          inputProps.variantColor,
          false,
          isReadonly,
        )}
        className={cn('cap-creatable-select', className)}
        classNamePrefix="cap-creatable-select"
        aria-invalid={inputProps['aria-invalid']}
        components={{ MultiValue, Control }}
        maxMenuHeight={210}
        menuPortalTarget={document?.body}
        {...props}
        isDisabled={inputProps.disabled || isReadonly}
        // readonly does not exist for select components, but we want matching styles if within form inputs that are readonly.
        // @ts-ignore custom prop forwarded to selectProps
        isReadonly={isReadonly}
      />
    </Box>
  )
}

CreatableSelect.displayName = 'CreatableSelect'

export default CreatableSelect as React.FC<CreatableSelectProps>
