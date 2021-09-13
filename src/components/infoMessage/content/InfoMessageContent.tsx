// @flow
import cn from 'classnames'
import * as React from 'react'

import { Box, BoxProps } from '../../box'

type InfoMessageContentProps = BoxProps & {
  readonly children: string | React.ReactElement
}

export const InfoMessageContent = ({
  children,
  className,
  ...props
}: InfoMessageContentProps) => (
  <Box
    className={cn('cap-info-message__content', className)}
    fontSize={1}
    lineHeight="sm"
    {...props}
  >
    {children}
  </Box>
)

InfoMessageContent.displayName = 'InfoMessage.Content'

export default InfoMessageContent
