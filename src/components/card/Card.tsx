import cn from 'classnames'
import * as React from 'react'

import Box, { BoxProps } from '../box/Box'

export type CardProps = BoxProps

export const Card: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => (
  <Box
    p={6}
    borderRadius="card"
    border="card"
    borderColor="gray.150"
    {...props}
    className={cn('cap-card', className)}
  >
    {children}
  </Box>
)

Card.displayName = 'Card'

export default Card
