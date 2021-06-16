/* eslint-disable @typescript-eslint/ban-types */

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

export const LINE_HEIGHTS = {
  xl: '4rem',
  l: '3rem',
  m: '2rem',
  base: '1.5rem',
  s: '1.125rem',
  sm: '1rem',
} as const

export enum CapUILineHeight {
  Xl = 'xl',
  L = 'l',
  M = 'm',
  Base = 'base',
  S = 's',
  Sm = 'sm',
}

export type ThemeLineHeightsValues =
  | keyof typeof LINE_HEIGHTS
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
  roboto: `Roboto, Helvetica, Arial, sans-serif`,
  openSans: `OpenSans, Helvetica, Arial, sans-serif`,
  heading: `OpenSans, Helvetica, Arial, sans-serif`,
  label: `OpenSans, Helvetica, Arial, sans-serif`,
  body: `OpenSans, Helvetica, Arial, sans-serif`,
  content: `OpenSans, Helvetica, Arial, sans-serif`,
  input: `Roboto, Helvetica, Arial, sans-serif`,
} as const

export enum CapUIFontFamily {
  Roboto = 'roboto',
  OpenSans = 'openSans',
  Heading = 'heading',
  Label = 'label',
  Body = 'body',
  Content = 'content',
  Input = 'input',
}

export type ThemeFontFamiliesValue = keyof typeof FONT_FAMILIES | (string & {})

export const FONT_SIZES = {
  0: 0, // #0
  1: '0.687rem', // #1
  2: '0.812rem', // #2
  3: '0.875rem', // #3
  4: '1.125rem', // #4
  5: '1.5rem', // #5
  6: '2.062rem', // #6
  7: '2.75rem', // #7
} as const

export type ThemeFontSizesValues =
  | keyof typeof FONT_SIZES
  | (string & {})
  | (number & {})

const typography = {
  letterSpacings: LETTER_SPACINGS,
  lineHeights: LINE_HEIGHTS,
  fontWeights: FONT_WEIGHTS,
  fonts: FONT_FAMILIES,
  fontSizes: FONT_SIZES,
} as const

export default typography
