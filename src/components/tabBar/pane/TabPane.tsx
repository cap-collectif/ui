import React from 'react'

import { Box, BoxProps } from '../../box'
import { TabHeaderProps } from '../TabHeader'

export type TabPaneProps = Omit<
  TabHeaderProps,
  'onClick' | 'onKeyDown' | 'isActive'
> & {
  children?: React.ReactNode
}

export const TabPane: React.FC<TabPaneProps & BoxProps> = ({
  children,
  ...rest
}) => {
  return <Box {...rest}>{children}</Box>
}

TabPane.displayName = 'TabPane'

export default TabPane
