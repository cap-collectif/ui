import * as React from 'react'

import { CapUIRadius } from '../../styles'
import { Flex, FlexProps } from '../layout'
import ProposalContent from './Proposal.Content'
import ProposalCover from './Proposal.Cover'

type SubComponents = {
  Cover: typeof ProposalCover
  Content: typeof ProposalContent
}
export interface ProposalProps extends FlexProps {}

const Proposal: React.FC<ProposalProps> & SubComponents = ({ children }) => {
  return (
    <Flex
      direction="row"
      justify="space-between"
      p={6}
      minHeight="200px"
      gap={8}
      width="1002px"
      bg="white"
      borderRadius={CapUIRadius.Popover}
    >
      {children}
    </Flex>
  )
}

Proposal.Cover = ProposalCover
Proposal.Content = ProposalContent
export default Proposal
