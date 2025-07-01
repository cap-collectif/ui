import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { largeThumbnail } from '../../assets/images'
import { Card, CardCover, CardProps } from './'

const meta: Meta<CardProps> = {
  title: 'Library/Card',
  component: Card,
  args: {},
  parameters: {
    controls: { expanded: true },
    backgrounds: { default: 'light' },
  },
}

export default meta

export const Default: Story<CardProps> = args => (
  <Card {...args}>
    <CardCover src={largeThumbnail}>Card</CardCover>
  </Card>
)
