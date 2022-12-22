import * as React from 'react'
import { Tabs } from './Tabs.context'
import { TabsButtonProps } from './button/TabsButton'

export const getTabs = (children: React.ReactNodeArray | React.ReactNode) =>
  React.Children.toArray(children).reduce<Tabs>((acc, child, index) => {
    const tabItem = child as React.ReactElement<
      React.PropsWithChildren<TabsButtonProps>
    >
    acc[tabItem.props.id] = index === 0
    return acc
  }, {})
