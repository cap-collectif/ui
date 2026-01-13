import cn from 'classnames'
import * as React from 'react'

import { Box } from '../../box'
import { TextProps } from '../../typography/Text'
import { tagLabelStyle } from './TagLabel.style'

export type TagLabelProps = TextProps

const TagLabel: React.FC<TagLabelProps> = ({
  children,
  className,
  ...rest
}) => (
  <Box
    as="span"
    className={cn('cap-tag__label', className)}
    fontFamily="inherit"
    overflow="hidden"
    sx={tagLabelStyle()}
    {...rest}
  >
    {children}
  </Box>
)

TagLabel.displayName = 'Tag.Label'

export default TagLabel
