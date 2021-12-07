import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapInputSize, FormLabel } from '../form'
import Search from './Search'
import mdx from './Search.mdx'

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
    docs: {
      page: mdx,
    },
  },
}

export default meta

export const Default: Story<Args> = ({ ...args }) => (
  <>
    <FormLabel label="Label" mb={1} />
    <Search onChange={() => {}} inputId="color" {...args} />
  </>
)

export const Loading: Story<Args> = ({ ...args }) => (
  <>
    <FormLabel label="Label" mb={1} />
    <Search
      defaultValue="Budget participatif"
      isLoading
      inputId="color"
      onChange={() => {}}
      {...args}
    />
  </>
)

export const Disabled: Story<Args> = ({ ...args }) => (
  <>
    <FormLabel label="Label" mb={1} />
    <Search inputId="color" onChange={() => {}} {...args} isDisabled />
  </>
)
