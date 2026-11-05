import { Meta, StoryFn } from '@storybook/react-webpack5'
import React from 'react'

import { SkeletonCircle, SkeletonCircleProps } from './SkeletonCircle'

const meta: Meta<SkeletonCircleProps> = {
  title: 'Library/Skeleton/Circle',
  component: SkeletonCircle,
  args: {
    animate: true,
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: StoryFn<SkeletonCircleProps> = args => (
  <SkeletonCircle {...args} size="50px" />
)
