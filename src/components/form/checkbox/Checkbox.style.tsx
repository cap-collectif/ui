import type { SystemStyleObject } from '@styled-system/css'

import { Colors } from '../../../styles/modules/colors'

export const boxStyles = (colors?: Colors): SystemStyleObject => ({
  position: 'absolute',
  cursor: 'pointer',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: 'normal',
  borderColor: 'gray.500',
  borderRadius: 'normal',
  height: '14px',
  width: '14px',

  '&:before': {
    content: '""',
    border: 'normal',
    borderLeft: 0,
    borderTop: 0,
    width: '4px',
    height: '6px',
    top: '50%',
    left: '50%',
    opacity: 0,
    position: 'absolute',
    transform: 'rotate(45deg) translate(-50%, -50%)',
    transformOrigin: '25% 0%',
    color: 'white',
  },

  '.cap-checkbox__input:checked + & ': {
    bg: 'primary.base',
    borderColor: 'primary.base',
  },

  '.cap-checkbox__input:focus-visible + &': {
    outline: '2px #fff solid',
    outlineOffset: 0,
    boxShadow: `0 0 0 4px ${colors?.primary.dark}`,
  },

  '.cap-checkbox__input[aria-invalid="true"] + &': {
    bg: 'red.150',
    borderColor: 'red.500',
  },

  '.cap-checkbox__input:disabled + &': {
    bg: 'gray.150',
    borderColor: 'gray.300',
    cursor: 'auto',
  },

  '.cap-checkbox__input:disabled:checked + &': {
    bg: 'gray.100',
    borderColor: 'gray.300',
  },

  '.cap-checkbox__input:checked + &:before': {
    opacity: 1,
  },

  '.cap-checkbox__input[aria-invalid="true"] + &:before': {
    color: 'red.500',
  },

  '.cap-checkbox__input:disabled:checked + &:before': {
    color: 'gray.300',
  },
})
