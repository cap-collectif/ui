import cn from 'classnames'
import * as React from 'react'

import { CapUIIconSize, Icon, IconProps } from '../../icon'

export type TagLeftIconProps = IconProps

const TagLeftIcon: React.FC<TagLeftIconProps> = React.forwardRef<
  HTMLOrSVGElement,
  TagLeftIconProps
>((props, ref) => (
  <Icon
    ref={ref}
    size={CapUIIconSize.Sm}
    mr={1}
    className={cn('cap-tag__leftIcon', props.className)}
    {...props}
  />
))

TagLeftIcon.displayName = 'Tag.LeftIcon'

export default TagLeftIcon
