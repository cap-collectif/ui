import cn from 'classnames'
import * as React from 'react'

import { Box } from '../../box'
import MenuItem, { MenuItemProps } from '../item/MenuItem'
import { useMenuOptionGroup } from '../optionGroup/MenuOptionGroup.context'

export interface MenuOptionItemProps extends Omit<MenuItemProps, 'value'> {
  value: string
}

export const MenuOptionItem: React.FC<MenuOptionItemProps> = React.forwardRef<
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
      _internal_isSelectable
      role={type === 'checkbox' ? 'menuitemcheckbox' : 'menuitemradio'}
      aria-checked={isSelected}
      ref={ref}
      onClick={e => {
        e.preventDefault()
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
        tabIndex={-1}
        aria-hidden
        sx={{ pointerEvents: 'none' }}
        display="inline-block"
        as="input"
        checked={isSelected}
        type={type}
        readOnly
        ml={1}
        mr={2}
      />
      {children}
    </MenuItem>
  )
})

MenuOptionItem.displayName = 'Menu.OptionItem'

export default MenuOptionItem
