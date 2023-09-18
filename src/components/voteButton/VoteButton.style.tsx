import type { SystemStyleObject } from '@styled-system/css'

import { CapUIRadius } from '../../styles'
import colors from '../../styles/modules/colors'

export const styles : SystemStyleObject = {
  bg: 'transparent',
  color: 'primary',
  boxSizing: 'border-box',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: CapUIRadius.Card,
  px: 2,
  py: 1,

  '&:focus': {
    boxShadow: `0 0 2px 2px ${colors.blue['300']}`,
  },
  '&:active': {
    bg: 'blue.150',
    '.thumb-up-o_svg__fillMeUp': {
      fill: '#1A88FF !important',
    },
  },

  '&:hover': {
    bg: 'white',
    borderColor: 'primary',
  },

  '&:disabled': {
    bg: 'blue.150',
    cursor: 'not-allowed',
    color: 'neutral-gray.500',
  },
}
