import * as React from 'react'

export type Tabs = {
  [key: string]: boolean
}

export type TabsContextType = {
  tabs: Tabs
  updateTabs: (tabs: Tabs) => void
}

export const TabsContext = React.createContext<TabsContextType>({
  tabs: {},
  updateTabs: () => {},
})

export const useTabs = (): TabsContextType => {
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error(`You can't use the TabsContext outside an Tabs component.`)
  }
  return context
}
