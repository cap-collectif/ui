import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapUIFontWeight } from '../../styles'
import { Flex } from '../layout/Flex'
import Heading, { HeadingProps } from './Heading'
import mdx from './Heading.mdx'

const meta: Meta = {
  title: 'Library/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      page: mdx,
    },
  },
}

export default meta

export const Default: Story<HeadingProps> = args => (
  <Flex direction="column">
    <Heading {...args} as="h1">
      Title 1
    </Heading>
    <Heading {...args} as="h2">
      Title 2
    </Heading>
    <Heading {...args} as="h3">
      Title 3
    </Heading>
    <Heading {...args} as="h4">
      Title 4
    </Heading>
    <Heading {...args} as="h4" fontWeight={CapUIFontWeight.Bold}>
      Title 4 bold
    </Heading>
    <Heading {...args} as="h5">
      Title 5
    </Heading>
    <Heading {...args} as="h5" fontWeight={CapUIFontWeight.Bold}>
      Title 4 bold
    </Heading>
  </Flex>
)
