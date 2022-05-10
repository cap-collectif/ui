import styled from 'styled-components'

import colors from '../../styles/modules/colors'

export const DropdownList = styled.ul<{ width: string }>`
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

export const DropdownListItem = styled.li<{ active?: boolean }>`
  width: 100%;
  padding: 8px 12px;
  height: 40px;
  background-color: ${colors.white};
  margin: 0;
  font-family: Open Sans, system-ui, sans-serif;
  font-weight: ${props => (props.active ? 600 : 400)};
  font-size: 14px;
  line-height: 24px;
  border-bottom: 1px solid ${colors.gray['100']};
  color: ${colors.gray['900']};
  box-sizing: border-box;
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
