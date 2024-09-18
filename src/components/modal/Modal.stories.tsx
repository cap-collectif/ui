import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Button } from '../button'
import { FormControl, FormErrorMessage, FormLabel, Input } from '../form'
import Select from '../form/select/Select'
import { CapUIIcon, CapUIIconSize, Icon } from '../icon'
import { Flex } from '../layout'
import { Tooltip } from '../tooltip/Tooltip'
import { Heading, Text } from '../typography'
import { CapUIModalSize, Modal, ModalProps } from './'
import mdx from './Modal.mdx'

const meta: Meta<ModalProps> = {
  title: 'Library/Modal',
  component: Modal,
  args: {
    disclosure: <Button>Click me</Button>,
    size: CapUIModalSize.Md,
  },
  argTypes: {
    disclosure: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      page: mdx,
    },
  },
}

export default meta

export const Default: Story<ModalProps> = args => (
  <Modal
    {...args}
    ariaLabelledBy="modal-title"
    onOpen={() => {
      console.log('OPENED')
    }}
    onClose={() => {
      console.log('CLOSED')
    }}
  >
    {({ hide }) => (
      <>
        <Modal.Header closeIconLabel="Fermer">
          <Heading id="modal-title">Title</Heading>
        </Modal.Header>
        <Modal.Body>Content</Modal.Body>
        <Modal.Footer
          info={{
            url: 'https://geoffgraham.me/how-im-dealing-with-font-sizes/',
            label: 'information',
          }}
        >
          <Button
            variant="secondary"
            variantColor="primary"
            variantSize="big"
            onClick={hide}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            variantColor="primary"
            variantSize="big"
            onClick={hide}
          >
            Validate
          </Button>
        </Modal.Footer>
      </>
    )}
  </Modal>
)
export const Mobile: Story<ModalProps> = args => (
  <Modal {...args}>
    {({ hide }) => (
      <>
        <Modal.Header>
          <Modal.Header.Label>Label</Modal.Header.Label>
          <Heading>Title</Heading>
        </Modal.Header>
        <Modal.Body>
          <FormControl {...args} width="300px" mt="20px">
            <FormLabel htmlFor="name" label="Label" />
            <Input
              aria-describedby="Accessible"
              placeholder="Placeholder..."
              id="name"
            />
          </FormControl>
          <FormControl {...args} width="300px" mt="20px">
            <FormLabel htmlFor="name" label="Label">
              <Tooltip label="Une aide en plus">
                <Icon
                  name={CapUIIcon.Info}
                  size={CapUIIconSize.Sm}
                  color="blue.500"
                />
              </Tooltip>
            </FormLabel>
            <Input
              aria-describedby="Accessible"
              placeholder="Placeholder..."
              id="name"
            />
            <FormErrorMessage>Error info.</FormErrorMessage>
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            variantColor="primary"
            variantSize="medium"
            onClick={hide}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            variantColor="primary"
            variantSize="medium"
            onClick={hide}
          >
            Validate
          </Button>
        </Modal.Footer>
      </>
    )}
  </Modal>
)
Mobile.args = {
  size: undefined,
  fullSizeOnMobile: false,
}
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}
export const MobileFullPage: Story<ModalProps> = args => (
  <Modal {...args}>
    {({ hide }) => (
      <>
        <Modal.Header>
          <Modal.Header.Label>Label</Modal.Header.Label>
          <Heading>Title</Heading>
        </Modal.Header>
        <Modal.Body>Content</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            variantColor="primary"
            variantSize="medium"
            onClick={hide}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            variantColor="primary"
            variantSize="medium"
            onClick={hide}
          >
            Validate
          </Button>
        </Modal.Footer>
      </>
    )}
  </Modal>
)
MobileFullPage.args = {
  fullSizeOnMobile: true,
  size: undefined,
}
MobileFullPage.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}
export const WithLabel: Story<ModalProps> = args => (
  <Modal {...args}>
    {({ hide }) => (
      <>
        <Modal.Header>
          <Modal.Header.Label>Label</Modal.Header.Label>
          <Heading>Title</Heading>
        </Modal.Header>
        <Modal.Body>Content</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" variantColor="primary" onClick={hide}>
            Cancel
          </Button>
          <Button variant="primary" variantColor="primary" onClick={hide}>
            Validate
          </Button>
        </Modal.Footer>
      </>
    )}
  </Modal>
)

