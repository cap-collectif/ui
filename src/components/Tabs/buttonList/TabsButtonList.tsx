import { TabList as BaseTabList } from '@ariakit/react'
import { AnimatePresence } from 'framer-motion'
import * as React from 'react'
import { FlexboxProps } from 'styled-system'

import { Box } from '../../box'
import { useTabs } from '../Tabs.context'

export interface TabsButtonListProps extends FlexboxProps {
  readonly ariaLabel: string
  readonly children: React.ReactNode
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
        render={
          <Box
            display="flex"
            textAlign="center"
            justifyContent="spaceBetween"
            {...props}
          />
        }
        store={tabs}
      >
        {children}
      </BaseTabList>
    </AnimatePresence>
  )
}
TabsButtonList.displayName = 'ButtonList'

export default TabsButtonList
