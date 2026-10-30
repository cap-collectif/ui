import { Meta, StoryFn } from '@storybook/react-webpack5'

import Box, { BoxProps } from './Box'

const meta: Meta = {
  title: 'Library/Primitives/Box',
  component: Box,
  parameters: {
    controls: { disable: true },
  },
}

export default meta

export const Default: StoryFn<BoxProps> = () => (
  <Box p={4} bg={['red.300', 'aqua.200']}>
    <p>Welcome to CapUI</p>
  </Box>
)
