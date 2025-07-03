import cn from 'classnames'
import * as React from 'react'

import Box, { BoxProps } from '../box/Box'

export type AbstractCardProps = BoxProps

export const AbstractCard: React.FC<AbstractCardProps> = ({
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
    className={cn('cap-tile', className)}
  >
    {children}
  </Box>
)

AbstractCard.displayName = 'AbstractCard'

export default AbstractCard
