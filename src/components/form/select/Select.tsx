import cn from 'classnames'
import * as React from 'react'
import ReactSelect, {
  MultiValueGenericProps,
  ControlProps,
  components,
} from 'react-select'
import type { GroupBase, Props } from 'react-select'

import { useTheme } from '../../../hooks'
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
  readonly deleteButtonAriaLabel?: boolean
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
        isDisabled ? 'infoGray' : props.selectProps['aria-invalid'] ? 'danger' : 'info'
      }
      mr={"xxs"}
      mt={"xxs"}
      onRemove={removeProps.onClick}
      tabIndex={0}
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
  // @ts-ignore need to rework this once back in main repo
  const { isLoading, isClearable, deleteButtonAriaLabel, value } = props.selectProps

  return (
    <components.Control {...props}>
      {Array.isArray(children) && children[0]}
      {isLoading && <Spinner mr={2} color="primary.base" />}
      {!isLoading && (
        <>
          {isClearable && value ? <Box
            as='button'
            type="button"
            aria-label={deleteButtonAriaLabel || "Supprimer la saisie"}
            mr={"xxs"}
            style={{ cursor: 'pointer' }}
            onClick={() => props.clearValue()}
          >
            <Icon
              name={CapUIIcon.Cross}
              size={CapUIIconSize.Md}
              color="gray.700"
              _hover={{ color: 'red.500' }}
              aria-hidden
              focusable={false}
            />
          </Box> : null}
          <Icon
            mr={3}
            style={{ cursor: 'pointer' }}
            name={CapUIIcon.ArrowDown}
            size={CapUIIconSize.Sm}
            color="gray.700"
          />
        </>
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
  const { colors } = useTheme()

  return (
    <Box width={width || '100%'}>
      {/* @ts-ignore:  https://github.com/DefinitelyTyped/DefinitelyTyped/pull/49673 */}
      <ReactSelect
        styles={reactSelectStyle(
          colors,
          inputProps['aria-invalid'],
          inputProps.disabled,
          inputProps.variantSize,
        )}
        className={cn('cap-select', className)}
        classNamePrefix="cap-select"
        isDisabled={inputProps.disabled}
        aria-invalid={inputProps['aria-invalid']}
        components={{ MultiValue, Control }}
        maxMenuHeight={210}
        menuPortalTarget={document?.body}
        tabIndex={0}
        {...props}
      />
    </Box>
  )
}

Select.displayName = 'Select'

export default Select as React.FC<SelectProps>
