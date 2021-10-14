import { Meta, Story } from '@storybook/react'
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

export const Default: Story<SkeletonCircleProps> = args => (
  <SkeletonCircle {...args} size="50px" />
)
