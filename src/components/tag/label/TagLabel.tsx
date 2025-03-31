import cn from 'classnames'
import * as React from 'react'

import { CapUILineHeight } from '../../../styles'
import { Text, TextProps } from '../../typography/Text'

type TagLabelProps = TextProps

const TagLabel: React.FC<TagLabelProps> = ({
  children,
  className,
  ...rest
}) => (
  <Text
    lineHeight={CapUILineHeight.S}
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
