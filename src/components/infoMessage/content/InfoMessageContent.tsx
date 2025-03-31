import cn from 'classnames'
import * as React from 'react'

import {
  CapUIFontFamily,
  CapUIFontSize,
  CapUILineHeight,
} from '../../../styles'
import { Box, BoxProps } from '../../box'

type InfoMessageContentProps = BoxProps

export const InfoMessageContent = ({
  children,
  className,
  ...props
}: InfoMessageContentProps) => (
  <Box
    className={cn('cap-info-message__content', className)}
    fontSize={CapUIFontSize.BodySmall}
    lineHeight={CapUILineHeight.S}
    fontFamily={CapUIFontFamily.Body}
    {...props}
  >
    {children}
  </Box>
)

InfoMessageContent.displayName = 'InfoMessage.Content'

export default InfoMessageContent
