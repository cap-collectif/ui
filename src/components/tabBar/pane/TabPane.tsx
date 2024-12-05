import React from 'react'

import { Box } from '../../box'
import { TabHeaderProps } from '../TabHeader'

export type TabPaneProps = Omit<TabHeaderProps, 'onClick' | 'isActive'> & {
  children: React.ReactNode
}

export const TabPane: React.FC<TabPaneProps> = ({ children }) => {
  return <Box>{children}</Box>
}

TabPane.displayName = 'TabPane'

export default TabPane
