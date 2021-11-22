import cn from 'classnames'
import * as React from 'react'

import { Box } from '../../box'
import MenuItem, { MenuItemProps } from '../item/MenuItem'
import { useMenuOptionGroup } from '../optionGroup/MenuOptionGroup.context'

export interface MenuOptionItemProps extends Omit<MenuItemProps, 'value'> {
  readonly value: string
}

export const MenuOptionItem = React.forwardRef<
  HTMLButtonElement,
  MenuOptionItemProps
>(({ children, value, ...props }, ref) => {
  const { type, onChange, value: originalValue } = useMenuOptionGroup()
  const isSelected =
    type === 'checkbox'
      ? originalValue.includes(value)
      : originalValue === value

  return (
    <MenuItem
      {...props}
      ref={ref}
      onClick={() => {
        if (type === 'checkbox' && Array.isArray(originalValue)) {
          onChange(
            isSelected
              ? originalValue.filter(v => v !== value)
              : [...originalValue, value],
          )
        } else if (type === 'radio') {
          onChange(value)
        }
      }}
      className={cn('cap-menu__optionItem', props.className)}
    >
      <Box
        display="inline-block"
        as="input"
        checked={isSelected}
        type={type}
        ml={1}
        mr={2}
      />
      {children}
    </MenuItem>
  )
})

MenuOptionItem.displayName = 'Menu.OptionItem'

export default MenuOptionItem
