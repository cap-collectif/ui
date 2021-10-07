import { SystemStyleObject } from '@styled-system/css'

import { CapUIFontFamily, CapUILineHeight } from '../../styles'

const styles: SystemStyleObject = {
  border: 'normal',
  borderRadius: 'normal',
  borderColor: 'gray.300',

  fontFamily: CapUIFontFamily.Roboto,
  lineHeight: CapUILineHeight.Base,
  color: 'gray.900',
  bg: 'white',

  '&::placeholder': {
    color: 'gray.500',
    fontFamily: CapUIFontFamily.Roboto,
    lineHeight: CapUILineHeight.Base,
  },

  '&:focus': {
    borderColor: 'blue.500',
  },

  '&[aria-selected="true"]': {
    borderColor: 'blue.500',
  },

  '&:active': {
    borderColor: 'blue.500',
  },

  '&[aria-invalid="true"]': {
    bg: 'red.150',
    borderColor: 'red.500',
    '&:focus': {
      bg: 'white',
      borderColor: 'red.500',
    },

    '&[aria-selected="true"]': {
      bg: 'white',
      borderColor: 'red.500',
    },

    '&:active': {
      bg: 'white',
      borderColor: 'red.500',
    },
  },

  '&:disabled': {
    bg: 'gray.100',
    borderColor: 'gray.200',
    color: 'gray.500',
  },
}

export default styles
