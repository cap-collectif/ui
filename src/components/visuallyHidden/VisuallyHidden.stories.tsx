import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Box } from '../box'
import { Text } from '../typography'
import type { VisuallyHiddenProps } from './'
import { VisuallyHidden } from './'

const meta: Meta<VisuallyHiddenProps> = {
  title: 'Library/Spinner',
  component: VisuallyHidden,
  args: {
    color: 'black',
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<VisuallyHiddenProps> = args => (
  <Box>
    <Text>There is some text only readable by a screen reader</Text>

    <VisuallyHidden {...args} tabIndex={0}>
      Ceci est du contenu caché
    </VisuallyHidden>
  </Box>
)
