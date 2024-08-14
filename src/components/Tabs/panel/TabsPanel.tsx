import * as React from 'react'
import { TabPanel as BaseTabPanel } from 'reakit/Tab'

import { Box, BoxProps } from '../../box'
import { useTabs } from '../Tabs.context'

export interface TabsPanelprops extends BoxProps {}

const TabsPanel: React.FC<TabsPanelprops> = ({ children, ...props }) => {
  const { tabs } = useTabs()

  return !children ? (
    <BaseTabPanel
      {...tabs}
      tabIndex={undefined}
      style={{ display: 'none' }}
    ></BaseTabPanel>
  ) : (
    <BaseTabPanel as={Box} p={6} {...tabs} tabIndex={undefined} {...props}>
      {children}
    </BaseTabPanel>
  )
}
TabsPanel.displayName = 'Panel'

export default TabsPanel
