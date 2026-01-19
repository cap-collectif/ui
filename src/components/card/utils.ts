import { createContext } from 'react'

export type CardSize = 'S' | 'M' | 'L'
export type CardVariantSize = 'small' | 'medium' | 'large'
export type CardFormat = 'horizontal' | 'vertical'

const VARIANT_TO_SIZE: Record<CardVariantSize, CardSize> = {
  small: 'S',
  medium: 'M',
  large: 'L',
}

const SIZE_TO_VARIANT: Record<CardSize, CardVariantSize> = {
  S: 'small',
  M: 'medium',
  L: 'large',
}

const BREAKPOINTS = {
  vertical: { S: 395, M: 604 },
  horizontal: { S: 800, M: 1232 },
} as const

export const CardContext = createContext<{
  format: CardFormat
  size: CardSize
  variantSize: CardVariantSize
  isArchived: boolean
  hasButton?: boolean
}>({
  format: 'vertical',
  size: 'M',
  variantSize: 'medium',
  isArchived: false,
  hasButton: false,
})

const getAutoSize = (format: CardFormat, width: number): CardSize => {
  const bp = BREAKPOINTS[format]
  if (width < bp.S) return 'S'
  if (width < bp.M) return 'M'
  return 'L'
}

export const getCardSize = (
  format: CardFormat,
  width: number,
  variantSize?: CardVariantSize,
): CardSize => {
  if (variantSize) return VARIANT_TO_SIZE[variantSize]
  return getAutoSize(format, width)
}

export const getCardVariantSize = (
  format: CardFormat,
  width: number,
  variantSize?: CardVariantSize,
): CardVariantSize => {
  if (variantSize) return variantSize
  return SIZE_TO_VARIANT[getAutoSize(format, width)]
}
