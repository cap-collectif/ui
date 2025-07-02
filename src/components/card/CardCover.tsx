import cn from 'classnames'
import * as React from 'react'

import { pxToRem } from '../../styles/modules/mixins'
import { Box } from '../box'
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

export const CardCover: React.FC<FlexProps> = ({
  children,
  className,
  ...props
}) => {
  const { size, format } = React.useContext(CardContext)

  const width = pxToRem(size === 'S' ? 100 : size === 'M' ? 288 : 576)

  return (
    <Flex
      position="relative"
      borderRadius="xxs"
      border="1px solid"
      borderColor="card.default.border"
      className={cn('cap-card-cover', className)}
      width={format === 'horizontal' ? width : null}
      {...props}
    >
      {children}
    </Flex>
  )
}
