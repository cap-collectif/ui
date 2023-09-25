import * as React from 'react'

import { Box, BoxProps } from '../box'

export interface ProposalBodyProps extends Omit<BoxProps, 'children'> {
  children: string | React.ReactElement
}

const ProposalBody: React.FC<ProposalBodyProps> = ({ children }) => {
  return (
    <Box as="p" color="neutral-gray.700" marginTop="4px">
      {children}
    </Box>
  )
}

export default ProposalBody
