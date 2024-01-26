import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapUIFontWeight } from '../../styles'
import { CapUIIcon } from '../icon'
import { Flex } from '../layout'
import RankButton from '../rankButton/RankButton'
import { Heading, Text } from '../typography'
import VoteButton from '../voteButton/VoteButton'
import type { ProposalProps } from './Proposal'
import Proposal from './Proposal'

const meta: Meta = {
  title: 'Library/Proposal',
  component: Proposal,
  parameters: {
    controls: { expanded: true },
    backgrounds: { default: 'dark' },
  },
}

export default meta

export const Default: Story<ProposalProps> = args => {
  const [points, setPoints] = React.useState(3)
  const [votes, setVotes] = React.useState(101)

  return (
    <Proposal {...args}>
      <Proposal.Content>
        <Proposal.Content.Header>
          <Flex alignItems="center">
            <Proposal.Content.Header.Author author="Auteur" />
            <Proposal.Content.Header.Author
              author="Ecologie"
              ml={4}
              icon={CapUIIcon.Ecology}
            />
          </Flex>
          <Heading
            as="h4"
            fontSize="16px"
            color="neutral-gray.900"
            fontWeight={CapUIFontWeight.Bold}
          >
            Titre de la propositions
          </Heading>
        </Proposal.Content.Header>
        <Proposal.Content.Body>
          Extrait de la proposition ou description de la propositions En accord
          avec la Municipalité d’Argenteuil, nous avons créé le jardin partagé
          sur un terrain communal en friche inutilisé de 700 m2 en juin 2013,
          puis d’une extension en février 2019 : aujourd’hui nous disposons
          d’une surface 1200 m² Pour faire évoluer l’équipement et ipsum dolor
          sit amet, consectetur adipiscing ...
        </Proposal.Content.Body>
        <Proposal.Content.Footer>
          <VoteButton
            onClick={() => {
              setVotes(votes + 1)
            }}
          >
            <Flex direction="column" align="flex-start">
              <Text fontWeight={CapUIFontWeight.Semibold}>{votes} Votes</Text>
            </Flex>
          </VoteButton>
          <RankButton
            label={`+${points} Points`}
            onLeftIconClick={() => {
              setPoints(points + 1)
            }}
            onRightIconClick={() => {
              setPoints(points - 1)
            }}
          ></RankButton>
        </Proposal.Content.Footer>
      </Proposal.Content>
      <Proposal.Cover
        status="Status"
        src="https://images.unsplash.com/photo-1694630737405-f27394b91824?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2565&q=80"
      />
    </Proposal>
  )
}
