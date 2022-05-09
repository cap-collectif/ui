import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CodeInputProps } from '../form'
import Dropdown from './Dropdown'

const meta: Meta = {
  title: 'Library/Dropdown',
  component: Dropdown,
  args: {
    options: [
      { value: 'ocean', label: 'Ocean' },
      { value: 'blue', label: 'Blue' },
      { value: 'purple', label: 'Purple' },
      { value: 'red', label: 'Red' },
      { value: 'orange', label: 'Orange' },
      { value: 'yellow', label: 'Yellow' },
      { value: 'green', label: 'Green' },
      { value: 'forest', label: 'Forest' },
      { value: 'slate', label: 'Slate' },
      { value: 'silver', label: 'Silver' },
    ],
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta
export const Default: Story<CodeInputProps> = args => <Dropdown {...args} />
