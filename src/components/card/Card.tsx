import cn from 'classnames'
import * as React from 'react'

import useResizeObserver from '../../hooks/useResizeObserver'
import { pxToRem } from '../../styles/modules/mixins'
import { Flex, FlexProps } from '../layout'
import { CARD_STYLES } from './Card.style'
import {
  CardContext,
  CardFormat,
  CardVariantSize,
  getCardSize,
  getCardVariantSize,
} from './utils'

export type CardProps = FlexProps & {
  format?: CardFormat
  variantSize?: CardVariantSize
  isArchived?: boolean
  hasButton?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  format = 'vertical',
  variantSize,
  isArchived = false,
  hasButton,
  _hover,
  sx,
  ...props
}) => {
  const [ref, rect] = useResizeObserver()
  const width = rect?.width || 400

  const size = getCardSize(format, width, variantSize)
  const resolvedVariantSize = getCardVariantSize(format, width, variantSize)
  const styles = CARD_STYLES[format][resolvedVariantSize]

  const isHorizontal = format === 'horizontal'

  return (
    <Flex
      ref={ref}
      className={cn('cap-card', className)}
      position="relative"
      flexDirection={isHorizontal ? 'row' : 'column'}
      alignItems={isHorizontal ? 'center' : undefined}
      gap={styles.gap}
      p={styles.p}
      borderRadius="xs"
      backgroundColor="card.default.background"
      maxWidth={pxToRem(styles.maxWidth)}
      minWidth={pxToRem(styles.minWidth)}
      width="100%"
      sx={{
        '.cap-card-primaryInfo a': {
          textDecoration: 'none',
          '&:hover': { textDecoration: 'underline' },
        },
        ...sx,
      }}
      _hover={{ boxShadow: 'small', _hover }}
      {...props}
    >
      <CardContext.Provider
        value={{
          format,
          size,
          variantSize: resolvedVariantSize,
          isArchived,
          hasButton,
        }}
      >
        {children}
      </CardContext.Provider>
    </Flex>
  )
}

Card.displayName = 'Card'

export default Card
