import * as React from 'react'

import { Flex, FlexProps } from '../layout'

export interface ProposalFooterProps extends FlexProps {}

const ProposalFooter: React.FC<ProposalFooterProps> = ({ children }) => {
  return (
    <Flex
      direction="row"
      align="center"
      justify="flex-start"
      marginTop="16px"
      gap={6}
    >
      {children}
    </Flex>
  )
}

export default ProposalFooter
