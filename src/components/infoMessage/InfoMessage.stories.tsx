import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Text } from '../typography'
import { InfoMessage, InfoMessageProps } from './'
import mdx from './InfoMessage.mdx'

const meta: Meta<InfoMessageProps> = {
  title: 'Library/InfoMessage',
  component: InfoMessage,
  args: {
    variant: 'info',
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
}

export default meta

export const Default: Story<InfoMessageProps> = args => (
  <InfoMessage {...args}>
    <InfoMessage.Title>Ceci est un titre</InfoMessage.Title>
    <InfoMessage.Content>
      <Text>Hello</Text>
      <Text>World</Text>
    </InfoMessage.Content>
  </InfoMessage>
)

export const WithIcon: Story<InfoMessageProps> = args => (
  <InfoMessage {...args}>
    <InfoMessage.Title withIcon>Ceci est un titre</InfoMessage.Title>
  </InfoMessage>
)
