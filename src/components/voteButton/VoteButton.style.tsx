import type { SystemStyleObject } from '@styled-system/css'

import { CapUIRadius } from '../../styles'
import { Colors } from '../../styles/modules/colors'

export const styles = (
  active: boolean,
  colors?: Colors,
): SystemStyleObject => ({
  bg: 'transparent',
  color: 'primary.base',
  boxSizing: 'border-box',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: CapUIRadius.Card,
  px: 2,
  py: 1,

  '&:focus': {
    boxShadow: `0 0 2px 2px ${colors?.primary.light}`,
  },
  ...(active && {
    bg: 'primary.lighter',
    '.thumb-up-o_svg__fillMeUp': {
      fill: `${colors?.primary.base} !important`,
    },
  }),

  '&:hover': {
    bg: 'white',
    borderColor: 'primary.base',
  },

  '&:disabled': {
    bg: 'transparent',
    cursor: 'not-allowed',
    color: 'neutral-gray.600',
    '&:hover': {
      borderColor: 'transparent',
    },
  },
})
