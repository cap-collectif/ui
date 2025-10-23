import { Meta, Story } from '@storybook/react'

import { Flex } from '../layout/Flex'
import { Skeleton, SkeletonProps } from './'

const meta: Meta<SkeletonProps> = {
  title: 'Library/Skeleton',
  component: Skeleton,
  args: {
    isLoaded: false,
    placeholder: (
      <Flex direction="row" spacing={4}>
        <Skeleton.Circle size={10} />

        <Flex direction="column" spacing={2} flex={1}>
          <Skeleton.Text size="lg" />
          <Skeleton.Text size="md" />
          <Skeleton.Text size="sm" />
        </Flex>
      </Flex>
    ),
  },
  argTypes: {
    placeholder: {
      control: { disable: true },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<SkeletonProps> = args => (
  <Skeleton {...args}>Hi, I am the child</Skeleton>
)
