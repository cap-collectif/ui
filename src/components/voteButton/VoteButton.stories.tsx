import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapUIFontWeight } from '../../styles'
import { Flex } from '../layout'
import { Text } from '../typography'
import VoteButton, { VoteButtonProps } from './VoteButton'

const meta: Meta = {
  title: 'Library/VoteButton',
  component: VoteButton,
  args: {},
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Default: Story<VoteButtonProps> = () => {
  const [votes, setVotes] = React.useState(101)
  return (
    <VoteButton
      onClick={() => {
        setVotes(votes + 1)
      }}
    >
      <Flex direction="column" align="flex-start">
        <Text fontWeight={CapUIFontWeight.Semibold}>{votes} Votes</Text>
      </Flex>
    </VoteButton>
  )
}
export const Active: Story<VoteButtonProps> = () => (
  <VoteButton active>
    <Flex direction="column" align="flex-start">
      <Text fontWeight={CapUIFontWeight.Semibold}>101 Votes</Text>
      <Text fontSize={1}>70 % de l’objectif</Text>
    </Flex>
  </VoteButton>
)
export const Disabled: Story<VoteButtonProps> = args => (
  <VoteButton disabled {...args}>
    <Flex direction="column" align="flex-start">
      <Text
        fontWeight={CapUIFontWeight.Semibold}
        style={{ whiteSpace: 'nowrap' }}
      >
        101 Votes
      </Text>
      <Text fontSize={1} style={{ whiteSpace: 'nowrap' }}>
        70 % de l’objectif
      </Text>
    </Flex>
  </VoteButton>
)

export const AvecSeuil: Story<VoteButtonProps> = args => {
  const [votes, setVotes] = React.useState(101)
  const maxVotes = 200
  return (
    <VoteButton
      threshold={Math.floor((votes / maxVotes) * 100)}
      onClick={() => {
        setVotes(votes + 1)
      }}
      {...args}
    >
      <Flex direction="column" align="flex-start">
        <Text
          fontWeight={CapUIFontWeight.Semibold}
          style={{ whiteSpace: 'nowrap' }}
        >
          {votes} Votes
        </Text>
        <Text fontSize={1} style={{ whiteSpace: 'nowrap' }}>
          {Math.floor((votes / maxVotes) * 100)} % de l’objectif
        </Text>
      </Flex>
    </VoteButton>
  )
}
