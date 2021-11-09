import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapInputSize } from '../form'
import Search from './Search'

type Args = {
  placeholder: string
  isDisabled: boolean
  variantSize: CapInputSize
}

const meta: Meta = {
  title: 'Library/Search',
  component: Search,
  args: {
    placeholder: 'Placeholder...',
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<Args> = ({ placeholder, ...args }) => (
  <Search
    placeholder={placeholder}
    onChange={() => {}}
    inputId="color"
    {...args}
  />
)

export const Loading: Story<Args> = ({ placeholder, ...args }) => (
  <Search
    defaultValue="Chargement"
    isLoading
    inputId="color"
    onChange={() => {}}
    {...args}
  />
)
