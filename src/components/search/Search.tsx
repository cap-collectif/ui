import cn from 'classnames'
import * as React from 'react'
import { components, ControlProps, GroupBase, SingleValue } from 'react-select'
import ReactSelect from 'react-select/async'
import type { AsyncProps } from 'react-select/async'

import { useTheme } from '../../hooks'
import { Box } from '../box'
import { CapInputSize, useFormControl } from '../form'
import { reactSelectStyle } from '../form/style'
import { Icon, CapUIIcon, CapUIIconSize } from '../icon'
import { Spinner } from '../spinner'

export interface SearchProps<
  Option,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
    AsyncProps<Option, IsMulti, Group>,
    'onChange' | 'defaultValue' | 'value'
  > {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
  readonly width?: string | number
  readonly onChange?: (value: string) => void
  readonly onSelect?: (value: Option) => void
  readonly value?: string
}

const Control = <
  Option,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  children,
  ...props
}: ControlProps<Option, IsMulti, Group>) => {
  const { isLoading, inputValue, onInputChange } = props.selectProps
  return (
    <components.Control {...props}>
      <Icon
        name={CapUIIcon.Search}
        size={CapUIIconSize.Md}
        color="gray.700"
        ml={1}
      />
      {Array.isArray(children) && children[0]}
      {isLoading && <Spinner mr={1} color="primary.500" />}
      {!isLoading && inputValue && (
        <Icon
          mr={1}
          style={{ cursor: 'pointer' }}
          name={CapUIIcon.Cross}
          size={CapUIIconSize.Md}
          color="gray.700"
          _hover={{ color: 'red.500' }}
          onClick={() => {
            onInputChange('', {
              action: 'input-change',
              prevInputValue: inputValue,
            })
          }}
        />
      )}
    </components.Control>
  )
}

export const SearchWithRef = <
  Option,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  {
    className,
    width,
    onChange,
    onSelect,
    value,
    loadOptions,
    ...props
  }: SearchProps<Option, IsMulti, Group>,
  ref: React.ForwardedRef<any>,
) => {
  const { colors } = useTheme()
  const inputProps = useFormControl<HTMLInputElement>(props)
  const [input, setInput] = React.useState(value || '')

  React.useEffect(() => {
    setInput(value || '')
  }, [value])

  return (
    <Box width={width || '280px'}>
      <ReactSelect<Option, IsMulti, Group>
        {...inputProps}
        styles={reactSelectStyle(
          colors,
          inputProps['aria-invalid'],
          inputProps.disabled,
          inputProps.variantSize || CapInputSize.Sm,
          true,
        )}
        inputValue={input}
        onInputChange={(newValue, action) => {
          if (action.action === 'input-change') {
            setInput(newValue)
            if (onChange) onChange(newValue)
          }
        }}
        onChange={(newValue: SingleValue<Option>) => {
          setInput('')
          if (onSelect && newValue) onSelect(newValue)
        }}
        menuIsOpen={loadOptions ? undefined : false}
        className={cn('cap-search', className)}
        classNamePrefix="cap-search"
        isDisabled={inputProps.disabled}
        aria-invalid={inputProps['aria-invalid']}
        components={{ Control }}
        maxMenuHeight={210}
        menuPortalTarget={document?.body}
        loadOptions={loadOptions}
        {...props}
        ref={ref}
      />
    </Box>
  )
}

export const Search = React.forwardRef(SearchWithRef)

Search.displayName = 'Search'

export default Search
