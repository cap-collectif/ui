import { pxToRem } from '../modules/mixins'

export const LINE_HEIGHTS = {
  S: pxToRem(16),
  M: pxToRem(24),
  Normal: 'normal',
  L: pxToRem(32),
  XL: pxToRem(48),
  XXL: pxToRem(64),
} as const

export enum CapUILineHeight {
  S = 'S',
  M = 'M',
  Normal = 'normal',
  L = 'L',
  XL = 'L',
  XXL = 'XL',
}

export type ThemeLineHeightsValues =
  | keyof typeof LINE_HEIGHTS
  | (string & {})
  | (number & {})
