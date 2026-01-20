import cn from 'classnames'
import * as React from 'react'

import { Box, BoxProps } from '../box'
import { EntityPlaceholder } from '../entityPlaceholder'
import { CapUIIcon } from '../icon'
import { CardContext } from './utils'

const defaultSizes = `(max-width: 320px) 320px,(max-width: 640px) 640px,(max-width: 960px) 960px,(max-width: 1280px) 960px,(max-width: 2560px) 960px,`

export const CardCoverImage: React.FC<
  BoxProps & {
    src?: string
    alt?: string
    sizes?: string
    loading?: 'lazy' | 'eager'
    srcSet?: string
  }
> = ({
  children,
  className,
  srcSet,
  src,
  alt = '',
  loading = 'lazy',
  sizes = defaultSizes,
  ...props
}) => {
  const { isArchived } = React.useContext(CardContext)

  return (
    <Box
      as="img"
      src={src}
      srcSet={srcSet}
      alt={alt}
      loading={loading}
      width="100%"
      height="100%"
      borderRadius="xxs"
      sizes={sizes}
      style={{
        aspectRatio: '3 / 2',
        objectFit: 'cover',
        filter: isArchived ? 'grayscale(1)' : undefined,
        opacity: isArchived ? '50%' : undefined,
      }}
      {...props}
    />
  )
}

export const CardCoverPlaceholder: React.FC<
  BoxProps & { color?: string; icon?: CapUIIcon }
> = ({ className, color = 'neutral-gray.100', icon, ...props }) => {
  const { variantSize, format, isArchived } = React.useContext(CardContext)
  const smallScale = format === 'horizontal' ? '1' : '2'
  return (
    <EntityPlaceholder
      color={isArchived ? 'neutral-gray.base' : color}
      icon={icon}
      height="100%"
      scale={
        variantSize === 'large'
          ? '4'
          : variantSize === 'medium'
          ? '3'
          : smallScale
      }
      sx={{ aspectRatio: format === 'horizontal' ? 'inherit' : '3 / 2' }}
      {...props}
    />
  )
}

export const CardCover: React.FC<BoxProps> = ({
  children,
  className,
  ...props
}) => {
  const { format } = React.useContext(CardContext)

  const isHorizontal = format === 'horizontal'

  return (
    <Box
      position="relative"
      borderRadius="xxs"
      height={isHorizontal ? '100%' : undefined}
      width={isHorizontal ? '100%' : '100%'}
      maxWidth={isHorizontal ? '30%' : undefined}
      className={cn('cap-card-cover', className)}
      {...props}
    >
      {children}
    </Box>
  )
}