export const WithLotOfContent: Story<ModalProps> = args => (
  <Modal {...args}>
    {({ hide }) => (
      <>
        <Modal.Header>
          <Heading>Title</Heading>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          ad aliquam consectetur consequuntur culpa debitis delectus dicta
          dignissimos error, impedit maiores molestias non officiis qui quidem
          quis repellat repudiandae saepe ut vel? Autem commodi corporis ea
          expedita explicabo iste placeat quibusdam quisquam? A autem eaque
          expedita fugiat voluptas? Explicabo, laudantium, saepe. Accusamus
          aperiam, aspernatur deserunt distinctio error id ipsa libero, maxime
          nam praesentium ratione, recusandae reiciendis voluptate? Aliquam amet
          doloribus est odit pariatur sapiente tenetur. Alias aliquid asperiores
          at consequuntur, deserunt ducimus excepturi facere illum magni maiores
          minima modi nam nihil nobis obcaecati quam quidem recusandae
          reprehenderit sunt, velit. Accusantium animi autem distinctio, earum
          error excepturi laboriosam molestias nemo neque possimus quaerat,
          quisquam rerum similique ullam velit, vero voluptate. Aliquam
          aspernatur atque debitis deserunt doloremque, doloribus ea est
          excepturi fugiat in molestiae nemo nesciunt optio possimus qui
          quibusdam quidem recusandae rerum sed sequi tempore totam unde!
          Blanditiis fuga nobis quis. Consequuntur doloremque impedit maiores
          minus possimus quia, quibusdam quis quod unde voluptates. Aperiam
          commodi error expedita facilis impedit ipsum, iusto minima nam
          obcaecati porro praesentium quam quos repellendus sequi sunt unde, ut?
          At corporis laboriosam mollitia necessitatibus officiis omnis
          perferendis possimus. Dolores hic ipsa ipsam nam nostrum possimus,
          quibusdam tempora tenetur ut vitae! Accusamus beatae cupiditate
          eligendi harum impedit magnam quod, sed. A, aliquam dolorem fugiat
          minima nostrum porro similique voluptatem? Alias illum nam natus
          perferendis voluptatem? Consectetur consequuntur esse in nobis quidem
          quis, reprehenderit tempora. Adipisci, architecto at autem doloribus
          libero mollitia nam nihil quasi temporibus unde. Doloremque ea est et
          minus molestias nemo qui quia, reiciendis unde! Consequatur deleniti
          dolore et facere iste minima nobis officiis omnis ratione veritatis.
          Amet asperiores blanditiis consequatur culpa cupiditate distinctio
          dolore ducimus ea earum, eligendi fugiat libero molestiae natus
          necessitatibus odio perferendis, porro praesentium quae sequi, ullam?
          Dolorum eum illo labore quis!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" variantColor="primary" onClick={hide}>
            Cancel
          </Button>
          <Button variant="primary" variantColor="primary" onClick={hide}>
            Validate
          </Button>
        </Modal.Footer>
      </>
    )}
  </Modal>
)

