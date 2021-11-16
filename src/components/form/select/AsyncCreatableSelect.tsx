import cn from 'classnames'
import * as React from 'react'
import type { GroupBase } from 'react-select'
import type { AsyncProps } from 'react-select/async'
import AsyncCreatable from 'react-select/async-creatable'

import { Box } from '../../box'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import { reactSelectStyle } from '../style'
import { MultiValue, Control } from './Select'

export interface AsyncCreatableSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends AsyncProps<Option, IsMulti, Group> {
  readonly isDisabled?: boolean
  readonly variantSize?: CapInputSize
  readonly width?: string | number
  readonly formatCreateLabel?: (userInput: string) => React.ReactNode
  readonly onCreateOption?: (userInput: string) => void
  readonly onChange?: (newValue: any) => void
}

export function AsyncCreatableSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  className,
  width,
  ...props
}: AsyncCreatableSelectProps<Option, IsMulti, Group>) {
  const inputProps = useFormControl<HTMLInputElement>(props)

  return (
    <Box width={width || '100%'}>
      <AsyncCreatable<Option, IsMulti, Group>
        styles={reactSelectStyle(
          inputProps['aria-invalid'],
          inputProps.disabled,
          inputProps.variantSize,
        )}
        className={cn('cap-async-creatable-select', className)}
        classNamePrefix="cap-async-creatable-select"
        isDisabled={inputProps.disabled}
        aria-invalid={inputProps['aria-invalid']}
        components={{ MultiValue, Control }}
        maxMenuHeight={210}
        {...props}
      />
    </Box>
  )
}

AsyncCreatableSelect.displayName = 'AsyncCreatableSelect'

export default AsyncCreatableSelect
