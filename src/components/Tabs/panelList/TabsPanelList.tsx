import * as React from 'react'
import { Box, BoxProps } from '../../box'
import { CapUIRadius } from '../../../styles'

export interface TabsPanelListProps extends BoxProps {}

const TabsPanelList: React.FC<TabsPanelListProps> = ({
  children,
  ...props
}) => {
  return (
    <Box
      sx={{
        bg: '#F7F7F8',
        borderBottomLeftRadius: CapUIRadius.Accordion,
        borderBottomRightRadius: CapUIRadius.Accordion,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}
TabsPanelList.displayName = 'PanelList'
export default TabsPanelList
