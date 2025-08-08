import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import Dropdown, { DropDownProps } from './Dropdown'

const options = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver but I am very loooooooong overflow ' },
]
const meta: Meta = {
  title: 'Library/Dropdown',
  component: Dropdown,
  args: {
    onSelect: (option: any) => {
      console.log(option)
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta
export const Default: Story<DropDownProps> = args => (
  <Dropdown {...args}>
    {options.map(option => (
      <Dropdown.Item key={option.value}>{option.label}</Dropdown.Item>
    ))}
  </Dropdown>
)
