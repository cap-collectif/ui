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
        <Tag {...args} variantColor="infoGray">
          <Tag.Label>Small</Tag.Label>
        </Tag>
      </Box>
      <Box>
        <Tag variantSize="medium" {...args} mt={4} variantColor="infoGray">
          <Tag.Label>Medium</Tag.Label>
        </Tag>
      </Box>
    </Box>
    <Box>
      <Box>
        <Tag {...args} variantColor="success">
          <Tag.Label>Small</Tag.Label>
        </Tag>
      </Box>
      <Box>
        <Tag variantSize="medium" {...args} mt={4} variantColor="success">
          <Tag.Label>Medium</Tag.Label>
        </Tag>
      </Box>
    </Box>
    <Box>
      <Box>
        <Tag {...args} variantColor="success">
          <Tag.Label>Small</Tag.Label>
        </Tag>
      </Box>
      <Box>
        <Tag variantSize="medium" {...args} mt={4} variantColor="success">
          <Tag.Label>Medium</Tag.Label>
        </Tag>
      </Box>
    </Box>
    <Box>
      <Box>
        <Tag {...args} variantColor="warning">
          <Tag.Label>Small</Tag.Label>
        </Tag>
      </Box>
      <Box>
        <Tag variantSize="medium" {...args} mt={4} variantColor="warning">
          <Tag.Label>Medium</Tag.Label>
        </Tag>
      </Box>
    </Box>
    <Box>
      <Box>
        <Tag {...args} variantColor="danger">
          <Tag.Label>Small</Tag.Label>
        </Tag>
      </Box>
      <Box>
        <Tag variantSize="medium" {...args} mt={4} variantColor="danger">
          <Tag.Label>Medium</Tag.Label>
        </Tag>
      </Box>
    </Box>
    <Box>
      <Box>
        <Tag {...args} transparent>
          <Tag.Label>Small</Tag.Label>
        </Tag>
      </Box>
      <Box>
        <Tag variantSize="medium" {...args} mt={4} transparent>
          <Tag.Label>Medium</Tag.Label>
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

export const asButton: Story<TagProps> = args => (
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

export const Grouped: Story<TagProps> = args => (
  <Flex>
    <Tag
      {...args}
      borderTopRightRadius={'0'}
      borderBottomRightRadius={'0'}
      transparent
    >
      <Tag.LeftIcon name={CapUIIcon.List} />
    </Tag>
    <Tag {...args} borderTopLeftRadius={'0'} borderBottomLeftRadius={'0'}>
      <Tag.LeftIcon name={CapUIIcon.Folder} />
    </Tag>
  </Flex>
)
