import * as React from 'react'
import { FlexboxProps } from 'styled-system'
import { Flex } from '../../layout'

export interface TabsPanelprops extends FlexboxProps {
  readonly id: string
}
const TabsPanel: React.FC<TabsPanelprops> = ({ children, id }) => {
  return (
    <Flex direction="column" id={id}>
      {children}
    </Flex>
  )
}

export default TabsPanel
