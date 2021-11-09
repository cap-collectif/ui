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

export const Default: Story<Args> = ({ ...args }) => (
  <Search onChange={() => {}} inputId="color" {...args} />
)

export const Loading: Story<Args> = ({ ...args }) => (
  <Search
    defaultValue="Budget participatif"
    isLoading
    inputId="color"
    onChange={() => {}}
    {...args}
  />
)

export const Disabled: Story<Args> = ({ ...args }) => (
  <Search inputId="color" onChange={() => {}} {...args} isDisabled />
)
