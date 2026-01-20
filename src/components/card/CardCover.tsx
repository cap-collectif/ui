import cn from 'classnames'
import * as React from 'react'

import { Box } from '../box'
import { EntityPlaceholder } from '../entityPlaceholder'
import { CapUIIcon } from '../icon'
import { Flex, FlexProps } from '../layout'
import { CardContext } from './utils'

const defaultSizes = `(max-width: 320px) 320px,(max-width: 640px) 640px,(max-width: 960px) 960px,(max-width: 1280px) 960px,(max-width: 2560px) 960px,`

export const CardCoverImage: React.FC<
  FlexProps & {
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
      borderRadius="xxs"
      sizes={sizes}
      style={{
        objectFit: 'cover',
        aspectRatio: '3 / 2',
        filter: isArchived ? 'grayscale(1)' : undefined,
        opacity: isArchived ? '50%' : undefined,
      }}
      {...props}
    />
  )
}

export const CardCoverPlaceholder: React.FC<
  FlexProps & { color?: string; icon?: CapUIIcon }
> = ({ className, color = 'neutral-gray.100', icon, ...props }) => {
  const { variantSize, format, isArchived } = React.useContext(CardContext)
  const smallScale = format === 'horizontal' ? '1' : '2'
  return (
    <EntityPlaceholder
      color={isArchived ? 'neutral-gray.base' : color}
      icon={icon}
      scale={
        variantSize === 'large'
          ? '4'
          : variantSize === 'medium'
          ? '3'
          : smallScale
      }
      {...props}
    />
  )
}

export const CardCover: React.FC<FlexProps> = ({
  children,
  className,
  ...props
}) => {
  const { format } = React.useContext(CardContext)

  return (
    <Flex
      flex="none"
      position="relative"
      borderRadius="xxs"
      border="1px solid"
      borderColor="card.default.border"
      className={cn('cap-card-cover', className)}
      width="100%"
      maxWidth={format === 'horizontal' ? '30%' : null}
      {...props}
    >
      {children}
    </Flex>
  )
}
