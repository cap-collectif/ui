import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Button } from '../button'
import { CapInputSize, FormLabel } from '../form'
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
  <>
    <FormLabel label="Label" mb={1} />
    <Search onChange={() => {}} inputId="color" {...args} />
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
    <FormLabel label="Label" mb={1} />
    <Search inputId="color" onChange={() => {}} {...args} isDisabled />
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
