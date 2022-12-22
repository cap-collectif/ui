import * as React from 'react'
import { Flex } from '../../layout'
import { FlexboxProps } from 'styled-system'
import { getTabs } from '../Tabs.utils'
import { useContext } from 'react'
import { TabsContext } from '../Tabs.context'

export interface TabsButtonListProps extends FlexboxProps {}

const TabsButtonList: React.FC<TabsButtonListProps> = ({ children }) => {
  // const { updateTabs } = useContext(TabsContext)
  // updateTabs(getTabs(children))
  return <Flex direction="row">{children}</Flex>
}

export default TabsButtonList
