import * as React from 'react'

import { BoxProps } from '../box'
import { CapUIIcon, CapUIIconSize, Icon } from '../icon'
import { Flex } from '../layout'
import { Text } from '../typography'

export interface ProposalHeaderAuthorProps {
  author: string
  icon?: CapUIIcon
}

const ProposalHeaderAuthor: React.FC<ProposalHeaderAuthorProps & BoxProps> = ({
  author,
  icon,
  ...rest
}) => {
  return (
    <Flex direction="row" gap={1} justify="flex-start" align="center" {...rest}>
      <Icon
        name={icon || CapUIIcon.UserO}
        size={CapUIIconSize.Sm}
        color="neutral-gray.800"
      />
      <Text color="neutral-gray.800" fontSize={2}>
        {author}
      </Text>
    </Flex>
  )
}

export default ProposalHeaderAuthor
