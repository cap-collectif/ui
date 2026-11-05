import cn from 'classnames'
import * as React from 'react'
import type { GroupBase } from 'react-select'
import type { AsyncProps } from 'react-select/async'
import Async from 'react-select/async'

import { useTheme } from '../../../hooks'
import { Box } from '../../box'
import { CapInputSize, InputVariantColor } from '../enums'
import { useFormControl } from '../formControl'
import { reactSelectStyle } from '../style'
import { Control, MultiValue } from './Select'

export interface AsyncSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends AsyncProps<Option, IsMulti, Group> {
  isDisabled?: boolean
  isReadonly?: boolean
  variantSize?: CapInputSize
  variantColor?: InputVariantColor
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
  Group extends GroupBase<Option> = GroupBase<Option>
>({ className, width, ...props }: AsyncSelectProps<Option, IsMulti, Group>) {
  const inputProps = useFormControl<HTMLInputElement>(props)
  const isReadonly = !!inputProps.readOnly
  const { colors } = useTheme()

  return (
    <Box width={width || '100%'}>
      <Async<Option, IsMulti, Group>
        styles={reactSelectStyle(
          colors,
          inputProps.variantSize,
          inputProps.variantColor,
          false,
          isReadonly,
        )}
        className={cn('cap-async-select', className)}
        classNamePrefix="cap-async-select"
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

AsyncSelect.displayName = 'AsyncSelect'

export default AsyncSelect
