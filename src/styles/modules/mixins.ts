import { css } from 'styled-components'

import colors from './colors'

export const pxToRem = (px: number) => `${(1 / 14) * px}rem`

export const linearGradient = (
  direction: 'vertical' | 'horizontal',
  color: string = colors.white,
) => css`
  linear-gradient(to ${direction === 'horizontal' ? 'right' : 'bottom'},
  ${color} 0%,
  rgba(255, 255, 255, 0) 5%,
  rgba(255, 255, 255, 0) 95%,
  ${color} 100%);
`
