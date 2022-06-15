import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Button } from '../button'
import { CapUIModalSize } from '../modal'
import { Text } from '../typography'
import { Heading } from '../typography/Heading'
import MultiStepModal from './MultiStepModal'
import type { MultiStepModalProps } from './MultiStepModal'
import { useMultiStepModal } from './MultiStepModal.context'

const meta: Meta<MultiStepModalProps> = {
  title: 'Library/MultiStepModal',
  component: MultiStepModal,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta

const ModalOne: React.FC = () => {
  const { goToNextStep } = useMultiStepModal()

  return (
    <>
      <MultiStepModal.Header>
        <Heading>Modal One</Heading>
      </MultiStepModal.Header>

      <MultiStepModal.Body>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          culpa ipsa labore, perspiciatis ratione voluptatem. Delectus
          doloremque eligendi error, iste, maiores nisi optio perferendis,
          possimus provident quo sapiente veritatis. Accusantium architecto
          deserunt esse, fugiat iusto molestias neque, officia pariatur placeat
          quasi qui sunt voluptates. Harum nulla placeat quidem repellendus
          voluptatum!
        </Text>
      </MultiStepModal.Body>

      <MultiStepModal.Footer>
        <Button onClick={goToNextStep}>Next</Button>
      </MultiStepModal.Footer>
    </>
  )
}

const ModalTwo: React.FC = () => {
  const { goToNextStep, goToPreviousStep } = useMultiStepModal()

  return (
    <>
      <MultiStepModal.Header>
        <Heading>Modal Two</Heading>
      </MultiStepModal.Header>

      <MultiStepModal.Body>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
          distinctio, eum exercitationem qui sit sunt temporibus! Asperiores est
          facilis laudantium officiis quisquam quod repudiandae, ullam ut. Ad
          alias eos ex iste magni non officiis ut! Consequuntur corporis, cum
          eveniet id magni nam unde! Aperiam aspernatur autem blanditiis,
          cumque, deleniti dolorem dolorum eaque est eum excepturi fuga fugit
          harum illo incidunt, magni mollitia nisi nulla pariatur possimus quae
          quidem quod quos rerum suscipit tenetur vel velit voluptatibus! Ab
          consectetur, distinctio dolorum eligendi et ipsam iure libero
          molestiae natus nisi, officia quidem reiciendis reprehenderit? Cum
          cupiditate incidunt iure perspiciatis quisquam ut, voluptatibus.
        </Text>
      </MultiStepModal.Body>

      <MultiStepModal.Footer>
        <Button onClick={goToPreviousStep}>Previous</Button>
        <Button onClick={goToNextStep}>Next</Button>
      </MultiStepModal.Footer>
    </>
  )
}

const ModalThree: React.FC = () => {
  const { goToPreviousStep, hide } = useMultiStepModal()

  return (
    <>
      <MultiStepModal.Header>
        <Heading>Modal Three</Heading>
      </MultiStepModal.Header>

      <MultiStepModal.Body>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae
          ex illum ipsam nihil nostrum rerum sunt voluptate. Accusamus
          accusantium consequatur dicta dolores dolorum eius et, eveniet
          excepturi exercitationem harum laborum, nihil nobis officiis
          praesentium similique sunt voluptatum! Earum, nobis, quidem! Ab cumque
          dolor eum facilis hic iste itaque, officia praesentium quam quia
          repudiandae vitae? Aspernatur aut cumque maiores nobis odit, quod sed!
          Dolores ea exercitationem non reiciendis? Ad deserunt dicta doloremque
          error fugiat fugit, ipsam itaque labore modi neque nobis nostrum
          praesentium quam quo rem sunt tempore voluptatum. Esse fuga laboriosam
          nihil odio pariatur voluptate? Architecto asperiores aut blanditiis
          consequuntur, distinctio eum facere facilis in nemo nihil non, odit,
          omnis ratione rem ullam. Accusamus, accusantium adipisci assumenda
          corporis, cumque dolor dolorem doloribus hic illo illum ipsam magnam
          nam nesciunt pariatur perspiciatis, quidem quisquam repudiandae saepe
          similique tempore temporibus ullam velit voluptatibus? Cum deleniti
          harum rem ullam voluptatum. A ab aliquam amet cum dolores eligendi
          error ex excepturi facilis fugiat fugit illum non perferendis quam,
          quibusdam quos, recusandae reprehenderit similique sunt tenetur ullam,
          vel veniam voluptatibus. A aut blanditiis cupiditate ea fuga, odio
          pariatur reiciendis. Accusantium ad delectus harum natus nobis
          pariatur repellat tempore tenetur. Aut, blanditiis corporis culpa
          maiores nam natus non officiis, porro provident quasi repudiandae sunt
          ullam, veritatis? Cum eius facilis magni, minus quibusdam repellendus
          sed vero vitae. Aliquam debitis doloribus eum harum in, libero modi
          molestiae, nulla, quaerat quis sit vitae voluptate? Aliquam cupiditate
          debitis error illum provident quaerat, quasi qui sequi voluptatum.
          Amet eaque in maiores numquam porro quis recusandae? Eius magni
          molestias quas rem velit? Ab ad aliquam asperiores atque aut
          blanditiis consectetur consequuntur corporis cumque dicta dignissimos
          est excepturi facere hic illum incidunt inventore itaque magnam
          maiores natus necessitatibus neque obcaecati odio pariatur placeat
          provident quae quidem quod quos rem repellendus sapiente sequi,
          tempora vel velit, voluptas voluptatem! Dicta natus repellat saepe
          velit. Amet excepturi, fugit incidunt iste laborum maxime non
          obcaecati sed tempore tenetur? Ad aliquam aut corporis cupiditate
          deleniti, distinctio doloremque doloribus ducimus, eaque excepturi
          expedita fuga in incidunt magni minima modi molestias placeat quae
          quam quod, repudiandae sequi sit tempore temporibus voluptatem. Ab
          amet architecto asperiores, assumenda atque consectetur dolorum enim
          expedita necessitatibus odio optio quaerat quasi quia quisquam ratione
          repellendus repudiandae sed sit tenetur ut. Cumque dolor libero nam
          reprehenderit vel voluptatum! Architecto beatae consectetur culpa
          cumque deleniti dignissimos distinctio dolore doloribus dolorum
          ducimus eos eveniet fuga iure modi, nihil nobis odio optio possimus
          quas quidem quos ratione repellendus sed sint sunt temporibus
          veritatis. Cumque delectus excepturi molestiae repellat ut?
          Accusantium architecto aspernatur corporis dolores dolorum, enim ex
          facere natus non numquam odit quibusdam quod reiciendis sapiente,
          similique sunt ut? Aliquid atque consequatur cupiditate distinctio
          dolorem eos et, facere harum id illo illum impedit incidunt inventore
          laborum, magnam maiores maxime minima molestiae nam necessitatibus
          nemo non numquam odio provident quae quidem quod recusandae
          reprehenderit sapiente soluta temporibus unde ut vero? Ab aliquid,
          commodi consectetur dolore doloremque, dolores eum id ipsum iusto non
          quia reiciendis saepe similique, sint ut veritatis.
        </Text>
      </MultiStepModal.Body>

      <MultiStepModal.Footer>
        <Button onClick={goToPreviousStep}>Previous</Button>
        <Button onClick={hide}>Close</Button>
      </MultiStepModal.Footer>
    </>
  )
}

export const Default: Story<MultiStepModalProps> = () => (
  <MultiStepModal
    ariaLabel="Multi step modal"
    disclosure={
      <Button variant="primary" variantSize="medium">
        Open modal
      </Button>
    }
    size={CapUIModalSize.Md}
  >
    <ModalOne />
    <ModalTwo />
    <ModalThree />
  </MultiStepModal>
)

const ModalConditionalOne: React.FC<{ setDisplayStep: () => void }> = ({
  setDisplayStep,
}) => {
  const { goToNextStep } = useMultiStepModal()

  return (
    <>
      <MultiStepModal.Header>
        <Heading>Modal One</Heading>
      </MultiStepModal.Header>

      <MultiStepModal.Body>
        <Text mb={2}>Hello world !</Text>
        <Button variantSize="medium" onClick={setDisplayStep}>
          Toggle step 2
        </Button>
      </MultiStepModal.Body>

      <MultiStepModal.Footer>
        <Button onClick={goToNextStep}>Next</Button>
      </MultiStepModal.Footer>
    </>
  )
}

export const ConditionalStep: Story<MultiStepModalProps> = () => {
  const [displayStep, setDisplayStep] = React.useState(true)

  return (
    <MultiStepModal
      ariaLabel="Multi step modal"
      disclosure={
        <Button variant="primary" variantSize="medium">
          Open modal
        </Button>
      }
      size={CapUIModalSize.Md}
    >
      <ModalConditionalOne
        setDisplayStep={() => setDisplayStep(!displayStep)}
      />
      {displayStep && <ModalTwo />}
      <ModalThree />
    </MultiStepModal>
  )
}
