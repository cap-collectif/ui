import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapUIFontWeight } from '../../styles'
import { Text } from '../typography'
import { Divider, DividerProps } from './'

const meta: Meta<DividerProps> = {
  title: 'Library/Divider',
  component: Divider,
  args: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<DividerProps> = args => (
  <Divider {...args}>
    <Text fontWeight={CapUIFontWeight.Bold} color={'neutral-gray.600'}>
      TEXT
    </Text>
  </Divider>
)
