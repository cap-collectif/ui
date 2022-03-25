import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import { FormGuideline } from '../formGuideline'
import FormLabel from '../formLabel/FormLabel'
import Checkbox, { CheckboxProps } from './Checkbox'

type Args = {
  errorMessage: string
  isInvalid: boolean
  isRequired: boolean
}

const meta: Meta = {
  title: 'Library/Form/Checkbox',
  component: Checkbox,
  args: {
    errorMessage: 'Error info.',
    isRequired: true,
    isInvalid: false,
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<CheckboxProps> = args => (
  <Checkbox {...args} id="checkbox" />
)

export const WithText: Story<CheckboxProps> = args => (
  <Checkbox {...args} id="checkbox">
    Check me
  </Checkbox>
)

export const WithLabel: Story<Args> = args => (
  <FormControl {...args}>
    <FormLabel label="User selection" />
    <Checkbox id="checkbox">Check me</Checkbox>
  </FormControl>
)

export const WithGuideline: Story<Args> = args => (
  <FormControl {...args}>
    <FormLabel label="User selection" />
    <FormGuideline>Guideline</FormGuideline>
    <Checkbox id="checkbox">Check me</Checkbox>
  </FormControl>
)

export const WithAnErrorMessage: Story<Args> = ({ errorMessage, ...args }) => (
  <FormControl {...args}>
    <Checkbox id="checkbox">Check me</Checkbox>
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
    <Checkbox id="checkbox" checked>
      Check me
    </Checkbox>
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
    <Checkbox isDisabled id="checkbox">
      Check me
    </Checkbox>
    <Checkbox isDisabled id="checkbox-checked" checked>
      Try to uncheck me
    </Checkbox>
  </>
)
