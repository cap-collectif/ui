import React from 'react'

import { Box } from '../box'
import { TabHeaderProps } from './TabHeader'

const TabPane: React.FC<Omit<TabHeaderProps, 'onClick' | 'isActive'>> = ({
  children,
}) => {
  return <Box>{children}</Box>
}

TabPane.displayName = 'TabPane'

export default TabPane
