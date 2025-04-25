import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Flex } from '../layout'
import Avatar, { AvatarProps } from './Avatar'

const meta: Meta = {
  title: 'Library/Avatar',
  component: Avatar,
  args: {
    name: 'Dan Abramov',
    src: 'https://bit.ly/dan-abramov',
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<AvatarProps> = args => <Avatar {...args} />

export const AllSizes: Story = args => (
  <Flex>
    <Avatar {...args.xs} />
    <Avatar {...args.sm} />
    <Avatar {...args.md} />
    <Avatar {...args.lg} />
    <Avatar {...args.xl} />
  </Flex>
)
AllSizes.args = {
  xs: {
    name: 'Mikasa Ackerman',
    src: 'https://risibank.fr/cache/stickers/d1261/126102-full.png',
    size: 'xs',
  },
  sm: {
    name: 'Mikasa Ackerman',
    src: 'https://risibank.fr/cache/stickers/d1261/126102-full.png',
    size: 'sm',
  },
  md: {
    name: 'Mikasa Ackerman',
    src: 'https://risibank.fr/cache/stickers/d1261/126102-full.png',
    size: 'md',
  },
  lg: {
    name: 'Mikasa Ackerman',
    src: 'https://risibank.fr/cache/stickers/d1261/126102-full.png',
    size: 'lg',
  },
  xl: {
    name: 'Mikasa Ackerman',
    src: 'https://risibank.fr/cache/stickers/d1261/126102-full.png',
    size: 'xl',
  },
}
