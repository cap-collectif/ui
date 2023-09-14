import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Flex } from '../layout'
import { Text } from '../typography'
import { InfoMessage, InfoMessageProps } from './'
import mdx from './InfoMessage.mdx'
import { Tag } from '../tag';

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

export const WithHTMLInTitle: Story<InfoMessageProps> = args => (
  <InfoMessage {...args}>
    <InfoMessage.Title gap={3}>
      <Tag variantColor="blue">
        <Tag.Label>Bonjour</Tag.Label>
      </Tag>
      <Tag variantColor="red">
        <Tag.Label>CouCou</Tag.Label>
      </Tag>
    </InfoMessage.Title>
    <InfoMessage.Content>
      <Text>Hello</Text>
      <Text>World</Text>
    </InfoMessage.Content>
  </InfoMessage>
)
