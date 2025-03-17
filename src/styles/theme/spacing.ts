import { pxToRem } from '../modules/mixins'


// TODO : find a way to just simply allow numbers
export const LEGACY_SPACING = {
  0.5: pxToRem(2),
  1: pxToRem(4),
  2: pxToRem(8),
  3: pxToRem(12),
  4: pxToRem(16),
  5: pxToRem(20),
  6: pxToRem(24),
  7: pxToRem(28),
  8: pxToRem(32),
  9: pxToRem(40),
  10: pxToRem(48),
  11: pxToRem(56),
  12: pxToRem(64),
  13: pxToRem(72),
  14: pxToRem(128),
  15: pxToRem(256),
  16: pxToRem(512),
}

export const NEW_SPACING = {
  px: '1px',
  0: 0,
  xxs: pxToRem(4),
  xs: pxToRem(8),
  sm: pxToRem(12),
  md: pxToRem(16),
  lg: pxToRem(24),
  xl: pxToRem(32),
  xxl: pxToRem(48),
  xxxl: pxToRem(64),
}

export const SPACING = {
  ...LEGACY_SPACING,
  ...NEW_SPACING,
} as const
