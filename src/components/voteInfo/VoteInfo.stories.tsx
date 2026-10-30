import { Meta, StoryFn } from '@storybook/react'
import * as React from 'react'

import { Box } from '../box'
import { Flex } from '../layout'
import { Heading, Text } from '../typography'
import VoteInfo from './VoteInfo'
import type { VoteInfoProps } from './VoteInfo'

const meta: Meta = {
  title: 'Library/VoteInfo',
  component: VoteInfo,
  args: {},
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Default: StoryFn<VoteInfoProps> = ({ ...args }) => (
  <Flex width="100%" height="100%" justify="center" align="center" mt={6}>
    <VoteInfo {...args}>
      <VoteInfo.Header infoLabel="Label d'info">
        <VoteInfo.Header.Label>À propos du vote</VoteInfo.Header.Label>
        <Heading>Votes minimum</Heading>
      </VoteInfo.Header>
      <VoteInfo.Body>
        <Text lineHeight="normal">
          Votez pour 3 propositions pour valider votre participation.
        </Text>
      </VoteInfo.Body>
      <VoteInfo.ProgressBar totalSteps={3} currentStep={1} />
    </VoteInfo>
  </Flex>
)
export const OutOfBudget: StoryFn<VoteInfoProps> = ({ ...args }) => (
  <Flex width="100%" height="100%" justify="center" align="center">
    <VoteInfo {...args}>
      <VoteInfo.Header infoLabel="Label d'info">
        <VoteInfo.Header.Label>À propos du vote</VoteInfo.Header.Label>
        <Heading>Hors budget 😱</Heading>
      </VoteInfo.Header>
      <VoteInfo.Body>
        <Text lineHeight="normal">
          Vous avez dépassé le budget maximum.{' '}
          <Box
            as="a"
            color="primary"
            sx={{ textDecoration: 'underline' }}
            href="#"
          >
            Supprimer un vote
          </Box>{' '}
          pour valider votre participation
        </Text>
      </VoteInfo.Body>
      <VoteInfo.ProgressBar totalSteps={1} currentStep={1} color="red.500" />
    </VoteInfo>
  </Flex>
)
