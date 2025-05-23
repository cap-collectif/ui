import cn from 'classnames'
import * as React from 'react'
import {
  components,
  ControlProps,
  GroupBase,
  SingleValue,
  InputProps,
} from 'react-select'
import ReactSelect from 'react-select/async'
import type { AsyncProps } from 'react-select/async'

import { useTheme } from '../../hooks'
import { Box } from '../box'
import { CapInputSize, useFormControl } from '../form'
import { reactSelectStyle } from '../form/style'
import { Icon, CapUIIcon, CapUIIconSize } from '../icon'
import { Spinner } from '../spinner'
import { pxToRem } from '../../styles/modules/mixins'

export interface SearchProps<
  Option,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>
  extends Omit<
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
  readonly inputTitle?: string
}

const Control = <
  Option,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  children,
  ...props
}: ControlProps<Option, IsMulti, Group> & { deleteButtonAriaLabel?: string })  => {
  const { isLoading, inputValue, onInputChange } = props.selectProps
  const { deleteButtonAriaLabel } = props
  
  return (
    <components.Control {...props}>
      <Icon
        name={CapUIIcon.Search}
        size={CapUIIconSize.Md}
        color="gray.700"
        ml={1}
      />
      {Array.isArray(children) && children[0]}
      {isLoading && <Spinner mr={1} color="primary.base" />}
      {!isLoading && inputValue && (
        <Box as={'button'} type="button"
          mr={1}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            onInputChange('', {
              action: 'input-change',
              prevInputValue: inputValue,
            })
          }}
            aria-label={deleteButtonAriaLabel || "Supprimer la saisie"}
          >
          <Icon
            name={CapUIIcon.Cross}
            size={CapUIIconSize.Md}
            color="gray.700"
            _hover={{ color: 'red.500' }}
            aria-hidden
            focusable={false}
          />
        </Box>
      )}
    </components.Control>
  )
}

const Input = <
  Option,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: InputProps<Option, IsMulti, Group>,
) => {
  // @ts-ignore react-select doesn't handle titles on input natively
  return <components.Input {...props} title={props.selectProps.inputTitle} />
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
    <Box width={width || pxToRem(280)}>
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
        components={{ Control, Input }}
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
