import styled from 'styled-components'

import colors from '../../styles/modules/colors'
import { Box } from '../box'

export const DropdownList = styled(Box)<{ width: string }>`
  width: ${props => (props.width ? props.width : '290px')};
  border-radius: 4px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray['200']};
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.15);
  list-style: none;
  max-height: 200px;
  overflow-y: scroll;
  border-collapse: collapse;
`

export const DropdownListItem = styled(Box)<{ active?: boolean }>`
  border-bottom: 1px solid ${colors.gray['100']};
  cursor: pointer;
  white-space: pre;
  text-overflow: ellipsis;
  overflow-x: hidden;
  &:hover {
    background-color: ${colors.gray['100']};
    border-bottom-color: ${colors.gray['200']};
    border-top: 1px solid ${colors.gray['200']};
  }

  &:first-of-type {
    border-top: none;
    &:hover {
      background-color: ${colors.gray['100']};
      border-bottom-color: ${colors.gray['200']};
      & + li {
        border-width: 0;
      }
    }
  }

  &:last-of-type {
    border-bottom: none;
    &:hover {
      background-color: ${colors.gray['100']};
      border-top: 1px solid ${colors.gray['200']};
      & + li {
        border-width: 0;
      }
    }
  }
`
