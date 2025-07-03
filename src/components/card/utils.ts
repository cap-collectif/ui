import { createContext } from 'react'

import { CapUIFontSize } from '../../styles'

export const CardContext = createContext<{
  format: 'horizontal' | 'vertical'
  size: 'M' | 'S' | 'L'
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
  size: 'M' | 'S' | 'L',
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
