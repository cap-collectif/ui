import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Icon, CapUIIcon } from '../../icon'
import { Flex } from '../../layout/Flex'
import { Text } from '../../typography/Text'
import { CapInputSize } from '../enums'
import Search from './Search'

type Args = {
  errorMessage: string
  placeholder: string
  isInvalid: boolean
  isDisabled: boolean
  isRequired: boolean
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

const promiseOptions = (inputValue: string) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(
        colourOptions.filter(i =>
          i.label.toLowerCase().includes(inputValue.toLowerCase()),
        ),
      )
    }, 1000)
  })

export const Default: Story<Args> = ({
  errorMessage,
  placeholder,
  ...args
}) => (
  <Search
    placeholder={placeholder}
    //loadOptions={promiseOptions}
    // defaultOptions
    // cacheOptions
    inputId="color"
  />
)
