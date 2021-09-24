import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Popover, PopoverProps } from './'

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
  },
}

export default meta

export const Default: Story<PopoverProps> = args => (
  <Popover {...args} disclosure={<button type="button">Open popover</button>}>
    <Popover.Header>This is the header</Popover.Header>
    <Popover.Body>This is the content</Popover.Body>
    <Popover.Footer>This is the footer</Popover.Footer>
  </Popover>
)
