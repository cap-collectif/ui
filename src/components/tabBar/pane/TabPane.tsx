import React from 'react'

import { Flex, FlexProps } from '../../layout'

export type TabPaneProps = Omit<FlexProps, 'id' | 'title'> & {
  id: string
  title: React.ReactNode
  count?: number
  href?: string
  target?: string
  rel?: string
  disabled?: boolean
  children?: React.ReactNode
}

export const TabPane: React.FC<TabPaneProps> = ({
  children,
  title,
  count,
  href,
  target,
  rel,
  disabled,
  hidden,
  display,
  ...rest
}) => {
  return (
    <Flex {...rest} hidden={hidden} display={hidden ? 'none' : display}>
      {children}
    </Flex>
  )
}

TabPane.displayName = 'TabPane'

export default TabPane
