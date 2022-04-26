import cn from 'classnames'
import * as React from 'react'
import { components, ControlProps, GroupBase } from 'react-select'
import ReactSelect from 'react-select/async'
import type { AsyncProps } from 'react-select/async'

import { Box } from '../box'
import { CapInputSize } from '../form/enums'
import { reactSelectStyle } from '../form/style'
import { Icon, CapUIIcon, CapUIIconSize } from '../icon'
import { Spinner } from '../spinner'

export interface SearchProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
    AsyncProps<Option, IsMulti, Group>,
    'onChange' | 'defaultValue' | 'value'
  > {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
  readonly width?: string | number
  readonly onChange: (value: string) => void
  readonly value?: string
}

const Control = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  children,
  ...props
}: ControlProps<Option, IsMulti, Group>) => {
  const { isLoading, inputValue } = props.selectProps
  return (
    <components.Control {...props}>
      <Icon
        name={CapUIIcon.Search}
        size={CapUIIconSize.Md}
        color="gray.700"
        ml={1}
      />
      {Array.isArray(children) && children[0]}
      {isLoading && <Spinner mr={1} color="blue.500" />}
      {!isLoading && inputValue && (
        <Icon
          mr={1}
          style={{ cursor: 'pointer' }}
          name={CapUIIcon.Cross}
          size={CapUIIconSize.Md}
          color="gray.700"
          _hover={{ color: 'red.500' }}
          onClick={props.clearValue}
        />
      )}
    </components.Control>
  )
}

export const Search = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  className,
  width,
  isDisabled,
  variantSize,
  isInvalid,
  onChange,
  value,
  loadOptions,
  ...props
}: SearchProps<Option, IsMulti, Group>) => {
  const asyncRef = React.useRef(null)
  const [input, setInput] = React.useState(value || '')

  React.useEffect(() => {
    setInput(value || '')
  }, [value])

  return (
    <Box width={width || '280px'}>
      <ReactSelect<Option, IsMulti, Group>
        ref={asyncRef}
        styles={reactSelectStyle(
          false,
          isDisabled,
          variantSize || CapInputSize.Sm,
          true,
        )}
        inputValue={input}
        onInputChange={(newValue, action) => {
          if (action.action === 'input-change') {
            setInput(newValue)
            if (onChange) onChange(newValue)
          }
        }}
        onChange={() => {
          setInput('')
          if (onChange) onChange('')
        }}
        menuIsOpen={loadOptions ? undefined : false}
        className={cn('cap-search', className)}
        classNamePrefix="cap-search"
        isDisabled={isDisabled}
        aria-invalid={isInvalid}
        components={{ Control }}
        maxMenuHeight={210}
        menuPortalTarget={document?.body}
        loadOptions={loadOptions}
        {...props}
      />
    </Box>
  )
}

Search.displayName = 'Search'

export default Search
