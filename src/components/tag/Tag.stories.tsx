import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapUIIcon } from '../icon'
import { Tag, TagProps } from './'

const meta: Meta<TagProps> = {
  title: 'Library/Tag',
  component: Tag,
  args: {
    variantColor: 'blue',
    onRemove: undefined,
  },
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: null,
      },
    },
  },
}

export default meta

export const Default: Story<TagProps> = args => (
  <Tag {...args}>
    <Tag.Label>Bonjour</Tag.Label>
  </Tag>
)

export const WithIcon: Story<TagProps> = args => (
  <Tag {...args}>
    <Tag.LeftIcon name={CapUIIcon.CircleCheck} />
    <Tag.Label>Bonjour</Tag.Label>
  </Tag>
)

export const WithCloseButton: Story<TagProps> = args => (
  <Tag {...args}>
    <Tag.LeftIcon name={CapUIIcon.CircleCheck} />
    <Tag.Label>Bonjour</Tag.Label>
  </Tag>
)

WithCloseButton.args = {
  onRemove: () => {},
}

export const WithAvatar: Story<TagProps> = args => (
  <Tag {...args}>
    <Tag.Avatar name="Dan Abramov" src="https://bit.ly/dan-abramov" />
    <Tag.Label>Bonjour</Tag.Label>
  </Tag>
)
