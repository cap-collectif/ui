import merge from 'deepmerge'
import type { DefaultTheme } from 'styled-components'

import { tint } from '../../utils/color'
import colors from '../modules/colors'
import { SPACING, NEW_SPACING } from './spacing'
import typography, {
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LETTER_SPACINGS,
  LINE_HEIGHTS,
} from './typography'

export * from './spacing'

export interface Breakpoints {
  tablet: string
  desktop: string
  medium: string
  wide: string
  ultraWide: string
}

export interface Typography {
  letterSpacings: typeof LETTER_SPACINGS
  lineHeights: typeof LINE_HEIGHTS
  fontWeights: typeof FONT_WEIGHTS
  fonts: typeof FONT_FAMILIES
  fontSizes: typeof FONT_SIZES
}

export interface CapUITheme extends Typography {
  breakpoints: string[]
  space: typeof SPACING
  sizes: typeof SPACING
  mediaQueries: {
    tablet: string
    desktop: string
    medium: string
    wide: string
    ultraWide: string
  }
  colors: typeof colors
  radii: typeof RADII
  shadows: typeof SHADOWS
  borders: typeof BORDERS
  zIndices: typeof ZINDEX
}

export const theme = <Props extends { theme: CapUITheme }>(props: Props) =>
  props.theme

export const BR_TABLET = 767
export const BR_DESKTOP = 1133
export const BR_MEDIUM = 1280
export const BR_WIDE = 1536
export const BR_ULTRAWIDE = 1920

export const breakpoints: Breakpoints = {
  tablet: `${BR_TABLET}px`,
  desktop: `${BR_DESKTOP}px`,
  medium: `${BR_MEDIUM}px`,
  wide: `${BR_WIDE}px`,
  ultraWide: `${BR_ULTRAWIDE}px`,
}

export type ThemeSpacingValues =
  | keyof typeof SPACING
  | (string & {})
  | (number & {})

export const SHADOWS = {
  small: '0 2px 8px rgba(0, 0, 0, 0.1)',
  medium: '0 10px 50px rgba(0, 0, 0, 0.15)',
  big: '0 10px 99px rgba(0, 0, 0, 0.302)',
} as const

export enum CapUIShadow {
  Small = 'small',
  Medium = 'medium',
  Big = 'big',
}

export type ThemeShadowsValues = keyof typeof SHADOWS | (string & {})

export const RADII = {
  ...NEW_SPACING,
  normal: 4,
  button: 4,
  card: 4,
  modal: 8,
  tags: 4,
  tooltip: 4,
  toast: 4,
  accordion: 8,
  popover: 8,
  poppin: 8,
} as const

export enum CapUIRadius {
  Normal = 'normal',
  Button = 'button',
  Card = 'card',
  Modal = 'modal',
  Tags = 'tags',
  Tooltip = 'tooltip',
  Notifications = 'notifications',
  Toast = 'toast',
  Accordion = 'accordion',
  Popover = 'popover',
  Poppin = 'poppin',
}

export type ThemeRadiiValues =
  | keyof typeof SPACING
  | keyof typeof RADII
  | (string & {})
  | (number & {})

export const BORDERS = {
  none: 'none',
  normal: '1px solid',
  card: '1px solid',
  button: '1px solid',
  avatar: '2px solid',
} as const

export const ZINDEX = {
  hide: -1,
  auto: 'auto',
  base: 0,
  dropdown: 1000,
  overlay: 1300,
  modal: 1400,
  select: 1000,
  selectPortal: 1500,
  popover: 1000,
  tooltip: 1800,
  toast: 1800,
} as const

export type ThemeZIndicesValues = keyof typeof ZINDEX | (number & {})

export enum CapUIBorder {
  None = 'none',
  Normal = 'normal',
  Card = 'card',
  Button = 'button',
  Avatar = 'avatar',
}

export type ThemeBordersValues = keyof typeof BORDERS | (string & {})

export const capuiTheme: DefaultTheme = {
  ...typography,
  colors,
  breakpoints: [
    breakpoints.tablet,
    breakpoints.desktop,
    breakpoints.medium,
    breakpoints.wide,
    breakpoints.ultraWide,
  ],
  mediaQueries: {
    tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
    desktop: `@media screen and (min-width: ${breakpoints.desktop})`,
    medium: `@media screen and (min-width: ${breakpoints.medium})`,
    wide: `@media screen and (min-width: ${breakpoints.wide})`,
    ultraWide: `@media screen and (min-width: ${breakpoints.ultraWide})`,
  },
  space: SPACING,
  sizes: SPACING,
  radii: RADII,
  borders: BORDERS,
  shadows: SHADOWS,
  zIndices: ZINDEX,
}

export const extendTheme = <T extends Record<any, any>>(
  extendedTheme: T & Partial<Record<keyof CapUITheme, unknown>>,
): CapUITheme & T => merge.all([capuiTheme, extendedTheme]) as CapUITheme & T

export const generateShades = (hexColor: string) => ({
  '100': tint(0.98, hexColor),
  '150': tint(0.87, hexColor),
  '200': tint(0.73, hexColor),
  '300': tint(0.49, hexColor),
  '400': tint(0.25, hexColor),
  '500': hexColor,
  '600': tint(-0.25, hexColor),
  '700': tint(-0.49, hexColor),
  '800': tint(-0.73, hexColor),
  '900': tint(-0.98, hexColor),
})

export const generatePalette = (hexColor: string) => ({
  background: tint(0.98, hexColor),
  lighter: tint(0.87, hexColor),
  light: tint(0.49, hexColor),
  base: hexColor,
  dark: tint(-0.49, hexColor),
  darker: tint(-0.73, hexColor),
})
