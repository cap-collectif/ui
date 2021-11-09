import cn from 'classnames'
import * as React from 'react'
import { components, ControlProps } from 'react-select'
import type { Props } from 'react-select'
import ReactSelect from 'react-select/async'

import { Box } from '../box'
import { CapInputSize } from '../form/enums'
import { reactSelectStyle } from '../form/style'
import { Icon, CapUIIcon, CapUIIconSize } from '../icon'
import { Spinner } from '../spinner'

export interface SearchProps
  extends Omit<Props, 'onChange' | 'defaultValue' | 'isMulti'> {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
  readonly width?: string | number
  readonly onChange: (value: string) => void
  readonly defaultValue?: string
}

const Control = ({ children, ...props }: ControlProps) => {
  const { isLoading, inputValue } = props.selectProps
  return (
    <components.Control {...props}>
      <Icon
        name={CapUIIcon.Search}
        size={CapUIIconSize.Md}
        color="gray.700"
        ml={2}
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
          onClick={() => props.clearValue()}
        />
      )}
    </components.Control>
  )
}

export const Search = ({
  className,
  width,
  isDisabled,
  variantSize,
  isInvalid,
  onChange,
  defaultValue,
  ...props
}: SearchProps) => {
  const asyncRef = React.useRef(null)
  const [input, setInput] = React.useState(defaultValue || '')

  return (
    <Box width={width || '280px'}>
      <ReactSelect
        ref={asyncRef}
        styles={reactSelectStyle(
          false,
          isDisabled,
          variantSize || CapInputSize.Sm,
          true,
        )}
        inputValue={input}
        onInputChange={(e, action) => {
          if (action.action === 'input-change') {
            setInput(e)
            if (onChange) onChange(e)
          }
        }}
        onChange={() => {
          setInput('')
          if (onChange) onChange('')
        }}
        menuIsOpen={false}
        isMulti={false}
        className={cn('cap-search', className)}
        classNamePrefix="cap-search"
        isDisabled={isDisabled}
        aria-invalid={isInvalid}
        components={{ Control }}
        {...props}
      />
    </Box>
  )
}

Search.displayName = 'Search'

export default Search as React.FC<SearchProps>
