import styled, { StyledComponent } from 'styled-components'

import { CapUIRadius } from '../../styles'
import colors from '../../styles/modules/colors'

export const List: StyledComponent<any, any> = styled.ul`
  width: 290px;
  border-radius: ${CapUIRadius.Card};
  background-color: ${colors.white};
`
