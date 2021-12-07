import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import Box, { BoxProps } from './Box'
import mdx from './Box.mdx'

const meta: Meta = {
  title: 'Library/Primitives/Box',
  component: Box,
  parameters: {
    controls: { disable: true },
    docs: {
      page: mdx,
    },
  },
}

export default meta

export const Default: Story<BoxProps> = () => (
  <Box p={4} bg={['red.300', 'aqua.200']}>
    <p>Welcome to CapUI</p>
  </Box>
)
