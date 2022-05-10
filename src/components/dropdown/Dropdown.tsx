import cn from 'classnames'
import * as React from 'react'

import { DropdownList, DropdownListItem } from './Dropdown.styles'

type Option = {
  value: any
  label: string | React.ReactNode
}
export type DropDownProps = {
  readonly children?: React.ReactChildren | React.ReactChild[]
  readonly options?: Option[]
  readonly width?: string
  readonly onSelect: (selected: Option) => void
  readonly className?: string
  readonly isLoading?: boolean
}

const Dropdown = ({
  options,
  width,
  onSelect,
  className,
  children,
  ...props
}: DropDownProps) => {
  return (
    <DropdownList
      // @ts-ignore
      width={width}
      className={cn('cap-dropdown', className)}
      {...props}
    >
      {!!options
        ? options.map((option, index) => (
            <DropdownListItem key={index} onClick={() => onSelect(option)}>
              {option.label}
            </DropdownListItem>
          ))
        : children}
    </DropdownList>
  )
}

export default Dropdown
