import * as React from 'react'

import { CapUIRadius } from '../../styles'
import { SHADOWS } from '../../styles/theme'
import { Flex, FlexProps } from '../layout'
import { ProgressBar as DSProgressBar } from '../progressBar'
import VoteInfoBody from './VoteInfo.body'
import VoteInfoHeader from './VoteInfo.header'

export interface VoteInfoProps extends FlexProps {}
type SubComponents = {
  Header: typeof VoteInfoHeader
  Body: typeof VoteInfoBody
  ProgressBar: typeof ProgressBar
}

const ProgressBar = props => <DSProgressBar mt={4} {...props} />

const VoteInfo: React.FC<VoteInfoProps> & SubComponents = ({
  children,
  ...rest
}) => {
  return (
    <Flex
      direction="column"
      bg="white"
      p={6}
      borderRadius={CapUIRadius.Card}
      boxShadow={SHADOWS.small}
      {...rest}
    >
      {children}
    </Flex>
  )
}
VoteInfo.displayName = 'VoteInfo'

VoteInfo.Header = VoteInfoHeader
VoteInfo.Body = VoteInfoBody
VoteInfo.ProgressBar = ProgressBar

export default VoteInfo
