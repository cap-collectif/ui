import cn from 'classnames'
import * as React from 'react'
import type { PopoverInitialState, MenuBarInitialState } from 'reakit'
import { useMenuState, MenuButton } from 'reakit/Menu'

import { MenuContext, Context } from './Menu.context'
import MenuItem from './item/MenuItem'
import MenuList from './list/MenuList'
import MenuOptionGroup from './optionGroup/MenuOptionGroup'
import MenuOptionItem from './optionItem/MenuOptionItem'

export interface MenuProps {
  readonly children: React.ReactNode
  readonly disclosure: React.FunctionComponentElement<any>
  readonly hideOnClickOutside?: boolean
  readonly closeOnSelect?: boolean
  readonly loop?: MenuBarInitialState['loop']
  readonly placement?: PopoverInitialState['placement']
  readonly gutter?: PopoverInitialState['gutter']
}

export interface MenuCompounded
  extends React.ForwardRefExoticComponent<
    MenuProps & React.RefAttributes<HTMLElement>
  > {
  List: typeof MenuList
  Item: typeof MenuItem
  OptionGroup: typeof MenuOptionGroup
  OptionItem: typeof MenuOptionItem
}

export const Menu = React.forwardRef<HTMLElement, MenuProps>(
  (
    {
      children,
      disclosure,
      hideOnClickOutside = true,
      closeOnSelect = true,
      loop = false,
      placement = 'bottom-end',
      gutter = 8,
      ...props
    },
    ref,
  ) => {
    const menu = useMenuState({ loop, placement, gutter })
    const context = React.useMemo<Context>(
      () => ({ menu, closeOnSelect, hideOnClickOutside }),
      [menu, closeOnSelect, hideOnClickOutside],
    )

    return (
      <MenuContext.Provider value={context}>
        <MenuButton
          ref={ref}
          {...menu}
          {...props}
          {...disclosure.props}
          className={cn('cap-menu__disclosure', disclosure.props.className)}
        >
          {disclosureProps => React.cloneElement(disclosure, disclosureProps)}
        </MenuButton>

        {children}
      </MenuContext.Provider>
    )
  },
) as MenuCompounded

Menu.List = MenuList
Menu.Item = MenuItem
Menu.OptionGroup = MenuOptionGroup
Menu.OptionItem = MenuOptionItem

Menu.displayName = 'Menu'

export default Menu
