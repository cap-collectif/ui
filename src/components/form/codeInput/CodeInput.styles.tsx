import type { SystemStyleObject } from '@styled-system/css'

import { CapUIFontFamily, CapUILineHeight } from '../../../styles'

const styles = (isVerified?: boolean): SystemStyleObject => ({
  border: 'normal',
  borderRadius: 'normal',
  borderColor: isVerified ? 'green.500' : 'gray.300',
  height: 10,
  maxWidth: 9,
  marginX: 1,
  marginY: 0,
  textAlign: 'center',
  py: 3,
  fontSize: 3,
  fontFamily: CapUIFontFamily.Input,
  lineHeight: CapUILineHeight.Base,
  color: 'gray.900',
  bg: isVerified ? 'green.150' : 'white',
  caretColor: 'transparent',
  flexShrink: 1,
  width: 'calc(100% / 6 + 8px)',

  '&:first-child': {
    marginLeft: 0,
    width: 'calc(100% / 6 + 4px)',
  },
  '&:last-child': {
    marginRight: 0,
    width: 'calc(100% / 6 + 4px)',
  },

  '&::placeholder': {
    color: 'gray.500',
    fontFamily: CapUIFontFamily.Input,
    lineHeight: CapUILineHeight.Base,
  },

  '&:focus,&[aria-selected="true"],&:active': {
    borderColor: 'primary.500',
  },

  '&[aria-invalid="true"]': {
    bg: 'red.150',
    borderColor: 'red.500',
    '&:focus,&[aria-selected="true"],&:active': {
      bg: 'white',
    },
  },

  '&:disabled': {
    bg: 'gray.100',
    borderColor: 'gray.200',
    color: 'gray.500',
  },
})

export default styles
