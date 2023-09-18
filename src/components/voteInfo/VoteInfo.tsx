import * as React from 'react';



import { CapUIRadius } from '../../styles';
import { SHADOWS } from '../../styles/theme';
import { Flex, FlexProps } from '../layout'
import { ProgressBar } from '../progressBar';
import VoteInfoBody from './VoteInfo.body';
import VoteInfoHeader from './VoteInfo.header';


export interface VoteInfoProps extends FlexProps {}
type SubComponents = {
  Header: typeof VoteInfoHeader
  Body: typeof VoteInfoBody
  ProgressBar: typeof ProgressBar
}
const VoteInfo: React.FC<VoteInfoProps> & SubComponents = ({ children }) => {
  return (
    <Flex
      direction="column"
      width="290px"
      minHeight="150px"
      bg="white"
      px={6}
      py={4}
      borderRadius={CapUIRadius.Card}
      boxShadow={SHADOWS.big}
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