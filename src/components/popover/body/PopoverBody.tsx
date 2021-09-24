import * as React from 'react'

import { Box, BoxProps } from '../../box'

type PopoverBodyProps = BoxProps & {
  children: string | React.ReactNode
}

const PopoverBody = ({ children, ...props }: PopoverBodyProps) => (
  <Box mb={6} color="gray.900" {...props}>
    {children}
  </Box>
)

PopoverBody.displayName = 'Popover.Body'

export default PopoverBody as React.FC<PopoverBodyProps>
