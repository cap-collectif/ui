import { Meta, Story } from '@storybook/react'
import React from 'react'

import { InfoMessage, InfoMessageProps } from './'

const meta: Meta<InfoMessageProps> = {
  title: 'Library/InfoMessage',
  component: InfoMessage,
  args: {
    variant: 'info',
  },
  parameters: {},
}

export default meta

export const Default: Story<InfoMessageProps> = args => (
  <InfoMessage {...args}>
    <InfoMessage.Title>Ceci est un titre</InfoMessage.Title>
    <InfoMessage.Content>Ceci est du contenu</InfoMessage.Content>
  </InfoMessage>
)