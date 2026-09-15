import { TabStoreProps, useStoreState, useTabStore } from '@ariakit/react'
import * as React from 'react'
import { Flex } from '../layout'

import TabsButton from './button/TabsButton'
import TabsButtonList from './buttonList/TabsButtonList'
import TabsPanelList from './panelList/TabsPanelList'

import TabsPanel from './panel/TabsPanel'
import { TabsContext, TabsContextType } from './Tabs.context'
import { BoxProps } from '../box'

type SubComponents = {
  Button: typeof TabsButton
  ButtonList: typeof TabsButtonList
  Panel: typeof TabsPanel
  PanelList: typeof TabsPanelList
}
export interface TabsProps
  extends Omit<BoxProps, 'onChange'> {
  readonly selectedId?: TabStoreProps['defaultSelectedId']
  readonly onChange?: (tabId: string) => void
}
const Tabs: React.FC<TabsProps> & SubComponents = ({
  children,
  selectedId,
  onChange,
  ...props
}) => {
  const tabs = useTabStore({
    defaultSelectedId: selectedId,
  })
  const selectedTabId = useStoreState(tabs, 'selectedId')
  const context = React.useMemo<TabsContextType>(() => ({ tabs }), [tabs])
  React.useEffect(() => {
    if (selectedTabId) {
      onChange?.(selectedTabId)
    }
  }, [selectedTabId, onChange])
  return (
    <TabsContext.Provider value={context}>
      <Flex direction="column" {...props}>
        {children}
      </Flex>
    </TabsContext.Provider>
  )
}
Tabs.displayName = 'Tabs'

Tabs.Button = TabsButton
Tabs.ButtonList = TabsButtonList
Tabs.Panel = TabsPanel
Tabs.PanelList = TabsPanelList

export default Tabs
