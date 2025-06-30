import cn from 'classnames'
import * as React from 'react'
import type { GroupBase } from 'react-select'
import type { AsyncProps } from 'react-select/async'
import AsyncCreatable from 'react-select/async-creatable'

import { useTheme } from '../../../hooks'
import { Box } from '../../box'
import { CapInputSize, InputVariantColor } from '../enums'
import { useFormControl } from '../formControl'
import { reactSelectStyle } from '../style'
import { MultiValue, Control } from './Select'

export interface AsyncCreatableSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends AsyncProps<Option, IsMulti, Group> {
  isDisabled?: boolean
  variantSize?: CapInputSize
  variantColor?: InputVariantColor
  width?: string | number
  formatCreateLabel?: (userInput: string) => React.ReactNode
  onCreateOption?: (userInput: string) => void
  onChange?: (newValue: any) => void
  loadOptions?: (
    inputValue: string,
    callback: (options: any) => void,
  ) => Promise<any> | void
}

export function AsyncCreatableSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  className,
  width,
  ...props
}: AsyncCreatableSelectProps<Option, IsMulti, Group>) {
  const inputProps = useFormControl<HTMLInputElement>(props)
  const { colors } = useTheme()

  return (
    <Box width={width || '100%'}>
      <AsyncCreatable<Option, IsMulti, Group>
        styles={reactSelectStyle(
          colors,
          inputProps.variantSize,
          inputProps.variantColor,
        )}
        className={cn('cap-async-creatable-select', className)}
        classNamePrefix="cap-async-creatable-select"
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

AsyncCreatableSelect.displayName = 'AsyncCreatableSelect'

export default AsyncCreatableSelect
