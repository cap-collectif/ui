import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Popover, PopoverProps } from './'
import mdx from './Popover.mdx'
import { Flex } from '../layout'

const meta: Meta<PopoverProps> = {
  title: 'Library/Popover',
  component: Popover,
  argTypes: {
    disclosure: {
      control: { disable: true },
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

export const Default: Story<PopoverProps> = args => (
  <Popover {...args} disclosure={<button type="button">Open popover</button>}>
    <Popover.Header>Lorem ipsum</Popover.Header>
    <Popover.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
      facilisis ligula non nibh egestas efficitur.
    </Popover.Body>
  </Popover>
)

export const WithFooter: Story<PopoverProps> = args => (
  <Popover {...args} disclosure={<button type="button">Open popover</button>}>
    <Popover.Header>Lorem ipsum</Popover.Header>
    <Popover.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
      facilisis ligula non nibh egestas efficitur.
    </Popover.Body>
    <Popover.Footer>Lorem ipsum</Popover.Footer>
  </Popover>
)
export const WithBodyScroll: Story<PopoverProps> = args => (
  <Flex height={800}>
    <Popover
      options={{ modal: true }}
      popoverProps={{ preventBodyScroll: false }}
      {...args}
      disclosure={<button type="button">Open popover</button>}
    >
      <Popover.Header>Lorem ipsum</Popover.Header>
      <Popover.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        facilisis ligula non nibh egestas efficitur.
      </Popover.Body>
      <Popover.Footer>Lorem ipsum</Popover.Footer>
    </Popover>
  </Flex>
)
