import { createContext } from 'react'

import { CapUIFontSize } from '../../styles'

export type CardSize = 'M' | 'S' | 'L'

export const CardContext = createContext<{
  format: 'horizontal' | 'vertical'
  size: CardSize
  isArchived: boolean
}>({
  format: 'vertical',
  size: 'M',
  isArchived: false,
})

export const getSize = (format: 'horizontal' | 'vertical', width: number) => {
  if (format === 'vertical') {
    if (width < 395) return 'S'
    if (width < 604) return 'M'
    return 'L'
  }
  if (width < 800) return 'S'
  if (width < 1232) return 'M'
  return 'L'
}

export const getPrimaryInfoSize = (
  size: CardSize,
  format: 'horizontal' | 'vertical',
) => {
  return size === 'L'
    ? CapUIFontSize.DisplaySmall
    : size === 'M'
    ? CapUIFontSize.Headline
    : format === 'horizontal'
    ? CapUIFontSize.BodyRegular
    : CapUIFontSize.BodyLarge
}
