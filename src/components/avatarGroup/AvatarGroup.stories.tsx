import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import Avatar from '../avatar/Avatar'
import AvatarGroup, { AvatarGroupProps } from './AvatarGroup'

const meta: Meta = {
  title: 'Library/AvatarGroup',
  component: AvatarGroup,
  args: {
    max: 5,
  },
  parameters: {
    controls: { expanded: true },  },
}

export default meta

export const Default: Story<AvatarGroupProps> = args => (
  <AvatarGroup {...args}>
    <Avatar
      name="Mikasa Estucasa"
      src="https://risibank.fr/cache/stickers/d1261/126102-full.png"
    />
    <Avatar name="Dan Abramov" src="https://bit.ly/dan-abramov" />
    <Avatar name="John Mark" />
    <Avatar name="Dan Abramov" src="https://bit.ly/dan-abramov" />
    <Avatar name="John Cena" />
    <Avatar name="Dan Abramov" bg="yellow.700" />
    <Avatar name="Omar Jbara" />
    <Avatar name="John Doe" />
  </AvatarGroup>
)
