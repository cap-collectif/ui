import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { CapUIIcon, CapUIIconSize, Icon } from '../icon'
import type { VisuallyHiddenProps } from './'
import { VisuallyHidden } from './'

const meta: Meta<VisuallyHiddenProps> = {
  title: 'Library/VisuallyHidden',
  component: VisuallyHidden,
  args: {},
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta

export const Default: StoryFn<VisuallyHiddenProps> = args => (
  <button type="button">
    <VisuallyHidden {...args}>I'm hidden</VisuallyHidden>
    <Icon name={CapUIIcon.PinO} size={CapUIIconSize.Xxl} />
  </button>
)
