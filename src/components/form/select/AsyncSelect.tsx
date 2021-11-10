import cn from 'classnames'
import * as React from 'react'
import type { GroupBase } from 'react-select'
import Async from 'react-select/async'
import type { AsyncProps } from 'react-select/async'

import { Box } from '../../box'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import { reactSelectStyle } from '../style'
import { MultiValue, Control } from './Select'

export interface AsyncSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends AsyncProps<Option, IsMulti, Group> {
  readonly isDisabled?: boolean
  readonly variantSize?: CapInputSize
  readonly width?: string | number
  readonly onChange?: (newValue: any) => void
}

export function AsyncSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({ className, width, ...props }: AsyncSelectProps<Option, IsMulti, Group>) {
  const inputProps = useFormControl<HTMLInputElement>(props)

  return (
    <Box width={width || '100%'}>
      <Async<Option, IsMulti, Group>
        styles={reactSelectStyle(
          inputProps['aria-invalid'],
          inputProps.disabled,
          inputProps.variantSize,
        )}
        className={cn('cap-async-select', className)}
        classNamePrefix="cap-async-select"
        isDisabled={inputProps.disabled}
        aria-invalid={inputProps['aria-invalid']}
        components={{ MultiValue, Control }}
        {...props}
      />
    </Box>
  )
}

AsyncSelect.displayName = 'AsyncSelect'

export default AsyncSelect
