import cn from 'classnames'
import * as React from 'react'

import { pxToRem } from '../../styles/modules/mixins'
import { Box, BoxProps } from '../box'
import DropdownListItem from './DropdownListItem'

export type DropDownProps = BoxProps

const Dropdown = ({ width, className, children, ...props }: DropDownProps) => {
  return (
    <Box
      as="ul"
      width={width || pxToRem(290)}
      maxHeight={pxToRem(200)}
      overflowY="scroll"
      boxShadow="small"
      border="normal"
      borderColor="dropdown.border"
      borderRadius="normal"
      className={cn('cap-dropdown', className)}
      {...props}
    >
      {children}
    </Box>
  )
}
Dropdown.displayName = 'Dropdown'
Dropdown.Item = DropdownListItem

export default Dropdown
