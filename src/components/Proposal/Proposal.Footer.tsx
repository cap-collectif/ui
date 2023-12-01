import * as React from 'react'

import { Flex, FlexProps } from '../layout'

export interface ProposalFooterProps extends FlexProps {}

const ProposalFooter: React.FC<ProposalFooterProps> = ({
  children,
  ...rest
}) => {
  return (
    <Flex
      direction="row"
      align="center"
      justify="flex-start"
      marginTop="16px"
      gap={6}
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default ProposalFooter
