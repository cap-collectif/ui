import * as React from 'react'

import { CapUIFontWeight } from '../../../styles'
import { BoxPropsOf } from '../../box'
import { Box } from '../../box/Box'
import { TrProps } from '../tr/Tr'

export interface TheadProps extends BoxPropsOf<'thead'> {
  children: React.ReactElement<TrProps>
}

const Thead: React.FC<TheadProps> = ({ children, ...rest }: TheadProps) => (
  // @ts-ignore
  <Box
    as="thead"
    bg="gray.100"
    color="gray.500"
    fontWeight={CapUIFontWeight.Semibold}
    uppercase
    {...rest}
  >
    {React.cloneElement(children, { inHead: true })}
  </Box>
)

Thead.displayName = 'Table.Thead'

export default Thead
