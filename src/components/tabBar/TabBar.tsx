import * as React from 'react'

import { CapUIShadow } from '../../styles'
import { pxToRem } from '../../styles/modules/mixins'
import { BoxProps } from '../box'
import { Flex } from '../layout'
import TabHeader from './TabHeader'
import TabPane from './pane/TabPane'

export type TabBarProps = BoxProps & {
  children: React.ReactElement[] | React.ReactElement
  defaultTab: string
  onChange?: (tabId: string) => void
}

type SubComponents = {
  Pane: typeof TabPane
}

const TabBar: React.FC<TabBarProps> & SubComponents = ({
  children,
  defaultTab,
  onChange,
  ...props
}) => {
  const [currentTab, setCurrentTab] = React.useState<string>(defaultTab)

  if (!children) return null

  const childrenToArray = React.Children.toArray(
    children,
  ) as React.ReactElement[]

  return (
    <>
      <Flex
        as={'ul'}
        backgroundColor="#FFF"
        display="inline-flex"
        justifyContent="flex-start"
        align="center"
        height={pxToRem(48)}
        minHeight={pxToRem(48)}
        width="100%"
        boxShadow={CapUIShadow.Small}
        gap={6}
        paddingX={6}
        {...props}
      >
        {childrenToArray.map(child => (
          <TabHeader
            key={child.props.id}
            href={child.props.href}
            title={child.props.title}
            id={child.props.id}
            count={child.props.count}
            onClick={() => {
              if (currentTab !== child.props.id) {
                setCurrentTab(child.props.id)
              }
            }}
            isActive={currentTab === child.props.id}
          >
            {child.props}
          </TabHeader>
        ))}
      </Flex>
      {childrenToArray?.length ? (
        <Flex>
          {
            childrenToArray.find(child => child.props.id === currentTab)?.props
              .children
          }
        </Flex>
      ) : null}
    </>
  )
}

TabBar.displayName = 'TabBar'
TabBar.Pane = TabPane

export default TabBar
