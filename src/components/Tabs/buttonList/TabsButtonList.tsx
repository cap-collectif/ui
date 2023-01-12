import * as React from 'react'
import { TabList as BaseTabList } from 'reakit/Tab'
import { AnimatePresence } from 'framer-motion'
import { FlexboxProps } from 'styled-system'
import { Box } from '../../box'
import { useTabs } from '../Tabs.context'

export interface TabsButtonListProps extends FlexboxProps {
  readonly ariaLabel: string
}

const TabsButtonList: React.FC<TabsButtonListProps> = ({
  children,
  ariaLabel,
  ...props
}) => {
  const { tabs } = useTabs()
  return (
    <AnimatePresence>
      <BaseTabList
        aria-label={ariaLabel}
        as={Box}
        display="flex"
        textAlign="center"
        justifyContent="spaceBetween"
        {...tabs}
        {...props}
      >
        {children}
      </BaseTabList>
    </AnimatePresence>
  )
}
TabsButtonList.displayName = 'ButtonList'

export default TabsButtonList