export const allowBodyScroll: Story<ModalProps> = args => (
  <Flex width="60%" direction="column" margin="0px auto">
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad
      aliquam consectetur consequuntur culpa debitis delectus dicta dignissimos
      error, impedit maiores molestias non officiis qui quidem quis repellat
      repudiandae saepe ut vel? Autem commodi corporis ea expedita explicabo
      iste placeat quibusdam quisquam? A autem eaque expedita fugiat voluptas?
      Explicabo, laudantium, saepe. Accusamus aperiam, aspernatur deserunt
      distinctio error id ipsa libero, maxime nam praesentium ratione,
      recusandae reiciendis voluptate? Aliquam amet doloribus est odit pariatur
      sapiente tenetur. Alias aliquid asperiores at consequuntur, deserunt
      ducimus excepturi facere illum magni maiores minima modi nam nihil nobis
      obcaecati quam quidem recusandae reprehenderit sunt, velit. Accusantium
      animi autem distinctio, earum error excepturi laboriosam molestias nemo
      neque possimus quaerat, quisquam rerum similique ullam velit, vero
      voluptate. Aliquam aspernatur atque debitis deserunt doloremque, doloribus
      ea est excepturi fugiat in molestiae nemo nesciunt optio possimus qui
      quibusdam quidem recusandae rerum sed sequi tempore totam unde! Blanditiis
      fuga nobis quis. Consequuntur doloremque impedit maiores minus possimus
      quia, quibusdam quis quod unde voluptates. Aperiam commodi error expedita
      facilis impedit ipsum, iusto minima nam obcaecati porro praesentium quam
      quos repellendus sequi sunt unde, ut? At corporis laboriosam mollitia
      necessitatibus officiis omnis perferendis possimus. Dolores hic ipsa ipsam
      nam nostrum possimus, quibusdam tempora tenetur ut vitae! Accusamus beatae
      cupiditate eligendi harum impedit magnam quod, sed. A, aliquam dolorem
      fugiat minima nostrum porro similique voluptatem? Alias illum nam natus
      perferendis voluptatem? Consectetur consequuntur esse in nobis quidem
      quis, reprehenderit tempora. Adipisci, architecto at autem doloribus
      libero mollitia nam nihil quasi temporibus unde. Doloremque ea est et
      minus molestias nemo qui quia, reiciendis unde! Consequatur deleniti
      dolore et facere iste minima nobis officiis omnis ratione veritatis. Amet
      asperiores blanditiis consequatur culpa cupiditate distinctio dolore
      ducimus ea earum, eligendi fugiat libero molestiae natus necessitatibus
      odio perferendis, porro praesentium quae sequi, ullam? Dolorum eum illo
      labore quis!
    </Text>
    <Modal {...args}>
      {({ hide }) => (
        <>
          <Modal.Header>
            <Heading>Title</Heading>
          </Modal.Header>
          <Modal.Body>Content</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              variantColor="primary"
              variantSize="big"
              onClick={hide}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              variantColor="primary"
              variantSize="big"
              onClick={hide}
            >
              Validate
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad
      aliquam consectetur consequuntur culpa debitis delectus dicta dignissimos
      error, impedit maiores molestias non officiis qui quidem quis repellat
      repudiandae saepe ut vel? Autem commodi corporis ea expedita explicabo
      iste placeat quibusdam quisquam? A autem eaque expedita fugiat voluptas?
      Explicabo, laudantium, saepe. Accusamus aperiam, aspernatur deserunt
      distinctio error id ipsa libero, maxime nam praesentium ratione,
      recusandae reiciendis voluptate? Aliquam amet doloribus est odit pariatur
      sapiente tenetur. Alias aliquid asperiores at consequuntur, deserunt
      ducimus excepturi facere illum magni maiores minima modi nam nihil nobis
      obcaecati quam quidem recusandae reprehenderit sunt, velit. Accusantium
      animi autem distinctio, earum error excepturi laboriosam molestias nemo
      neque possimus quaerat, quisquam rerum similique ullam velit, vero
      voluptate. Aliquam aspernatur atque debitis deserunt doloremque, doloribus
      ea est excepturi fugiat in molestiae nemo nesciunt optio possimus qui
      quibusdam quidem recusandae rerum sed sequi tempore totam unde! Blanditiis
      fuga nobis quis. Consequuntur doloremque impedit maiores minus possimus
      quia, quibusdam quis quod unde voluptates. Aperiam commodi error expedita
      facilis impedit ipsum, iusto minima nam obcaecati porro praesentium quam
      quos repellendus sequi sunt unde, ut? At corporis laboriosam mollitia
      necessitatibus officiis omnis perferendis possimus. Dolores hic ipsa ipsam
      nam nostrum possimus, quibusdam tempora tenetur ut vitae! Accusamus beatae
      cupiditate eligendi harum impedit magnam quod, sed. A, aliquam dolorem
      fugiat minima nostrum porro similique voluptatem? Alias illum nam natus
      perferendis voluptatem? Consectetur consequuntur esse in nobis quidem
      quis, reprehenderit tempora. Adipisci, architecto at autem doloribus
      libero mollitia nam nihil quasi temporibus unde. Doloremque ea est et
      minus molestias nemo qui quia, reiciendis unde! Consequatur deleniti
      dolore et facere iste minima nobis officiis omnis ratione veritatis. Amet
      asperiores blanditiis consequatur culpa cupiditate distinctio dolore
      ducimus ea earum, eligendi fugiat libero molestiae natus necessitatibus
      odio perferendis, porro praesentium quae sequi, ullam? Dolorum eum illo
      labore quis!
    </Text>
  </Flex>
)
allowBodyScroll.storyName = 'allow body scroll'
allowBodyScroll.args = { preventBodyScroll: false, size: CapUIModalSize.Md }

export const keepOnClickOutside: Story<ModalProps> = args => (
  <Modal {...args}>
    {({ hide }) => (
      <>
        <Modal.Header>
          <Heading>Title</Heading>
        </Modal.Header>
        <Modal.Body>Content</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            variantColor="primary"
            variantSize="big"
            onClick={hide}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            variantColor="primary"
            variantSize="big"
            onClick={hide}
          >
            Validate
          </Button>
        </Modal.Footer>
      </>
    )}
  </Modal>
)
keepOnClickOutside.storyName = 'keep on click outside'
keepOnClickOutside.args = { hideOnClickOutside: false }

export const DoNotHideOnEsc: Story<ModalProps> = args => (
  <Modal {...args}>
    {({ hide }) => (
      <>
        <Modal.Header>
          <Heading>Title</Heading>
        </Modal.Header>
        <Modal.Body>Content</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            variantColor="primary"
            variantSize="big"
            onClick={hide}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            variantColor="primary"
            variantSize="big"
            onClick={hide}
          >
            Validate
          </Button>
        </Modal.Footer>
      </>
    )}
  </Modal>
)
DoNotHideOnEsc.storyName = 'do not hide on ESC'
DoNotHideOnEsc.args = { hideOnEsc: false }

const options = [
  { value: 'mail1', label: 'mail1@cap-collectif.com' },
  { value: 'mail2', label: 'mail2@cap-collectif.com' },
  { value: 'mail3', label: 'mail3@cap-collectif.com' },
  { value: 'mail4', label: 'mail4@cap-collectif.com' },
  { value: 'mail5', label: 'mail5@cap-collectif.com' },
  { value: 'mail6', label: 'mail6@cap-collectif.com' },
]

export const WithSelectOverflow: Story<ModalProps> = args => (
  <>
    <Modal {...args}>
      {({ hide }) => (
        <>
          <Modal.Header>
            <Heading>Title</Heading>
          </Modal.Header>
          <Modal.Body>
            <Select options={options} />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              variantColor="primary"
              variantSize="big"
              onClick={hide}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              variantColor="primary"
              variantSize="big"
              onClick={hide}
            >
              Validate
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  </>
)
WithSelectOverflow.storyName = 'With Select Overflow'

export const ControlledModal: Story<ModalProps> = args => {
  const [show, setShow] = React.useState(false)

  return (
    <>
      <Button onClick={() => setShow(true)}>Open Me</Button>

      <Modal {...args} onClose={() => setShow(false)} show={show}>
        <Modal.Header>
          <Heading>Title</Heading>
        </Modal.Header>
        <Modal.Body>Content</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            variantColor="primary"
            variantSize="big"
            onClick={() => setShow(false)}
          >
            Cancel
          </Button>
          <Button variant="primary" variantColor="primary" variantSize="big">
            Validate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
ControlledModal.args = { disclosure: undefined }
ControlledModal.storyName = 'Controlled Modal'

export const SidePanelModal: Story<ModalProps> = args => {
  return (
    <Modal {...args} size={CapUIModalSize.SidePanel}>
      <Modal.Header>
        <Heading>Title</Heading>
      </Modal.Header>
      <Modal.Body>Content</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" variantColor="primary" variantSize="big">
          Cancel
        </Button>
        <Button variant="primary" variantColor="primary" variantSize="big">
          Validate
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
SidePanelModal.storyName = 'Side Panel Modal'
