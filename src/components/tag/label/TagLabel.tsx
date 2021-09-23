import cn from 'classnames'
import * as React from 'react'

import { Text, TextProps } from '../../typography/Text'

type TagLabelProps = TextProps

const TagLabel: React.FC<TagLabelProps> = ({
  children,
  className,
  ...rest
}) => (
  <Text
    lineHeight="sm"
    fontFamily="inherit"
    className={cn('cap-tag__label', className)}
    sx={{
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    }}
    {...rest}
  >
    {children}
  </Text>
)

TagLabel.displayName = 'Tag.Label'

export default TagLabel
