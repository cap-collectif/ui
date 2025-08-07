import * as Ariakit from '@ariakit/react'
import cn from 'classnames'
import * as React from 'react'

import { MenuContext, Context, MenuValue } from './Menu.context'
import MenuItem from './item/MenuItem'
import MenuList from './list/MenuList'
import MenuOptionGroup from './optionGroup/MenuOptionGroup'
import MenuOptionItem from './optionItem/MenuOptionItem'

export interface MenuProps {
  children: React.ReactNode
  disclosure: React.FunctionComponentElement<any>
  hideOnClickOutside?: boolean
  closeOnSelect?: boolean
  onChange?: (value: MenuValue) => void
  value?: MenuValue
  placement?: Ariakit.MenuProviderProps['placement']
  ref?: React.Ref<HTMLElement>
}

type SubComponents = {
  List: typeof MenuList
  Item: typeof MenuItem
  OptionGroup: typeof MenuOptionGroup
  OptionItem: typeof MenuOptionItem
}

export interface MenuCompounded
  extends React.ForwardRefExoticComponent<MenuProps> {
  List: typeof MenuList
  Item: typeof MenuItem
  OptionGroup: typeof MenuOptionGroup
  OptionItem: typeof MenuOptionItem
}

export const Menu: React.FC<MenuProps> & SubComponents = React.forwardRef<
  HTMLElement,
  MenuProps
>(
  (
    {
      children,
      disclosure,
      hideOnClickOutside = true,
      closeOnSelect = true,
      placement = 'bottom-end',
      onChange,
      value,
      ...props
    },
    ref,
  ) => {
    const context = React.useMemo<Context>(
      () => ({
        closeOnSelect,
        hideOnClickOutside,
        onChange,
        value,
      }),
      [closeOnSelect, hideOnClickOutside, onChange, value],
    )

    return (
      <MenuContext.Provider value={context}>
        <Ariakit.MenuProvider placement={placement} focusLoop>
          <Ariakit.MenuButton
            className={cn('cap-menu__disclosure', disclosure.props.className)}
            render={disclosure}
            {...props}
            ref={ref as React.RefObject<HTMLButtonElement>}
            children={value ? value.label : disclosure.props.children}
          />
          {children}
        </Ariakit.MenuProvider>
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
