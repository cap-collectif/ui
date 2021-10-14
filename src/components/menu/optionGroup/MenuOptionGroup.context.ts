import * as React from 'react'

type ContextCheckbox = {
  type: 'checkbox'
  value: string[]
  // onChange: (newValue: string[]) => void
}

type ContextRadio = {
  type: 'radio'
  value: string
  // onChange: (newValue: string) => void
}

// TODO: Make the union type work for onChange
export type Context = (ContextCheckbox | ContextRadio) & {
  onChange: (newValue: string | string[]) => void
}

export const MenuOptionGroupContext = React.createContext<Context>({
  value: [],
  onChange: () => {},
  type: 'checkbox',
})

export const useMenuOptionGroup = (): Context => {
  const context = React.useContext(MenuOptionGroupContext)
  if (!context) {
    throw new Error(
      `You can't use the MenuOptionGroupContext outside a MenuOptionGroup component.`,
    )
  }
  return context
}
