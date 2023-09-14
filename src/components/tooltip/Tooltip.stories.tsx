import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Button } from '../button'
import { CapUIModalSize, Modal } from '../modal'
import { Heading } from '../typography'
import Text from '../typography/Text'
import { Tooltip, TooltipProps } from './'
import mdx from './Tooltip.mdx'

const meta: Meta<TooltipProps> = {
  title: 'Library/Tooltip',
  component: Tooltip,
  args: {
    label: 'Hello world',
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

export const Default: Story<TooltipProps> = args => (
  <Tooltip {...args}>
    <Text fontWeight="bold">Hover me</Text>
  </Tooltip>
)

export const WithHTML: Story<TooltipProps> = args => (
  <Tooltip {...args}>
    <Text fontWeight="bold">Hover me</Text>
  </Tooltip>
)

WithHTML.args = {
  ...meta.args,
  label: <Text bg="blue.500">Hello world</Text>,
}
export const WithNestedZIndex: Story<TooltipProps> = args => (
  <Modal
    size={CapUIModalSize.Md}
    disclosure={<Button>Click me</Button>}
    onOpen={() => {
      console.log('OPENED')
    }}
    onClose={() => {
      console.log('CLOSED')
    }}
    ariaLabel="sdf"
  >
    {({ hide }) => (
      <>
        <Modal.Header>
          <Heading>Title</Heading>
        </Modal.Header>
        <Modal.Body>
          <Tooltip {...args}>
            <Text fontWeight="bold" width="24px" style={{whiteSpace:'pre'}} >Hover me</Text>
          </Tooltip>
        </Modal.Body>
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
