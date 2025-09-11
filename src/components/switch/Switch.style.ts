import type { SystemStyleObject } from '@styled-system/css'

import { Colors } from '../../styles/modules/colors.type'

export const sliderStyles = (colors: Colors): SystemStyleObject => ({
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  bg: 'switch.default.background.default',
  transition: '0.4s',
  borderRadius: '10px',

  '&:before': {
    position: 'absolute',
    content: '""',
    height: 3,
    width: 3,
    left: '2px',
    bottom: '2px',
    bg: 'switch.default.icon.default',
    transition: '0.4s',
    borderRadius: '50%',
    boxShadow: 'medium',
  },

  '.cap-switch__input:checked + & ': {
    bg: 'switch.default.background.active',
  },

  '.cap-switch__input:focus-visible + &': {
    outline: '2px white solid',
    outlineOffset: 0,
    boxShadow: `0 0 0 4px ${colors?.primary.dark}`,
  },

  '.cap-switch__input:disabled + &': {
    bg: 'switch.default.background.disable',
    cursor: 'auto',
  },

  '.cap-switch__input:checked:disabled + &': {
    bg: 'switch.default.background.activeDisable',
  },

  '.cap-switch__input:checked + &:before': {
    transform: 'translateX(16px)',
  },
})

export const labelStyles = (): SystemStyleObject => ({
  cursor: 'pointer',
})
