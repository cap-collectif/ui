import type {SystemStyleObject} from '@styled-system/css'

import colors from '../../../styles/modules/colors'

export const boxStyles: SystemStyleObject = {
  position: 'absolute',
  cursor: 'pointer',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: 'normal',
  borderColor: 'gray.500',
  borderRadius: '100%',
  height: '14px',
  width: '14px',

  '.cap-radio__input:checked + & ': {
    bg: 'blue.500',
    borderColor: 'blue.500',
    width:'7px',
    height:'7px',
    '&:before': {
      boxShadow: `0 0 2px 2px ${colors.blue[300]}`,
      content: '""',
      position: 'absolute',
      opacity: 1,
      width: '14px',
      height: '14px',
      background: 'transparent',
      top: '-4.5px',
      left: '-4.5px',
      boxSizing: 'border-box',
      border: '1px solid',
      borderColor: 'blue.500',
      borderRadius: '50%',
      color: 'white',
    },
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
    color: 'red.500',
  },

  '.cap-radio__input:disabled:checked + &:before': {
    color: 'gray.300',
  },
}
