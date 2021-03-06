import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Text } from '../typography'
import VStack, { VStackProps } from './VStack'

const meta: Meta = {
  title: 'Library/Layout/VStack',
  component: VStack,
  parameters: {
    controls: { disable: true },
  },
}

export default meta

export const Default: Story<VStackProps> = () => (
  <VStack spacing={4} p={4} bg="gray.100" align="center">
    <Text>Hello</Text>
    <Text>Everybody</Text>
    <VStack spacing={4} p={4} bg="gray.200" align="center">
      <Text>
        I am <code>{'<VStack/>'}</code>
      </Text>
      <Text>
        (basically, a <code>{'<Flex/>'}</code> which render by default in{' '}
        <em>column</em>)
      </Text>
    </VStack>
  </VStack>
)
