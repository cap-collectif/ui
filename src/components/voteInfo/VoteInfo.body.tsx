import cn from 'classnames'
import * as React from 'react'

import { CapUIFontSize } from '../../styles'
import { Flex, FlexProps } from '../layout'

export interface VoteInfoBodyProps extends FlexProps {
  readonly children: React.ReactNode
}

const VoteInfoBody: React.FC<VoteInfoBodyProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <Flex
      as="main"
      height="100%"
      pt={2}
      direction="column"
      className={cn('cap-vote_info__body', className)}
      overflow="auto"
      fontSize={CapUIFontSize.BodyRegular}
      color="neutral-gray.900"
      {...rest}
    >
      {children}
    </Flex>
  )
}
VoteInfoBody.displayName = 'VoteInfo.Body'
export default VoteInfoBody
