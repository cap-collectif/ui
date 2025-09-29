import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Box } from '../box'
import { CapUIIcon } from '../icon'
import { Flex } from '../layout'
import { Tag, TagProps } from './'

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
  },
}

export default meta

export const Default: Story<TagProps> = args => (
  <Flex gap={4}>
    <Box>
      <Box>
        <Tag {...args}>
          <Tag.Label>Small</Tag.Label>
        </Tag>
      </Box>
      <Box>
        <Tag variantSize="medium" {...args} mt={4}>
          <Tag.Label>Medium</Tag.Label>
        </Tag>
      </Box>
    </Box>
    <Box>
      <Box>
        <Tag as={'button'} {...args} onClick={() => alert('Une alert')}>
          <Tag.Label>Small button</Tag.Label>
        </Tag>
      </Box>
      <Box>
        <Tag
          as={'button'}
          variantSize="medium"
          {...args}
          mt={4}
          onClick={() => alert('Une alert')}
        >
          <Tag.Label>Medium button</Tag.Label>
        </Tag>
      </Box>
    </Box>
  </Flex>
)

export const Badge: Story<TagProps> = args => (
  <>
    <Box>
      <Tag variantType="badge" {...args}>
        <Tag.Label>Bonjour</Tag.Label>
      </Tag>
    </Box>
    <Box>
      <Tag variantType="badge" variantSize="medium" mt={4} {...args}>
        <Tag.Label>Bonjour</Tag.Label>
      </Tag>
    </Box>
  </>
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
