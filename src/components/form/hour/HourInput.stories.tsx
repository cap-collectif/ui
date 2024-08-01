import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapInputSize } from '../enums'
import { FormControl } from '../formControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import HourInput from './HourInput'

type Args = {
  placeholder: string
  isDisabled: boolean
  isInvalid: boolean
  variantSize: CapInputSize
  errorMessage: string
}

const meta: Meta = {
  title: 'Library/Form/HourInput',
  component: HourInput,
  argTypes: {
    variantSize: { options: Object.values(CapInputSize) as string[] },
    onChange: {
      action: 'clicked',
      description: '(value: Moment | null) => void',
    },
  },
  args: {
    isRequired: false,
    isInvalid: false,
    isDisabled: false,
    variantSize: CapInputSize.Sm,
    value: null,
    isOutsideRange: true,
  },
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Default: Story<Args> = args => {
  return <HourInput {...args} />
}

export const Disabled: Story<Args> = args => {
  return <HourInput {...args} />
}
Disabled.args = {
  isDisabled: true,
}

export const WithError: Story<Args> = ({ errorMessage, ...args }) => {
  return (
    <FormControl {...args}>
      <HourInput {...args} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}
WithError.args = {
  isInvalid: true,
  errorMessage: 'Error info.',
}
