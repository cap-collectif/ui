import { Meta, Story } from '@storybook/react'
import React from 'react'

import Box, { BoxProps } from './Box'

const meta: Meta = {
  title: 'Library/Primitives/Box',
  component: Box,
  parameters: {
    controls: { disable: true },
  },
}

export default meta

export const Default: Story<BoxProps> = () => (
  <Box p={4} bg={['red.300', 'aqua.200']}>
    <p>Welcome to CapUI</p>
  </Box>
)
