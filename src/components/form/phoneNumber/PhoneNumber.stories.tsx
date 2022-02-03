import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapInputSize } from '../enums'
import { FormControl } from '../formControl'
import { FormErrorMessage } from '../formErrorMessage'
import { FormGuideline } from '../formGuideline'
import { FormLabel } from '../formLabel'
import PhoneNumber from './PhoneNumber'
import { COUNTRY_CODES } from './enums'

type Args = {
  errorMessage: string
  placeholder: string
  isInvalid: boolean
  isRequired: boolean
  variantSize: CapInputSize
  uniqueCountry?: COUNTRY_CODES
}

const meta: Meta = {
  title: 'Library/Form/PhoneNumber',
  component: PhoneNumber,
  argTypes: {
    uniqueCountry: { type: 'select', options: Object.keys(COUNTRY_CODES) },
  },
  args: {},
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Default: Story<Args> = args => (
  <FormControl {...args} width="300px">
    <PhoneNumber
      onChange={value => {
        console.log(value)
      }}
    />
  </FormControl>
)

export const WithError: Story<Args> = ({ errorMessage, ...args }) => {
  return (
    <FormControl {...args} isInvalid width="300px">
      <PhoneNumber
        {...args}
        onChange={value => {
          console.log(value)
        }}
      />
      <FormErrorMessage>Error Info</FormErrorMessage>
    </FormControl>
  )
}

export const WithLabel: Story<Args> = ({ errorMessage, ...args }) => {
  return (
    <FormControl {...args} width="300px">
      <FormLabel label="Label" />
      <PhoneNumber
        onChange={value => {
          console.log(value)
        }}
        {...args}
      />
      <FormErrorMessage>Error Info</FormErrorMessage>
    </FormControl>
  )
}
export const WithGuideline: Story<Args> = ({ errorMessage, ...args }) => {
  return (
    <FormControl {...args} width="300px">
      <FormLabel label="Label" />
      <FormGuideline>Guideline</FormGuideline>
      <PhoneNumber
        onChange={value => {
          console.log(value)
        }}
        {...args}
      />
      <FormErrorMessage>Error Info</FormErrorMessage>
    </FormControl>
  )
}
export const UniqueCountry: Story<Args> = ({ errorMessage, ...args }) => {
  return (
    <FormControl {...args} width="300px">
      <FormLabel label="Label" />
      <PhoneNumber
        {...args}
        onChange={value => {
          console.log(value)
        }}
      />
    </FormControl>
  )
}
UniqueCountry.args = {
  uniqueCountry: COUNTRY_CODES.AR,
}
