import { Meta, Story } from '@storybook/react'
import * as React from 'react'

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
