import { FONT_SIZES } from './fontSizes'
import { LINE_HEIGHTS } from './lineHeights'

export * from './lineHeights'
export * from './fontSizes'

export const LETTER_SPACINGS = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const

export enum CapUILetterSpacing {
  Tighter = 'tighter',
  Tight = 'tight',
  Normal = 'normal',
  Wide = 'wide',
  Wider = 'wider',
  Widest = 'widest',
}

export type ThemeLetterSpacingsValues =
  | keyof typeof LETTER_SPACINGS
  | (string & {})
  | (number & {})

export const FONT_WEIGHTS = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const

export enum CapUIFontWeight {
  Hairline = 'hairline',
  Thin = 'thin',
  Light = 'light',
  Normal = 'normal',
  Medium = 'medium',
  Semibold = 'semibold',
  Bold = 'bold',
  Extrabold = 'extrabold',
  Black = 'black',
}

export type ThemeFontWeightsValues =
  | keyof typeof FONT_WEIGHTS
  | (string & {})
  | (number & {})

export const FONT_FAMILIES = {
  heading: `Open Sans, system-ui, sans-serif`,
  label: `Open Sans, system-ui, sans-serif`,
  body: `Open Sans, system-ui, sans-serif`,
  input: `Roboto, system-ui, sans-serif`,
} as const

export enum CapUIFontFamily {
  Heading = 'heading',
  Label = 'label',
  Body = 'body',
  Input = 'input',
}

export type ThemeFontFamiliesValue = keyof typeof FONT_FAMILIES | (string & {})

const typography = {
  letterSpacings: LETTER_SPACINGS,
  lineHeights: LINE_HEIGHTS,
  fontWeights: FONT_WEIGHTS,
  fonts: FONT_FAMILIES,
  fontSizes: FONT_SIZES,
} as const

export default typography
