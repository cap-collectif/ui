import { createContext } from 'react'

export type CardVariantSize = 'small' | 'medium' | 'large'
export type CardFormat = 'horizontal' | 'vertical'

const BREAKPOINTS = {
  vertical: { small: 395, medium: 604 },
  horizontal: { small: 800, medium: 1232 },
} as const

export const CardContext = createContext<{
  format: CardFormat
  variantSize: CardVariantSize
  isArchived: boolean
  hasButton?: boolean
}>({
  format: 'vertical',
  variantSize: 'medium',
  isArchived: false,
  hasButton: false,
})

const getAutoSize = (format: CardFormat, width: number): CardVariantSize => {
  const bp = BREAKPOINTS[format]
  if (width < bp.small) return 'small'
  if (width < bp.medium) return 'medium'
  return 'large'
}

export const getCardVariantSize = (
  format: CardFormat,
  width: number,
  variantSize?: CardVariantSize,
): CardVariantSize => {
  if (variantSize) return variantSize
  return getAutoSize(format, width)
}
