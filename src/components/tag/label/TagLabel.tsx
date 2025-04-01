import cn from 'classnames'
import * as React from 'react'

import { CapUILineHeight } from '../../../styles'
import { TextProps } from '../../typography/Text'

type TagLabelProps = TextProps

const TagLabel: React.FC<TagLabelProps> = ({
  children,
  className,
  ...rest
}) => (
  <span
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
  </span>
)

TagLabel.displayName = 'Tag.Label'

export default TagLabel
