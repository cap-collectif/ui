import cn from 'classnames'
import * as React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

import { CapUIFontFamily, CapUIFontSize, CapUILineHeight } from '../../styles'
import { Box } from '../box'
import { Flex, FlexProps } from '../layout'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps extends FlexProps {
  readonly name: string
  readonly src?: string
  readonly alt?: string
  readonly size?: AvatarSize
  readonly children?: React.ReactNode
}

export const variants = {
  xs: {
    fontSize: CapUIFontSize.Caption,
    lineHeight: CapUILineHeight.S,
    size: 4,
    minWidth: 4,
    minHeight: 4,
    maxWidth: 4,
    maxHeight: 4,
  },
  sm: {
    fontSize: CapUIFontSize.Caption,
    lineHeight: CapUILineHeight.S,
    size: 6,
    minWidth: 6,
    minHeight: 6,
    maxWidth: 6,
    maxHeight: 6,
  },
  md: {
    fontSize: CapUIFontSize.BodyRegular,
    lineHeight: CapUILineHeight.M,
    size: 8,
    minWidth: 8,
    minHeight: 8,
    maxWidth: 8,
    maxHeight: 8,
  },
  lg: {
    fontSize: CapUIFontSize.Headline,
    lineHeight: CapUILineHeight.M,
    size: 9,
    minWidth: 9,
    minHeight: 9,
    maxWidth: 9,
    maxHeight: 9,
  },
  xl: {
    fontSize: CapUIFontSize.DisplayMedium,
    lineHeight: CapUILineHeight.XL,
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
  size = 'md',
  className,
  ...props
}: AvatarProps) => {
  const shouldDisplayName = src === null || src === undefined || src === ''

  return (
    <AvatarInner
      bg="avatar.background"
      color="avatar.text.placeholder"
      borderColor="avatar.border.pictureGroup"
      className={cn('cap-avatar', className)}
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
          sx={{ objectFit: 'cover' }}
          src={src}
          alt={alt ?? name}
        />
      )}
    </AvatarInner>
  )
}

Avatar.displayName = 'Avatar'

export default Avatar as React.FC<AvatarProps>
