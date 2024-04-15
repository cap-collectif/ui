import type { SystemStyleObject } from '@styled-system/css'

import { CapUIRadius } from '../../styles'
import { Colors } from '../../styles/modules/colors'

export const styles = (
  active: boolean,
  colors?: Colors,
): SystemStyleObject => ({
  bg: 'transparent',
  color: 'primary.600',
  boxSizing: 'border-box',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: CapUIRadius.Card,
  px: 2,
  py: 1,

  '&:focus': {
    boxShadow: `0 0 2px 2px ${colors?.primary['300']}`,
  },
  ...(active && {
    bg: 'primary.150',
    '.thumb-up-o_svg__fillMeUp': {
      fill: `${colors?.primary['600']} !important`,
    },
  }),

  '&:hover': {
    bg: 'white',
    borderColor: 'primary.600',
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
