import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import Text from '../typography/Text'
import { Tooltip, TooltipProps } from './'

const meta: Meta<TooltipProps> = {
  title: 'Library/Tooltip',
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
