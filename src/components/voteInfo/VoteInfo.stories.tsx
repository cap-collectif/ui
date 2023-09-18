import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Flex } from '../layout'
import { Heading,Text } from '../typography'
import VoteInfo from './VoteInfo'
import type { VoteInfoProps } from './VoteInfo'
import { Box } from '../box';

const meta: Meta = {
  title: 'Library/VoteInfo',
  component: VoteInfo,
  args: {},
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Default: Story<VoteInfoProps> = ({ ...args }) => (
  <Flex width="100%" height="100%" justify="center" align="center">
    <VoteInfo {...args}>
      <VoteInfo.Header infoLabel="Label d'info">
        <VoteInfo.Header.Label>À propos du vote</VoteInfo.Header.Label>
        <Heading>Votes minimum</Heading>
      </VoteInfo.Header>
      <VoteInfo.ProgressBar totalSteps={3} currentStep={1}/>
      <VoteInfo.Body>
        <Text>Votez pour 3 propositions pour valider votre participation.</Text>

      </VoteInfo.Body>
    </VoteInfo>
  </Flex>
)
export const OutOfBudget: Story<VoteInfoProps> = ({ ...args }) => (
  <Flex width="100%" height="100%" justify="center" align="center">
    <VoteInfo {...args}>
      <VoteInfo.Header infoLabel="Label d'info">
        <VoteInfo.Header.Label>À propos du vote</VoteInfo.Header.Label>
        <Heading>Hors budget 😱</Heading>
      </VoteInfo.Header>
      <VoteInfo.ProgressBar totalSteps={1} currentStep={1} color="red.500"/>
      <VoteInfo.Body>
        <Text>
          Vous avez dépassez le budget maximum. <Box as="a" color="primary" sx={{textDecoration:'underline'}} href='#' >Supprimer un vote</Box> pour valider votre participation

        </Text>
      </VoteInfo.Body>
    </VoteInfo>
  </Flex>
)