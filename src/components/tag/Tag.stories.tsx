import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapUIIcon } from '../icon'
import { Tag, TagProps } from './'
import mdx from './Tag.mdx'

const meta: Meta<TagProps> = {
  title: 'Library/Tag',
  component: Tag,
  args: {
    variantColor: 'info',
    onRemove: undefined,
  },
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: null,
      },
    },
    docs: {
      page: mdx,
    },
  },
}

export default meta

export const Default: Story<TagProps> = args => (
  <Tag {...args}>
    <Tag.Label>Bonjour</Tag.Label>
  </Tag>
)

export const Badge: Story<TagProps> = args => (
  <Tag variantType="badge" {...args}>
    <Tag.Label>Bonjour</Tag.Label>
  </Tag>
)

export const WithIcon: Story<TagProps> = args => (
  <Tag {...args}>
    <Tag.LeftIcon name={CapUIIcon.Check} />
    <Tag.Label>Bonjour</Tag.Label>
  </Tag>
)

export const WithCloseButton: Story<TagProps> = args => (
  <Tag {...args}>
    <Tag.LeftIcon name={CapUIIcon.Check} />
    <Tag.Label>Bonjour</Tag.Label>
  </Tag>
)

WithCloseButton.args = {
  onRemove: () => {
    console.log('Remove button clicked')
  },
}

export const WithAvatar: Story<TagProps> = args => (
  <Tag {...args}>
    <Tag.Avatar name="Dan Abramov" src="https://bit.ly/dan-abramov" />
    <Tag.Label>Bonjour</Tag.Label>
  </Tag>
)
