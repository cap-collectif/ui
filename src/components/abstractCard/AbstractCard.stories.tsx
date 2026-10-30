import { Meta, StoryFn } from '@storybook/react'
import * as React from 'react'

import { Text } from '../typography'
import { AbstractCard, AbstractCardProps } from './'

const meta: Meta<AbstractCardProps> = {
  title: 'Library/AbstractCard',
  component: AbstractCard,
  args: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: StoryFn<AbstractCardProps> = args => (
  <AbstractCard {...args}>
    <Text>Card</Text>
  </AbstractCard>
)
