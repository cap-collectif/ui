import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Flex } from '../layout/Flex'
import Heading, { HeadingProps } from './Heading'

const meta: Meta = {
  title: 'Library/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<HeadingProps> = args => (
  <Flex direction="column">
    <Heading {...args} as="h1">
      Hello world
    </Heading>
    <Heading {...args} as="h2">
      Hello world
    </Heading>
    <Heading {...args} as="h3">
      Hello world
    </Heading>
    <Heading {...args} as="h4">
      Hello world
    </Heading>
    <Heading {...args} as="h5">
      Hello world
    </Heading>
  </Flex>
)
