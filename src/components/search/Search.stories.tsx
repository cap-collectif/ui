import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Button } from '../button'
import { CapInputSize, FormControl, FormLabel } from '../form'
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
  argTypes: { variantSize: { control: 'select', options: ['sm', 'md'] } },
  parameters: {
    controls: { expanded: true },
    docs: {
      page: mdx,
    },
  },
}

const colourOptions = [
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
]

export default meta

export const Default: Story<Args> = ({ ...args }) => (
  <>
    <FormLabel label="Label" mb={1} />
    <Search
      onChange={() => {}}
      inputId="color"
      {...args}
      inputTitle="titre de la recherche"
    />
  </>
)

export const Loading: Story<Args> = ({ ...args }) => (
  <>
    <FormLabel label="Label" mb={1} />
    <Search
      value="Budget participatif"
      isLoading
      inputId="color"
      onChange={() => {}}
      {...args}
    />
  </>
)

export const Disabled: Story<Args> = ({ ...args }) => (
  <>
    <FormControl isDisabled>
      <FormLabel label="Label" mb={1} />
      <Search inputId="color" onChange={() => {}} {...args} />
    </FormControl>
  </>
)

export const Controlled: Story<Args> = () => {
  const [value, setValue] = React.useState('')

  return (
    <>
      <FormLabel label="Label" mb={1} />
      <Search inputId="color" onChange={setValue} value={value} />
      <Button mt={4} onClick={() => setValue('')}>
        Controlled Clear
      </Button>
    </>
  )
}

const promiseOptions = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(colourOptions)
    }, 1000)
  })

export const WithSuggestions: Story<Args> = ({ ...args }) => (
  <>
    <FormLabel label="Label" mb={1} />
    <Search
      onChange={() => {}}
      inputId="color"
      loadOptions={promiseOptions}
      defaultOptions
      cacheOptions
      {...args}
    />
  </>
)

export const AsField: Story<Args> = ({ ...args }) => (
  <FormControl>
    <FormLabel label="Label" mb={1} />
    <Search
      {...args}
      inputId="color"
      loadOptions={promiseOptions}
      defaultOptions
      cacheOptions
      filterOption={(option, input) => {
        return option.label.toLowerCase().includes(input.toLowerCase())
      }}
    />
  </FormControl>
)
