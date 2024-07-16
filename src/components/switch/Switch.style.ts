import type { SystemStyleObject } from '@styled-system/css'

import { Colors } from '../../styles/modules/colors'

export const sliderStyles = (colors?: Colors): SystemStyleObject => ({
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  bg: 'neutral-gray.500',
  transition: '0.4s',
  borderRadius: '10px',

  '&:before': {
    position: 'absolute',
    content: '""',
    height: 3,
    width: 3,
    left: '2px',
    bottom: '2px',
    bg: 'white',
    transition: '0.4s',
    borderRadius: '50%',
    boxShadow: 'medium',
  },

  '.cap-switch__input:checked + & ': {
    bg: 'primary.500',
  },

  '.cap-switch__input:focus-visible + &': {
    outline: '2px #fff solid',
    outlineOffset: 0,
    boxShadow: `0 0 0 4px ${colors?.primary[700]}`,
  },

  '.cap-switch__input:disabled + &': {
    opacity: 0.3,
  },

  '.cap-switch__input:checked + &:before': {
    transform: 'translateX(16px)',
  },
})
