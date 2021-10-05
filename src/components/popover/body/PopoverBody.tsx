import cn from 'classnames'
import * as React from 'react'

import { Box, BoxProps } from '../../box'

type PopoverBodyProps = BoxProps & {
  children: React.ReactNode
}

const PopoverBody = ({ children, className, ...props }: PopoverBodyProps) => (
  <Box
    color="gray.900"
    className={cn('cap-popover__body', className)}
    {...props}
  >
    {children}
  </Box>
)

PopoverBody.displayName = 'Popover.Body'

export default PopoverBody as React.FC<PopoverBodyProps>
