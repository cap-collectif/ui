import cn from 'classnames'
import * as React from 'react'

import { CapUIFontSize, CapUIFontWeight, CapUILineHeight } from '../../styles'
import { Box, BoxProps } from '../box'

export type DropdownListItemProps = BoxProps & { active?: boolean }

const DropdownListItem: React.FC<DropdownListItemProps> = ({
  children,
  className,
  active,
  sx,
  ...props
}) => {
  return (
    <Box
      as="li"
      width="100%"
      px="sm"
      py="xs"
      color="text.primary"
      overflow="hidden"
      bg="dropdown.listItem.background.default"
      _hover={{
        bg: 'dropdown.listItem.background.hover',
        cursor: 'pointer',
      }}
      borderBottom="normal"
      borderColor="dropdown.listItem.border.hover"
      sx={{
        textOverflow: 'ellipsis',
        whiteSpace: 'pre',
        '&:last-child': {
          borderBottom: 'none',
        },
        ...sx,
      }}
      m={0}
      fontWeight={active ? CapUIFontWeight.Semibold : CapUIFontWeight.Normal}
      className={cn('cap-dropdown__item', className)}
      fontSize={CapUIFontSize.BodyRegular}
      lineHeight={CapUILineHeight.M}
      {...props}
    >
      {children}
    </Box>
  )
}
DropdownListItem.displayName = 'Dropdown.Item'

export default DropdownListItem
