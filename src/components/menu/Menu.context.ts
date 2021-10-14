import * as React from 'react'
import type { MenuStateReturn } from 'reakit/src/Menu/MenuState'

export type Context = {
  menu: MenuStateReturn
  hideOnClickOutside: boolean
  closeOnSelect: boolean
}

export const MenuContext = React.createContext<Context | undefined>(undefined)

export const useMenu = (): Context => {
  const context = React.useContext(MenuContext)
  if (!context) {
    throw new Error(`You can't use the MenuContext outside a Menu component.`)
  }
  return context
}
