import { Meta, Story } from '@storybook/react'
import React from 'react'

import { CapUIIconSize } from '../icon'
import { Flex } from '../layout'
import type { SpinnerProps } from './'
import { Spinner } from './'

const sizes = Object.values(CapUIIconSize)

const meta: Meta<SpinnerProps> = {
  title: 'Library/Spinner',
  component: Spinner,
  args: {
    color: 'black',
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<SpinnerProps> = ({ color }) => (
  <Flex align="center" gap={2} wrap="wrap">
    {sizes.map((size, i) => (
      <Spinner size={size} key={i} color={color} />
    ))}
  </Flex>
)

Default.argTypes = {
  size: {
    controls: { disable: true },    table: { disable: true },
  },
}

export const WithinAContainer: Story<SpinnerProps> = args => (
  <Flex
    width={100}
    height={100}
    align="center"
    justify="center"
    borderRadius="card"
    borderStyle="solid"
    borderColor="gray.150"
    bg="gray.100"
    borderWidth="1px"
  >
    <Spinner {...args} />
  </Flex>
)

WithinAContainer.args = {
  size: CapUIIconSize.Lg,
}
