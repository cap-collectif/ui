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
import { pxToRem } from '../../styles/modules/mixins'
import { Box } from '../box'
import { CapInputSize, InputVariantColor, useFormControl } from '../form'
import { reactSelectStyle } from '../form/style'
import { Icon, CapUIIcon, CapUIIconSize } from '../icon'
import { Spinner } from '../spinner'

export interface SearchProps<
  Option,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends Omit<
    AsyncProps<Option, IsMulti, Group>,
    'onChange' | 'defaultValue' | 'value' | 'loadOption'
  > {
  loadOptions?: (
    inputValue: string,
    callback: (options: any) => void,
  ) => Promise<any> | void
  isDisabled?: boolean
  isInvalid?: boolean
  variantSize?: CapInputSize
  variantColor?: InputVariantColor
  width?: string | number
  onChange?: (value: string) => void
  onSelect?: (value: Option) => void
  value?: string
  inputTitle?: string
}

const SelectContainer = ({ children: initialChildren, ...props }) => {
  const hasSuggestions = !!props?.options?.length
  const children = React.Children.map(
    initialChildren,
    (child: React.ReactElement) => {
      if (
        // @ts-expect-error react-select types are a bit different from react children native types
        (child?.type?.name === 'LiveRegion' ||
          child?.props?.id?.includes('-live-region')) &&
        !hasSuggestions
      )
        return null
      return child
    },
  )
  // @ts-expect-error react-select types are a bit different from react children native types
  return <components.SelectContainer children={children} {...props} />
}

const Control = <
  Option,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  children,
  ...props
}: ControlProps<Option, IsMulti, Group> & {
  deleteButtonAriaLabel?: string
}) => {
  const { isLoading, inputValue, onInputChange, isDisabled } = props.selectProps
  const { deleteButtonAriaLabel } = props

  return (
    <components.Control {...props}>
      <Icon
        name={CapUIIcon.Search}
        size={CapUIIconSize.Md}
        color={
          isDisabled
            ? 'input.icon.disable'
            : !inputValue
            ? 'input.icon.placeholder'
            : 'input.icon.default'
        }
        ml={1}
      />
      {Array.isArray(children) && children[0]}
      {isLoading && <Spinner mr={1} color="input.icon.selected" />}
      {!isLoading && inputValue && (
        <Box
          as={'button'}
          type="button"
          mr={1}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            onInputChange('', {
              action: 'input-change',
              prevInputValue: inputValue,
            })
          }}
          aria-label={deleteButtonAriaLabel || 'Supprimer la saisie'}
        >
          <Icon
            name={CapUIIcon.Cross}
            size={CapUIIconSize.Md}
            color="input.icon.default"
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
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: InputProps<Option, IsMulti, Group>,
) => {
  const hasSuggestions = !!props?.options?.length

  const roleProps = hasSuggestions
    ? {}
    : {
        'aria-expanded': undefined,
        'aria-haspopup': undefined,
        'aria-controls': undefined,
        'aria-autocomplete': undefined,
        'aria-owns': undefined,
        haspopup: undefined,
        role: undefined,
      }

  return (
    <components.Input
      {...props} // @ts-ignore react-select doesn't handle titles on input natively
      title={props.selectProps.inputTitle}
      aria-describedby={undefined}
      {...roleProps}
    />
  )
}

export const SearchWithRef = <
  Option,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
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
          inputProps.variantSize || CapInputSize.Sm,
          inputProps.variantColor,
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
        components={{ Control, Input, SelectContainer }}
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
