import cn from 'classnames'
import * as React from 'react'
import ReactSelect, { MultiValueGenericProps } from 'react-select'
import type { GroupBase, Props } from 'react-select'

import { Box } from '../../box'
import { Tag } from '../../tag'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import { reactSelectStyle } from '../style'

export interface SelectProps extends Props {
  readonly isDisabled?: boolean
  readonly variantSize?: CapInputSize
  readonly width?: string | number
}

export function MultiValue<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  removeProps,
  isDisabled,
  ...props
}: MultiValueGenericProps<Option, IsMulti, Group> & {
  isDisabled: boolean
  removeProps: { onClick?: React.MouseEventHandler<HTMLDivElement> | undefined }
}) {
  return (
    <Tag
      variantColor={
        isDisabled ? 'gray' : props.selectProps['aria-invalid'] ? 'red' : 'blue'
      }
      mr={1}
      mt={1}
      onRemove={removeProps.onClick}
    >
      <Tag.Label>{props.data.label}</Tag.Label>
    </Tag>
  )
}

export function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({ className, width, ...props }: SelectProps) {
  const inputProps = useFormControl<HTMLInputElement>(props)

  return (
    <Box width={width || '100%'}>
      <ReactSelect
        styles={reactSelectStyle(
          inputProps['aria-invalid'],
          inputProps.disabled,
          inputProps.variantSize,
        )}
        className={cn('cap-select', className)}
        classNamePrefix="cap-select"
        isDisabled={inputProps.disabled}
        aria-invalid={inputProps['aria-invalid']}
        components={{ MultiValue }}
        {...props}
      />
    </Box>
  )
}

Select.displayName = 'Select'

export default Select as React.FC<SelectProps>
