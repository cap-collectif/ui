import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Divider, DividerProps } from './'

const meta: Meta<DividerProps> = {
  title: 'Library/Divider',
  component: Divider,
  args: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<DividerProps> = args => (
  <Divider {...args}>Text</Divider>
)
