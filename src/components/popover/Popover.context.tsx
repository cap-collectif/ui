import * as React from 'react'

export interface Context {
  readonly hide: () => void
  readonly visible: boolean
}

export const PopoverContext = React.createContext<Context>({
  hide: () => {},
  visible: false,
})

export const usePopover = (): Context => {
  const context = React.useContext(PopoverContext)
  if (!context) {
    throw new Error(
      `You can't use the PopoverContext outsides a Popover component.`,
    )
  }
  return context
}
