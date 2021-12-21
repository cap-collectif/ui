import cn from 'classnames'
import * as React from 'react'

import { CapUIFontFamily } from '../../../styles'
import { Box, BoxProps } from '../../box'

type InfoMessageContentProps = BoxProps

export const InfoMessageContent = ({
  children,
  className,
  ...props
}: InfoMessageContentProps) => (
  <Box
    className={cn('cap-info-message__content', className)}
    fontSize={1}
    lineHeight="sm"
    fontFamily={CapUIFontFamily.Body}
    {...props}
  >
    {children}
  </Box>
)

InfoMessageContent.displayName = 'InfoMessage.Content'

export default InfoMessageContent
