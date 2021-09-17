import cn from 'classnames'
import * as React from 'react'

import { cleanChildren } from '../../utils/jsx'
import {
  AvatarProps,
  AvatarSize,
  avatarStyles,
  variants as variantsAvatarSize,
} from '../avatar/Avatar'
import { Box } from '../box'
import Flex, { FlexProps } from '../layout/Flex'

type AvatarSizeGroup = 'sm' | 'md' | 'lg'

export interface AvatarGroupProps extends FlexProps {
  readonly children?: React.ReactNode[]
  readonly max?: number
  readonly size?: AvatarSizeGroup
}

const getMarginForSize = (size: AvatarSize): number => {
  switch (size) {
    case 'sm':
      return -2
    case 'md':
    default:
      return -3
    case 'lg':
      return -4
  }
}

export const AvatarGroup = ({
  children,
  max,
  size = 'md',
  className,
  ...rest
}: AvatarGroupProps) => {
  const validChildren = cleanChildren(children)
  const computedMax = max ?? validChildren.length
  const count = validChildren.length - computedMax
  const renderAvatarChildren = validChildren
    .slice(0, computedMax)
    .map((c, i) => (
      <Box mr={getMarginForSize(size)} key={i}>
        {React.cloneElement(c as React.ReactElement<AvatarProps>, {
          size,
          color: 'white',
          borderColor: 'white',
          border: 'avatar',
        })}
      </Box>
    ))

  return (
    <Flex
      pr={Math.abs(getMarginForSize(size))}
      className={cn('cap-avatar-group', className)}
      role="group"
      {...rest}
    >
      {renderAvatarChildren}
      {count > 0 && (
        <Flex
          {...avatarStyles}
          {...variantsAvatarSize[size]}
          mr={getMarginForSize(size)}
          bg="blue.500"
          color="white"
          borderColor="white"
          border="avatar"
        >
          +{count}
        </Flex>
      )}
    </Flex>
  )
}

AvatarGroup.displayName = 'AvatarGroup'

export default AvatarGroup
