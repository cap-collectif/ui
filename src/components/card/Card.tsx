import cn from 'classnames'
import * as React from 'react'

import useResizeObserver from '../../hooks/useResizeObserver'
import { pxToRem } from '../../styles/modules/mixins'
import { Flex, FlexProps } from '../layout'
import { CardContext, getSize } from './utils'

export type CardProps = FlexProps & {
  format?: 'horizontal' | 'vertical'
  isArchived?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  format = 'vertical',
  isArchived = false,
  ...props
}) => {
  const [ref, rect] = useResizeObserver()
  const width = rect?.width || 400
  const flexDirection = format === 'horizontal' ? 'row' : 'column'
  const size = getSize(format, width)
  const internalPadding = size === 'S' && format === 'horizontal' ? 'xs' : 'md'
  const maxWidth = pxToRem(format === 'horizontal' ? 1232 : 604)
  const minWidth = pxToRem(format === 'horizontal' ? 320 : 290)

  return (
    <Flex
      ref={ref}
      position="relative"
      flexDirection={flexDirection}
      gap={format === 'vertical' ? undefined : size === 'S' ? 'xs' : 'lg'}
      p={internalPadding}
      borderRadius="xs"
      backgroundColor="card.default.background"
      maxWidth={maxWidth}
      minWidth={minWidth}
      width="100%"
      sx={{ '.cap-card-primaryInfo a': { textDecoration: 'none' } }}
      _hover={{
        boxShadow: 'small',
        '.cap-card-primaryInfo a': { textDecoration: 'underline' },
      }}
      {...props}
      className={cn('cap-card', className)}
    >
      <CardContext.Provider value={{ format, size, isArchived }}>
        {children}
      </CardContext.Provider>
    </Flex>
  )
}

Card.displayName = 'Card'

export default Card
