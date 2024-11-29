import * as React from 'react'

import { CapUIShadow } from '../../styles'
import { Flex } from '../layout'
import TabHeader from './TabHeader'

export interface TabBarProps {
  children: React.ReactElement[]
  selectedId: string
  defaultTab: string
  onChange?: (tabId: string) => void
}
const TabBar: React.FC<TabBarProps> = ({
  children,
  selectedId,
  defaultTab,
  onChange,
  ...props
}) => {
  const [currentTab, setCurrentTab] = React.useState<string>(defaultTab)

  return (
    <>
      <Flex
        as={'ul'}
        position="absolute"
        top={0}
        left={0}
        backgroundColor="#FFF"
        display="inline-flex"
        justifyContent="flex-start"
        align="center"
        height="48px"
        minHeight="48px"
        width="100%"
        boxShadow={CapUIShadow.Small}
        gap={6}
        paddingX={6}
        {...props}
      >
        {children.map(child => (
          <TabHeader
            key={child.props.id}
            href={child.props.href}
            title={child.props.title}
            id={child.props.id}
            count={child.props.count}
            onClick={() => setCurrentTab(child.props.id)}
            isActive={currentTab === child.props.id}
          >
            {child.props}
          </TabHeader>
        ))}
      </Flex>
      <Flex>
        {children.find(child => child.props.id === currentTab)?.props.children}
      </Flex>
    </>
  )
}

TabBar.displayName = 'TabBar'

export default TabBar
