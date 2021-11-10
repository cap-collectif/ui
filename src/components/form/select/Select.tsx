import cn from 'classnames'
import * as React from 'react'
import ReactSelect, {
  MultiValueGenericProps,
  ControlProps,
  components,
} from 'react-select'
import type { GroupBase, Props } from 'react-select'

import { Box } from '../../box'
import { Icon, CapUIIcon, CapUIIconSize } from '../../icon'
import { Spinner } from '../../spinner'
import { Tag } from '../../tag'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import { reactSelectStyle } from '../style'

export interface SelectProps extends Omit<Props, 'onChange'> {
  readonly isDisabled?: boolean
  readonly variantSize?: CapInputSize
  readonly width?: string | number
  readonly onChange?: (newValue: any) => void
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

export function Control<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({ children, ...props }: ControlProps<Option, IsMulti, Group>) {
  const { isLoading } = props.selectProps
  return (
    <components.Control {...props}>
      {Array.isArray(children) && children[0]}
      {isLoading && <Spinner mr={2} color="blue.500" />}
      {!isLoading && (
        <Icon
          mr={3}
          style={{ cursor: 'pointer' }}
          name={CapUIIcon.ArrowDown}
          size={CapUIIconSize.Sm}
          color="gray.700"
          onClick={() => props.clearValue()}
        />
      )}
    </components.Control>
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
      {/* @ts-ignore:  https://github.com/DefinitelyTyped/DefinitelyTyped/pull/49673 */}
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
        components={{ MultiValue, Control }}
        {...props}
      />
    </Box>
  )
}

Select.displayName = 'Select'

export default Select as React.FC<SelectProps>
