import * as React from 'react'

import { Box } from '../../box'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import {
  Menu as BaseMenu,
  MenuCompounded as BaseMenuCompounded,
} from '../../menu/Menu'
import { Text } from '../../typography'
import { thStyles } from '../th/Th'

type MenuProps = {
  readonly label: React.ReactNode
  readonly children: React.ReactNode
}

export interface MenuCompounded
  extends React.ForwardRefExoticComponent<
    MenuProps & React.RefAttributes<HTMLElement>
  > {
  Item: BaseMenuCompounded['Item']
  OptionGroup: BaseMenuCompounded['OptionGroup']
  OptionItem: BaseMenuCompounded['OptionItem']
}

export const Menu = React.forwardRef<HTMLElement, MenuProps>(
  ({ children, label }, ref) => {
    return (
      <BaseMenu
        disclosure={
          <Box
            as="button"
            type="button"
            display="flex"
            flexDirection="row"
            {...thStyles}
          >
            <Text mr={1}>{label}</Text>
            <Icon name={CapUIIcon.ArrowDownO} size={CapUIIconSize.Md} />
          </Box>
        }
        ref={ref}
      >
        <BaseMenu.List>{children}</BaseMenu.List>
      </BaseMenu>
    )
  },
) as MenuCompounded

Menu.Item = BaseMenu.Item
Menu.OptionGroup = BaseMenu.OptionGroup
Menu.OptionItem = BaseMenu.OptionItem

Menu.displayName = 'Table.Menu'

export default Menu
