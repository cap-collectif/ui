import { CapUIFontSize, CapUILineHeight } from '../../styles'
import { CardFormat, CardVariantSize } from './utils'

type CardStyleProps = {
  p: string
  gap?: string
  maxWidth: number
  minWidth: number
}

type ContentStyleProps = {
  px: string
  py: string
  justifyContent?: string
  alignSelf?: string
}

type TextStyleProps = {
  fontSize: string
  lineHeight: string
}

export const CARD_STYLES: {
  [format in CardFormat]: { [size in CardVariantSize]: CardStyleProps }
} = {
  vertical: {
    small: { p: 'md', maxWidth: 290, minWidth: 290 },
    medium: { p: 'md', maxWidth: 395, minWidth: 290 },
    large: { p: 'md', maxWidth: 604, minWidth: 290 },
  },
  horizontal: {
    small: { p: 'xs', gap: 'xs', maxWidth: 320, minWidth: 0 },
    medium: { p: 'md', gap: 'lg', maxWidth: 800, minWidth: 0 },
    large: { p: 'md', gap: 'lg', maxWidth: 1232, minWidth: 0 },
  },
}

export const CONTENT_STYLES: {
  [format in CardFormat]: { [size in CardVariantSize]: ContentStyleProps }
} = {
  vertical: {
    small: {
      px: 'md',
      py: 'md',
      justifyContent: undefined,
      alignSelf: undefined,
    },
    medium: {
      px: 'md',
      py: 'lg',
      justifyContent: undefined,
      alignSelf: undefined,
    },
    large: {
      px: 'md',
      py: 'lg',
      justifyContent: undefined,
      alignSelf: undefined,
    },
  },
  horizontal: {
    small: {
      px: '0',
      py: '0',
      justifyContent: undefined,
      alignSelf: undefined,
    },
    medium: {
      px: 'md',
      py: 'md',
      justifyContent: 'center',
      alignSelf: undefined,
    },
    large: {
      px: 'md',
      py: 'md',
      justifyContent: 'space-between',
      alignSelf: 'stretch',
    },
  },
}

export const PRIMARY_TEXT_STYLES: {
  [format in CardFormat]: { [size in CardVariantSize]: TextStyleProps }
} = {
  vertical: {
    small: { fontSize: CapUIFontSize.BodyLarge, lineHeight: CapUILineHeight.M },
    medium: { fontSize: CapUIFontSize.Headline, lineHeight: CapUILineHeight.M },
    large: {
      fontSize: CapUIFontSize.DisplaySmall,
      lineHeight: CapUILineHeight.L,
    },
  },
  horizontal: {
    small: {
      fontSize: CapUIFontSize.BodyRegular,
      lineHeight: CapUILineHeight.M,
    },
    medium: { fontSize: CapUIFontSize.Headline, lineHeight: CapUILineHeight.M },
    large: {
      fontSize: CapUIFontSize.DisplaySmall,
      lineHeight: CapUILineHeight.L,
    },
  },
}

export const SECONDARY_TEXT_STYLES: {
  [format in CardFormat]: {
    [size in CardVariantSize]: TextStyleProps & { hidden?: boolean }
  }
} = {
  vertical: {
    small: {
      fontSize: CapUIFontSize.BodyRegular,
      lineHeight: CapUILineHeight.M,
    },
    medium: {
      fontSize: CapUIFontSize.BodyLarge,
      lineHeight: CapUILineHeight.M,
    },
    large: { fontSize: CapUIFontSize.BodyLarge, lineHeight: CapUILineHeight.M },
  },
  horizontal: {
    small: {
      fontSize: CapUIFontSize.BodyRegular,
      lineHeight: CapUILineHeight.M,
      hidden: true,
    },
    medium: {
      fontSize: CapUIFontSize.BodyLarge,
      lineHeight: CapUILineHeight.M,
    },
    large: { fontSize: CapUIFontSize.BodyLarge, lineHeight: CapUILineHeight.M },
  },
}
