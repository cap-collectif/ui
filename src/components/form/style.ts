import { SystemStyleObject } from '@styled-system/css'
import styled from 'styled-components'
import { variant } from 'styled-system'

import { CapUIFontFamily, CapUILineHeight } from '../../styles'
import { Box } from '../box'

export const InputInner = styled(Box)(
  variant({
    variants: {
      sm: {
        px: 3,
        py: 1,
      },
      md: {
        px: 3,
        py: 2,
      },
    },
  }),
)

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

  '&:hover,&.hover,&:focus,&[aria-selected="true"],&:active': {
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
