import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Button } from '../button'
import { Flex } from '../layout'
import { Link } from '../link'
import { CapUIModalSize, Modal } from '../modal'
import { Heading } from '../typography'
import Text from '../typography/Text'
import { Tooltip, TooltipProps } from './'

const meta: Meta<TooltipProps> = {
  title: 'Library/TooltipTest',
  component: Tooltip,
  args: {
    label: 'Hello world',
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<TooltipProps> = args => (
  <Flex gap="32px" direction="column" width={'1500px'} alignItems="flex-start">
    <Tooltip {...args}>
      <Text fontWeight="bold">Basic tooltip</Text>
    </Tooltip>
    <Tooltip {...args}>
      <Link href="#">I'm a link tooltip</Link>
    </Tooltip>
    <Tooltip {...args}>
      <Button fontWeight="bold">Button</Button>
    </Tooltip>
    <Tooltip label={<Text bg="blue.500">Hello world</Text>}>
      <Text fontWeight="bold">Tooltip with html</Text>
    </Tooltip>
    <Modal
      size={CapUIModalSize.Md}
      disclosure={<Button>Open modal</Button>}
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
              <Text
                fontWeight="bold"
                width="24px"
                style={{ whiteSpace: 'pre' }}
              >
                Hover me
              </Text>
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
  </Flex>
)
