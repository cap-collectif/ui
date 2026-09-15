import { TabPanel as BaseTabPanel } from '@ariakit/react'
import * as React from 'react'

import { Box, BoxProps } from '../../box'
import { useTabs } from '../Tabs.context'

export interface TabsPanelprops extends BoxProps {}

const TabsPanel: React.FC<TabsPanelprops> = ({ children, ...props }) => {
  const { tabs } = useTabs()

  return (
    <BaseTabPanel
      render={
        <Box p={6} {...props} style={!children ? { display: 'none' } : undefined} />
      }
      store={tabs}
      tabIndex={undefined}
    >
      {children}
    </BaseTabPanel>
  )
}
TabsPanel.displayName = 'Panel'

export default TabsPanel
