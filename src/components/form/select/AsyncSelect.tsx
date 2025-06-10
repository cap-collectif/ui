import cn from 'classnames'
import * as React from 'react'
import type { GroupBase } from 'react-select'
import Async from 'react-select/async'
import type { AsyncProps } from 'react-select/async'

import { useTheme } from '../../../hooks'
import { Box } from '../../box'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import { reactSelectStyle } from '../style'
import { MultiValue, Control } from './Select'

export interface AsyncSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends AsyncProps<Option, IsMulti, Group> {
  isDisabled?: boolean
  variantSize?: CapInputSize
  width?: string | number
  onChange?: (newValue: any) => void
  loadOptions?: (
    inputValue: string,
    callback: (options: any) => void,
  ) => Promise<any> | void
}

export function AsyncSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({ className, width, ...props }: AsyncSelectProps<Option, IsMulti, Group>) {
  const inputProps = useFormControl<HTMLInputElement>(props)
  const { colors } = useTheme()

  return (
    <Box width={width || '100%'}>
      <Async<Option, IsMulti, Group>
        styles={reactSelectStyle(colors, inputProps.variantSize)}
        className={cn('cap-async-select', className)}
        classNamePrefix="cap-async-select"
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

AsyncSelect.displayName = 'AsyncSelect'

export default AsyncSelect
