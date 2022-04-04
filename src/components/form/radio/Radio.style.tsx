import type { SystemStyleObject } from '@styled-system/css'

import colors from '../../../styles/modules/colors'

export const boxStyles: SystemStyleObject = {
  position: 'absolute',
  cursor: 'pointer',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: 'normal',
  borderColor: 'gray.500',
  bg: 'white',
  borderRadius: '50%',
  height: '14px',
  width: '14px',

  '&:before': {
    content: '""',
    bg: 'blue.500',
    borderRadius: '50%',
    width: '7px',
    height: '7px',
    top: '50%',
    left: '50%',
    opacity: 0,
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
  },

  '.cap-radio__input:checked + &': {
    borderColor: 'blue.500',
  },

  '.cap-radio__input:focus + &': {
    boxShadow: `0 0 2px 2px ${colors.blue[300]}`,
  },

  '.cap-radio__input[aria-invalid="true"] + &': {
    bg: 'red.150',
    borderColor: 'red.500',
  },

  '.cap-radio__input:disabled + &': {
    bg: 'gray.150',
    borderColor: 'gray.300',
    cursor: 'auto',
  },

  '.cap-radio__input:disabled:checked + &': {
    bg: 'gray.100',
    borderColor: 'gray.300',
  },

  '.cap-radio__input:checked + &:before': {
    opacity: 1,
  },

  '.cap-radio__input[aria-invalid="true"] + &:before': {
    bg: 'red.500',
  },

  '.cap-radio__input:disabled:checked + &:before': {
    bg: 'gray.300',
  },
}
