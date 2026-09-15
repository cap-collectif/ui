import type { TabStore } from '@ariakit/react'
import * as React from 'react'

export type TabsContextType = {
  tabs: TabStore
}

export const TabsContext =
  React.createContext<TabsContextType | undefined>(undefined)

export const useTabs = (): TabsContextType => {
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error(`You can't use the TabsContext outside a Tabs component.`)
  }
  return context
}
