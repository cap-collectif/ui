import * as React from 'react'

export type MenuValue = {
  value: string
  label: string
}

export type Context = {
  hideOnClickOutside: boolean
  closeOnSelect: boolean
  onChange?: (value: MenuValue) => void
  value?: MenuValue
}

export const MenuContext = React.createContext<Context | undefined>(undefined)

export const useMenu = (): Context => {
  const context = React.useContext(MenuContext)
  if (!context) {
    throw new Error(`You can't use the MenuContext outside a Menu component.`)
  }
  return context
}
