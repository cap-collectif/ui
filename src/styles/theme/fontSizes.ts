import { pxToRem } from '../modules/mixins'

export const FONT_SIZES = {
  Caption: pxToRem(11),
  BodySmall: pxToRem(13),
  BodyRegular: pxToRem(14),
  BodyLarge: pxToRem(16),
  Headline: pxToRem(18),
  DisplaySmall: pxToRem(24),
  DisplayMedium: pxToRem(33),
  DisplayLarge: pxToRem(44),
} as const

export enum CapUIFontSize {
  Caption = 'Caption',
  BodySmall = 'BodySmall',
  BodyRegular = 'BodyRegular',
  BodyLarge = 'BodyLarge',
  Headline = 'Headline',
  DisplaySmall = 'DisplaySmall',
  DisplayMedium = 'DisplayMedium',
  DisplayLarge = 'DisplayLarge',
}

export type ThemeFontSizesValues =
  | keyof typeof FONT_SIZES
  | (string & {})
  | (number & {})
