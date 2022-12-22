import * as React from 'react'
import { Flex, FlexProps } from '../layout'

import TabsButton from './button/TabsButton'
import TabsButtonList from './buttonList/TabsButtonList'
import TabsPanelList from './panelList/TabsPanelList'

import TabsPanel from './panel/TabsPanel'
import { TabsContext } from './Tabs.context'
import type { Tabs as TabsType } from './Tabs.context'

type SubComponents = {
  Button: typeof TabsButton
  ButtonList: typeof TabsButtonList
  Panel: typeof TabsPanel
  PanelList: typeof TabsPanelList
}
export interface TabsProps extends FlexProps {
  readonly children: React.ReactNodeArray | React.ReactNode
}
const Tabs: React.FC<TabsProps> & SubComponents = ({ children }) => {
  const [tabs, updateTabs] = React.useState<TabsType>({})
  const context = React.useMemo(
    () => ({
      tabs: tabs,
      updateTabs: (tabs: TabsType) => updateTabs(tabs),
    }),
    [tabs, updateTabs],
  )
  return (
    <TabsContext.Provider value={context}>
      <Flex direction="column">{children}</Flex>
    </TabsContext.Provider>
  )
}

Tabs.Button = TabsButton
Tabs.ButtonList = TabsButtonList
Tabs.Panel = TabsButton
Tabs.PanelList = TabsPanelList

export default Tabs
