import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Button } from '../button'
import { Heading } from '../typography'
import { CapUIModalSize, Modal, ModalProps } from './'

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
  },
}

export default meta

export const Default: Story<ModalProps> = args => (
  <Modal {...args}>
    {({ hide }) => (
      <>
        <Modal.Header>
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
