import * as React from 'react'
import { Flex } from '../layout'
import { TabInitialState, useTabState } from 'reakit/Tab'

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
  extends Pick<TabInitialState, 'selectedId'>,
    Omit<BoxProps, 'onChange'> {
  readonly onChange?: (tabId: string) => void
}
const Tabs: React.FC<TabsProps> & SubComponents = ({
  children,
  selectedId,
  onChange,
  ...props
}) => {
  const tabs = useTabState({
    selectedId,
  })
  const context = React.useMemo<TabsContextType>(() => ({ tabs }), [tabs])
  React.useEffect(() => {
    if (tabs.selectedId) {
      onChange?.(tabs.selectedId)
    }
  }, [tabs.selectedId, onChange])
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
