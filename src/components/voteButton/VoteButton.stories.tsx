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

export const Default: Story<VoteButtonProps> = () => (
  <VoteButton>
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

export const AvecSeuil: Story<VoteButtonProps> = args => (
  <VoteButton {...args}>
    <Flex direction="column" align="flex-start">
      <Text
        fontWeight={CapUIFontWeight.Semibold}
        style={{ whiteSpace: 'nowrap' }}
      >
        101 Votes
      </Text>
      <Text fontSize={1} style={{ whiteSpace: 'nowrap' }}>
        {args.threshold} % de l’objectif
      </Text>
    </Flex>
  </VoteButton>
)
AvecSeuil.args = {
  threshold: 30,
}
