import cn from 'classnames'
import * as React from 'react'

import { Box, BoxProps } from '../../box'
import { Text } from '../../typography'

type PopoverHeaderProps = BoxProps & {
  children: string | React.ReactNode
}

const PopoverHeader = ({
  children,
  className,
  ...props
}: PopoverHeaderProps) => (
  <Box mb={6} className={cn('cap-popover__header', className)} {...props}>
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
