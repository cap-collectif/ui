import cn from 'classnames'
import * as React from 'react'

import { CapUILineHeight } from '../../../styles'
import { Box } from '../../box'
import { TextProps } from '../../typography/Text'

type TagLabelProps = TextProps

const TagLabel: React.FC<TagLabelProps> = ({
  children,
  className,
  ...rest
}) => (
  <Box
    as="span"
    className={cn('cap-tag__label', className)}
    lineHeight={CapUILineHeight.S}
    fontFamily="inherit"
    overflow="hidden"
    whiteSpace="nowrap"
    textOverflow="ellipsis"
    {...rest}
  >
    {children}
  </Box>
)

TagLabel.displayName = 'Tag.Label'

export default TagLabel
