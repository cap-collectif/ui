import * as React from 'react'

import { pxToRem } from '../../styles/modules/mixins'
import { BoxProps } from '../box'
import { Flex } from '../layout'
import TabHeader from './TabHeader'
import TabPane from './pane/TabPane'

export type TabBarProps = BoxProps & {
  children: React.ReactElement[] | React.ReactElement
  defaultTab: string
  onChange?: (tabId: string) => void
  sideContent?: React.ReactNode
}

type SubComponents = {
  Pane: typeof TabPane
}

const TabBar: React.FC<TabBarProps> & SubComponents = ({
  children,
  defaultTab,
  onChange,
  sideContent,
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
        justifyContent="space-between"
        align="center"
        height={pxToRem(48)}
        minHeight={pxToRem(48)}
        width="100%"
        borderBottomStyle={'solid'}
        borderBottomWidth={1}
        borderBottomColor={'gray.150'}
        gap={6}
        paddingX={6}
        {...props}
      >
        <Flex gap={6} height={'inherit'}>
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
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setCurrentTab(child.props.id)
                }
              }}
              isActive={currentTab === child.props.id}
            >
              {child.props}
            </TabHeader>
          ))}
        </Flex>

        {sideContent && (
          <Flex alignItems={'center'} gap={4}>
            {sideContent}
          </Flex>
        )}
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
