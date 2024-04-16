import styled from 'styled-components'

import { CapUILineHeight } from '../../../../styles'
import { Box } from '../../../box'
import { commonStyle, DateBoxProps, variantDate } from '../Date.style'

export const DateInputBox = styled(Box)<DateBoxProps>`
  input[type='date'] {
    display: inline-block;
    background-color: white;
    border: ${props => props.theme.borders.normal};
    border-color: ${props => props.theme.colors.gray['300']};
    border-radius: ${props => props.theme.radii.normal}px;
    font-family: ${props => props.theme.fonts.input};
    line-height: 24px;

    &:focus-within {
      border-color: ${props => props.theme.colors.primary['500']};
    }

    &:disabled {
      background-color: ${props => props.theme.colors.gray['100']};
      border-color: ${props => props.theme.colors.gray['200']};

      &:hover,
      &.hover {
        border-color: ${props => props.theme.colors.gray['200']};
      }
    }

    ${props =>
      props.isInvalid &&
      `
      background-color: ${props.theme.colors.red['150']};
      border-color: ${props.theme.colors.red['500']};
      &:hover,&.hover {
        border-color:${props.theme.colors.red['500']};
      }
      &:focus-within{
        background-color: 'white';
        border-color: ${props.theme.colors.red['500']};
      }
    `}
  }

  ${props => variantDate[props.variant]}
  ${commonStyle}
`
