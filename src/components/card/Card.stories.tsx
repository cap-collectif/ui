import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Text } from '../typography'
import { Card, CardProps } from './'

const meta: Meta<CardProps> = {
  title: 'Library/Card',
  component: Card,
  args: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<CardProps> = args => (
  <Card {...args}>
    <Text>Card</Text>
  </Card>
)
