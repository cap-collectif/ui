import cn from 'classnames'
import * as React from 'react'
import type { GroupBase } from 'react-select'
import Select from 'react-select/creatable'

import { Box } from '../../box'
import { useFormControl } from '../formControl'
import { reactSelectStyle } from '../style'
import { SelectProps } from './'
import { MultiValue } from './Select'

export interface CreatableSelectProps extends SelectProps {
  readonly formatCreateLabel?: (userInput: string) => React.ReactNode
}

export function CreatableSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({ className, width, ...props }: CreatableSelectProps) {
  const inputProps = useFormControl<HTMLInputElement>(props)

  return (
    <Box width={width || '100%'}>
      {/* @ts-ignore:  https://github.com/DefinitelyTyped/DefinitelyTyped/pull/49673 */}
      <Select
        styles={reactSelectStyle(
          inputProps['aria-invalid'],
          inputProps.disabled,
          inputProps.variantSize,
        )}
        className={cn('cap-creatable-select', className)}
        classNamePrefix="cap-creatable-select"
        isDisabled={inputProps.disabled}
        aria-invalid={inputProps['aria-invalid']}
        components={{ MultiValue }}
        {...props}
      />
    </Box>
  )
}

CreatableSelect.displayName = 'CreatableSelect'

export default CreatableSelect as React.FC<CreatableSelectProps>
