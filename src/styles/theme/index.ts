import merge from 'deepmerge'
import type { DefaultTheme } from 'styled-components'

import colors from '../modules/colors'
import typography, {
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LETTER_SPACINGS,
  LINE_HEIGHTS,
} from './typography'

/* eslint-disable @typescript-eslint/ban-types */

export interface Breakpoints {
  tablet: string
  desktop: string
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
    wide: string
    ultraWide: string
  }
  colors: typeof colors
  radii: typeof RADII
  shadows: typeof SHADOWS
  borders: typeof BORDERS
}

export const theme = <Props extends { theme: CapUITheme }>(props: Props) =>
  props.theme

export const BR_TABLET = 767
export const BR_DESKTOP = 1024
export const BR_WIDE = 1800
export const BR_ULTRAWIDE = 2200

export const breakpoints: Breakpoints = {
  tablet: `${BR_TABLET}px`,
  desktop: `${BR_DESKTOP}px`,
  wide: `${BR_WIDE}px`,
  ultraWide: `${BR_ULTRAWIDE}px`,
}

export const SPACING = {
  px: '1px',
  0: 0,
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.5rem',
  10: '3rem',
  11: '3.5rem',
  12: '4rem',
  13: '4.5rem',
  14: '8rem',
  15: '16rem',
  16: '32rem',
} as const

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
  normal: 4,
  button: 4,
  buttonQuickAction: 50,
  card: 4,
  modal: 5,
  tags: 4,
  tooltip: 4,
  notifications: 4,
  toasts: 4,
  accordion: 8,
  popover: 8,
  poppin: 8,
} as const

export enum CapUIRadius {
  Normal = 'normal',
  Button = 'button',
  ButtonQuickAction = 'buttonQuickAction',
  Card = 'card',
  Modal = 'modal',
  Tags = 'tags',
  Tooltip = 'tooltip',
  Notifications = 'notifications',
  Toasts = 'toasts',
  Accordion = 'accordion',
  Popover = 'popover',
  Poppin = 'poppin',
}

export type ThemeRadiiValues =
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
    breakpoints.wide,
    breakpoints.ultraWide,
  ],
  mediaQueries: {
    tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
    desktop: `@media screen and (min-width: ${breakpoints.desktop})`,
    wide: `@media screen and (min-width: ${breakpoints.wide})`,
    ultraWide: `@media screen and (min-width: ${breakpoints.ultraWide})`,
  },
  space: SPACING,
  sizes: SPACING,
  radii: RADII,
  borders: BORDERS,
  shadows: SHADOWS,
}

export const extendTheme = <T extends Record<any, any>>(
  extendedTheme: T & Partial<Record<keyof CapUITheme, unknown>>,
): CapUITheme & T => merge.all([capuiTheme, extendedTheme]) as CapUITheme & T
