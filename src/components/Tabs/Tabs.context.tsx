import * as React from 'react'
import { useTabState } from 'reakit/Tab'

export type Tabs = {
  [key: string]: boolean
}

export type TabsContextType = {
  tabs: ReturnType<typeof useTabState>
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
