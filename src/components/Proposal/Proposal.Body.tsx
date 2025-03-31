import * as React from 'react'

import { CapUIFontSize } from '../../styles'
import { Box, BoxProps } from '../box'

export interface ProposalBodyProps extends Omit<BoxProps, 'children'> {
  children: string | React.ReactElement
}

const ProposalBody: React.FC<ProposalBodyProps> = ({ children, ...rest }) => {
  return (
    <Box
      as="p"
      color="neutral-gray.700"
      marginTop="4px"
      fontSize={CapUIFontSize.BodyRegular}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default ProposalBody
