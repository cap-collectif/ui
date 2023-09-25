import * as React from 'react'

import { Flex, FlexProps } from '../layout'
import ProposalHeaderAuthor from './Proposal.Header.Author'

export interface ProposalHeaderProps extends FlexProps {}

type SubComponents = {
  Author: typeof ProposalHeaderAuthor
}
const ProposalHeader: React.FC<ProposalHeaderProps> & SubComponents = ({
  children,
  ...rest
}) => {
  return (
    <Flex direction="column" gap={2} {...rest}>
      {children}
    </Flex>
  )
}

ProposalHeader.Author = ProposalHeaderAuthor

export default ProposalHeader
