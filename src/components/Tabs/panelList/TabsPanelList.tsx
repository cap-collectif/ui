import * as React from 'react'
import { FlexboxProps } from 'styled-system'

export interface TabsPanelListProps extends FlexboxProps {}

const TabsPanelList: React.FC<TabsPanelListProps> = props => {
  return <div>{props.children}</div>
}

export default TabsPanelList
