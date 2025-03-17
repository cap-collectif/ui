import cn from 'classnames'
import * as React from 'react'

import { CapUIFontSize, CapUIFontWeight, CapUILineHeight } from '../../styles'
import { BoxProps } from '../box'
import { DropdownListItem as DropdownListItemStyled } from './Dropdown.styles'

export type DropdownListItemProps = BoxProps & { active?: boolean }

const DropdownListItem: React.FC<DropdownListItemProps> = ({
  children,
  className,
  active,
  ...props
}) => {
  return (
    <DropdownListItemStyled
      width="100%"
      px={3}
      py={2}
      fontFamily="body"
      m={0}
      bg="white"
      fontWeight={active ? CapUIFontWeight.Semibold : CapUIFontWeight.Normal}
      className={cn('cap-dropdown__item', className)}
      fontSize={CapUIFontSize.BodyRegular}
      lineHeight={CapUILineHeight.M}
      color="gray.900"
      as="li"
      {...props}
    >
      {children}
    </DropdownListItemStyled>
  )
}
DropdownListItem.displayName = 'Dropdown.Item'

export default DropdownListItem
