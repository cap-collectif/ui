import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Box } from '../../box'
import { SkeletonText, SkeletonTextProps } from './SkeletonText'

const meta: Meta<SkeletonTextProps> = {
  title: 'Library/Skeleton/Text',
  component: SkeletonText,
  args: {
    animate: true,
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<SkeletonTextProps> = args => (
  <Box width="100%">
    <SkeletonText {...args} height="50px" />
  </Box>
)
