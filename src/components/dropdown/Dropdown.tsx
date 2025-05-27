import cn from 'classnames'
import * as React from 'react'

import { BoxProps } from '../box'
import { DropdownList } from './Dropdown.styles'
import DropdownListItem from './DropdownListItem'

export type DropDownProps = BoxProps

const Dropdown = ({ width, className, children, ...props }: DropDownProps) => {
  return (
    <DropdownList
      as="ul"
      // @ts-ignore styled-component issues
      width={width}
      className={cn('cap-dropdown', className)}
      {...props}
    >
      {children}
    </DropdownList>
  )
}
Dropdown.displayName = 'Dropdown'
Dropdown.Item = DropdownListItem

export default Dropdown
