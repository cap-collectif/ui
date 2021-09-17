import * as React from 'react'

import { Box, BoxProps } from '../../box'
import { Text } from '../../typography'

type PopoverHeaderProps = BoxProps & {
  children: string | React.ReactNode
}

const PopoverHeader = ({ children, ...props }: PopoverHeaderProps) => (
  <Box mb={6} {...props}>
    {typeof children === 'string' ? (
      <Text fontWeight="semibold" color="blue.900">
        {children}
      </Text>
    ) : (
      children
    )}
  </Box>
)

PopoverHeader.displayName = 'Popover.Header'

export default PopoverHeader as React.FC<PopoverHeaderProps>
