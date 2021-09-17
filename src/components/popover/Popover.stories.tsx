import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Popover, PopoverProps } from './'

const meta: Meta<PopoverProps> = {
  title: 'Library/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<PopoverProps> = args => (
  <Popover {...args} disclosure={<button type="button">Click here</button>}>
    <Popover.Header>Ceci est un titre</Popover.Header>
    <Popover.Body>Ceci est est un body</Popover.Body>
    <Popover.Footer>Ceci est un footer</Popover.Footer>
  </Popover>
)
