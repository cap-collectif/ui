import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Text } from '../typography'
import HStack, { HStackProps } from './HStack'

const meta: Meta = {
  title: 'Library/Layout/HStack',
  component: HStack,
  parameters: {
    controls: { disable: true },
    story: { expanded: true },
  },
}

export default meta

export const Default: Story<HStackProps> = () => (
  <HStack spacing={4} p={4} bg="gray.100" align="center">
    <Text>Hello</Text>
    <Text>Everybody</Text>
    <HStack spacing={4} p={4} bg="gray.200" align="center">
      <Text>
        I am <code>{'<HStack/>'}</code>
      </Text>
      <Text>
        (basically, a <code>{'<Flex/>'}</code> which render by default in{' '}
        <em>row</em>)
      </Text>
    </HStack>
  </HStack>
)
