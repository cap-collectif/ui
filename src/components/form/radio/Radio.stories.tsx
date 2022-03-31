import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import { FormGuideline } from '../formGuideline'
import FormLabel from '../formLabel/FormLabel'
import Radio, { RadioProps } from './Radio'
import mdx from './Radio.mdx'

type Args = {
  errorMessage: string
  isInvalid: boolean
  isRequired: boolean
}

const meta: Meta = {
  title: 'Library/Form/Radio',
  component: Radio,
  args: {
    errorMessage: 'Error info.',
    isRequired: true,
    isInvalid: false,
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      page: mdx,
    },
  },
}

export default meta

export const Default: Story<RadioProps> = args => (
  <Radio {...args} id="radio" />
)

export const WithText: Story<RadioProps> = args => (
  <Radio {...args} id="radio">
    Check me
  </Radio>
)

export const WithLabel: Story<Args> = args => (
  <FormControl {...args}>
    <FormLabel label="User selection" />
    <Radio id="radio">Check me</Radio>
  </FormControl>
)

export const WithGuideline: Story<Args> = args => (
  <FormControl {...args}>
    <FormLabel label="User selection" />
    <FormGuideline>Guideline</FormGuideline>
    <Radio id="radio">Check me</Radio>
  </FormControl>
)

export const WithAnErrorMessage: Story<Args> = ({ errorMessage, ...args }) => (
  <FormControl {...args}>
    <Radio id="radio">Check me</Radio>
    <FormErrorMessage ml={7} mt={0}>
      {errorMessage}
    </FormErrorMessage>
  </FormControl>
)

WithAnErrorMessage.args = {
  isInvalid: true,
}

export const WithAnErrorMessageChecked: Story<Args> = ({
  errorMessage,
  ...args
}) => (
  <FormControl {...args}>
    <Radio id="radio" checked>
      Check me
    </Radio>
    <FormErrorMessage ml={7} mt={0}>
      {errorMessage}
    </FormErrorMessage>
  </FormControl>
)

WithAnErrorMessageChecked.args = {
  isInvalid: true,
}

export const Disabled: Story<Args> = () => (
  <>
    <Radio isDisabled id="radio">
      Check me
    </Radio>
    <Radio isDisabled id="radio-checked" checked>
      Try to uncheck me
    </Radio>
  </>
)
