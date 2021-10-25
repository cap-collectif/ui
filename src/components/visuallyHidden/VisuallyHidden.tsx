import cn from 'classnames'
import * as React from 'react'

import { Box, BoxProps } from '../box'

export interface VisuallyHiddenProps extends BoxProps {
  readonly children: React.ReactNode
  readonly className?: string
}

export const VisuallyHidden = ({
  children,
  className,
  ...props
}: VisuallyHiddenProps) => (
  <Box
    as="span"
    border="none"
    height="1px"
    width="1px"
    margin="-1px"
    padding={0}
    overflow="hidden"
    position="absolute"
    style={{ clip: 'rect(0px, 0px, 0px, 0px)', whiteSpace: 'nowrap' }}
    className={cn('cap-visuallyHidden', className)}
    {...props}
  >
    {children}
  </Box>
)

VisuallyHidden.displayName = 'VisuallyHidden'

export default VisuallyHidden as React.FC<VisuallyHiddenProps>
