import cn from 'classnames'
import * as React from 'react'
import { components, ControlProps, SelectInstance } from 'react-select'
import type { Props } from 'react-select'
import ReactSelect from 'react-select/async'

import { Box } from '../box'
import { CapInputSize } from '../form/enums'
import { reactSelectStyle } from '../form/style'
import { Icon, CapUIIcon, CapUIIconSize } from '../icon'

export interface SearchProps extends Props {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
  readonly width?: string | number
}

const Control = ({ children, ...props }: ControlProps) => {
  console.log(props)
  return (
    <components.Control {...props}>
      <Icon name={CapUIIcon.Search} size={CapUIIconSize.Md} color="gray.500" />
      {children}
      {props.selectProps.inputValue && (
        <div onClick={() => props.clearValue()}>clear</div>
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
  ...props
}: SearchProps) => {
  const asyncRef = React.useRef(null)
  const [input, setInput] = React.useState('')

  return (
    <Box width={width || '100%'}>
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
          if (action.action === 'input-change') setInput(e)
        }}
        onChange={() => setInput('')}
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
