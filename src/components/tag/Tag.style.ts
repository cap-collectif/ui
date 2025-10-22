import { CSSProperties } from 'react'

import { CapUIFontSize } from '../../styles'
import { SPACING } from '../../styles/theme'
import { TagVariantColor, VariantSize, VariantType } from './Tag'

type StylesProps = {
  [component in VariantType]: {
    [variant in VariantSize]: CSSProperties & {
      px?: string
      py?: string
    }
  }
}

export const STYLES: StylesProps = {
  tag: {
    small: {
      px: 'xs',
      py: 'xxs',
      fontSize: CapUIFontSize.BodySmall,
      fontWeight: 400,
      paddingRight: '15%',
    },
    medium: {
      px: 'xs',
      py: 'xs',
      fontSize: CapUIFontSize.BodyRegular,
      fontWeight: 400,
      paddingRight: '15%',
    },
  },
  badge: {
    small: {
      px: 'xs',
      py: 'xxs',
      fontSize: CapUIFontSize.BodySmall,
      fontWeight: 600,
      paddingRight: '1%',
    },
    medium: {
      px: 'xs',
      py: 'xs',
      fontSize: CapUIFontSize.BodyRegular,
      fontWeight: 600,
      paddingRight: '1%',
    },
  },
}

export const getTagStyle = (
  variant: TagVariantColor,
  transparent: boolean,
) => ({
  bg: transparent ? `tag.background.transparent` : `tag.background.${variant}`,
  color: `tag.text.${variant}`,
  '--current-shadow-color': `tag.shadowColor.${variant}`,
  '&:hover': {
    '.cap-tag__closeButton': {
      opacity: 1,
      right: SPACING['1'],
      mr: SPACING['1'],
    },
  },
})
