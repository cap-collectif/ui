import cn from 'classnames'
import * as React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

import { CapUIFontFamily } from '../../styles'
import { Box, BoxProps } from '../box'
import { Flex } from '../layout'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps extends BoxProps {
  readonly name: string
  readonly src?: string
  readonly alt?: string
  readonly size?: AvatarSize
  readonly children?: React.ReactNode
}

export const variants = {
  xs: {
    fontSize: 1,
    lineHeight: 'sm',
    size: 4,
    minWidth: 4,
    minHeight: 4,
    maxWidth: 4,
    maxHeight: 4,
  },
  sm: {
    fontSize: 1,
    lineHeight: 'sm',
    size: 6,
    minWidth: 6,
    minHeight: 6,
    maxWidth: 6,
    maxHeight: 6,
  },
  md: {
    fontSize: 3,
    lineHeight: 'base',
    size: 8,
    minWidth: 8,
    minHeight: 8,
    maxWidth: 8,
    maxHeight: 8,
  },
  lg: {
    fontSize: 4,
    lineHeight: 'base',
    size: 9,
    minWidth: 9,
    minHeight: 9,
    maxWidth: 9,
    maxHeight: 9,
  },
  xl: {
    fontSize: 6,
    lineHeight: 'l',
    size: 13,
    minWidth: 13,
    minHeight: 13,
    maxWidth: 13,
    maxHeight: 13,
  },
}

export const avatarStyles = {
  borderRadius: '100%',
  overflow: 'hidden',
  align: 'center',
  justify: 'center',
  fontFamily: CapUIFontFamily.Body,
  fontWeight: 600,
}

const getInitials = (
  name: AvatarProps['name'],
  showLastname = false,
): string => {
  const [firstName, lastName] = name.split(' ')

  if (!showLastname) return firstName.charAt(0)
  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`
  }

  return firstName.charAt(0)
}

const AvatarInner = styled(Flex).attrs(avatarStyles)(
  {
    userSelect: 'none',
  },
  variant({
    variants,
  }),
)

export const Avatar = ({
  name,
  src,
  alt,
  children,
  bg,
  backgroundColor,
  color,
  size = 'md',
  className,
  ...props
}: AvatarProps) => {
  const shouldDisplayName = src === null || src === undefined || src === ''

  return (
    <AvatarInner
      bg="blue.500"
      color="aqua.100"
      className={cn('cap-avatar', className)}
      title={shouldDisplayName ? alt : name}
      {...props}
      variant={size}
    >
      {shouldDisplayName && children}
      {shouldDisplayName && !children && getInitials(name)}
      {!shouldDisplayName && (
        <Box
          as="img"
          width="100%"
          height="100%"
          style={{ objectFit: 'cover' }}
          src={src}
          alt={alt ?? name}
          title={alt ?? name}
        />
      )}
    </AvatarInner>
  )
}

Avatar.displayName = 'Avatar'

export default Avatar as React.FC<AvatarProps>
