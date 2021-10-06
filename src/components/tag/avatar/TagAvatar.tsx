import * as React from 'react'

import { Avatar, AvatarProps } from '../../avatar'

export type TagAvatarProps = AvatarProps

const TagAvatar: React.FC<TagAvatarProps> = props => (
  <Avatar size="xs" mr={1} {...props} />
)

TagAvatar.displayName = 'Tag.Avatar'

export default TagAvatar
