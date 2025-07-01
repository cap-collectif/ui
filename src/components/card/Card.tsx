import cn from 'classnames'
import * as React from 'react'

import { Box } from '../box'
import { Flex, FlexProps } from '../layout'

export type CardProps = FlexProps & {
  format?: 'horizontal' | 'vertical'
  size?: 'S' | 'M' | 'L'
}

export const CardCover: React.FC<
  FlexProps & {
    src?: string
    alt?: string
    sizes?: string
  }
> = ({ children, className, src, alt = '', sizes, ...props }) => {
  return (
    <Flex
      overflow="hidden"
      position="relative"
      borderRadius="xxs"
      border="1px solid"
      borderColor="card.default.border"
      {...props}
      className={cn('cap-card-cover', className)}
    >
      <Box
        as="img"
        src={src}
        alt={alt}
        width="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'left top',
          aspectRatio: '3 / 2',
          // filter: project.archived ? 'grayscale(1)' : null,
          // opacity: project.archived ? '50%' : null,
        }}
      />
    </Flex>
  )
}

export const CardContent: React.FC<FlexProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Flex
      position="relative"
      flexDirection={flexDirection}
      p={internalPadding}
      borderRadius="xs"
      backgroundColor="card.default.background"
      {...props}
      className={cn('cap-card', className)}
    >
      {children}
    </Flex>
  )
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  format = 'vertical',
  size = 'M',
  ...props
}) => {
  const internalPadding = size === 'S' && format === 'horizontal' ? 'xs' : 'md'
  const flexDirection = format === 'horizontal' ? 'row' : 'column'

  return (
    <Flex
      position="relative"
      flexDirection={flexDirection}
      p={internalPadding}
      borderRadius="xs"
      backgroundColor="card.default.background"
      {...props}
      className={cn('cap-card', className)}
    >
      {children}
    </Flex>
  )
}

Card.displayName = 'Card'

export default Card
