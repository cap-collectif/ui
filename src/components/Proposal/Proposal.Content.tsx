import * as React from 'react'

import { Flex, FlexProps } from '../layout'
import ProposalBody from './Proposal.Body'
import ProposalFooter from './Proposal.Footer'
import ProposalHeader from './Proposal.Header'

export interface ProposalContentProps extends FlexProps {}

type SubComponents = {
  Header: typeof ProposalHeader
  Body: typeof ProposalBody
  Footer: typeof ProposalFooter
}
const ProposalContent: React.FC<ProposalContentProps> & SubComponents = ({
  children,
}) => {
  return (
    <Flex direction="column" gap={0}>
      {children}
    </Flex>
  )
}

ProposalContent.Header = ProposalHeader
ProposalContent.Body = ProposalBody
ProposalContent.Footer = ProposalFooter

export default ProposalContent
