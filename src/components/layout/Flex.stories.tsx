import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Text } from '../typography'
import Flex, { FlexProps } from './Flex'

const meta: Meta = {
  title: 'Library/Layout/Flex',
  component: Flex,
  parameters: {
    controls: { disable: true },
  },
}

export default meta

export const Default: Story<FlexProps> = () => (
  <Flex spacing={4} p={4} bg="gray.100" align="center">
    <Text>Hello</Text>
    <Text>Everybody</Text>
    <Flex spacing={4} p={4} bg="gray.200" direction="column">
      <Text>I am Cap</Text>
      <Text>I am Ucine</Text>
    </Flex>
  </Flex>
)
