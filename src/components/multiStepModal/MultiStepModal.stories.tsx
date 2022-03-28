import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Box } from '../box'
import { Button } from '../button'
import { CapUIModalSize } from '../modal'
import ModalHeaderLabel from '../modal/headerLabel/ModalHeaderLabel'
import { Text } from '../typography'
import MultiStepModal from './MultiStepModal'
import type { MultiStepModalProps } from './MultiStepModal'
import type { Step } from './MultiStepModal.context'

const meta: Meta<MultiStepModalProps> = {
  title: 'Library/Modal/MultiStepModal',
  component: MultiStepModal,
  argTypes: {
    defaultStepId: {
      control: {
        type: 'text',
        required: false,
      },
      description: 'default step display',
    },
    resetStepOnClose: {
      control: {
        type: 'boolean',
        required: false,
      },
      description: 'reset step display on close',
    },
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta

const ModalOne: React.FC<Step> = () => (
  <Box>
    <Text>Coucou</Text>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
      accusantium aliquid at doloribus eligendi eos, facilis illo iusto
      laboriosam minima. Accusamus animi beatae cum dignissimos doloremque esse
      explicabo fugit in iure modi nam, officiis perferendis perspiciatis
      possimus quisquam rerum sapiente. Aut culpa ipsum libero non sed soluta,
      sunt voluptates. Nihil?
    </Text>
  </Box>
)

const ModalTwo: React.FC<Step> = () => (
  <Box>
    <Text>Encore une</Text>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam
      distinctio eligendi iusto natus possimus quaerat quia suscipit vero
      voluptates. Culpa impedit iste omnis porro sint! A architecto eius eos
      facilis id impedit necessitatibus quo sint veritatis voluptatem.
      Aspernatur atque consectetur, consequuntur culpa cupiditate doloribus nisi
      optio quis vitae voluptatem! Adipisci asperiores commodi consectetur
      consequuntur cumque, ducimus fuga iste quidem quod sunt? Ab blanditiis
      debitis, dicta distinctio doloribus incidunt inventore libero perferendis
      repudiandae voluptate! Ab animi asperiores culpa cupiditate delectus
      deserunt, dolores et incidunt inventore iure, magni officia praesentium
      quod rem reprehenderit soluta tempore veniam voluptatem. Exercitationem
      laudantium neque sapiente?
    </Text>
  </Box>
)

const ModalThree: React.FC<Step> = () => (
  <Box>
    <Text>Fini</Text>
    <Text>Bye</Text>
  </Box>
)
export const Default: Story<MultiStepModalProps> = () => (
  <MultiStepModal
    ariaLabel="Genshin Impact"
    disclosure={
      <Button variant="primary" variantSize="medium">
        Open modal
      </Button>
    }
    size={CapUIModalSize.Md}
  >
    {({ hide }) => (
      <>
        <MultiStepModal.Header>
          <ModalHeaderLabel>Dire que jaime les fruits</ModalHeaderLabel>
        </MultiStepModal.Header>
        <MultiStepModal.ProgressBar />

        <MultiStepModal.Body>
          <ModalOne
            id="one"
            label="Jaime les pommes"
            validationLabel="Voir les poires"
          />
          <ModalTwo
            id="two"
            label="Jaime les poires"
            validationLabel="Voir la suite"
            info={{
              url: '#',
              label: 'Jaime les pommes',
            }}
          />
          <ModalThree id="three" validationLabel="Fermer" />
        </MultiStepModal.Body>

        <MultiStepModal.Footer>
          <MultiStepModal.Footer.BackButton
            wording={{ firstStepWording: 'cancel', otherStepsWording: 'back' }}
          />
          <MultiStepModal.Footer.ContinueButton />
          <MultiStepModal.Footer.ValidationButton onClick={hide} />
        </MultiStepModal.Footer>
      </>
    )}
  </MultiStepModal>
)
