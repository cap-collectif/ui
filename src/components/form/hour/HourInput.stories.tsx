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
  const [value, onChange] = React.useState<string | null>(null)
  return <HourInput {...args} value={value} onChange={onChange} />
}

export const Disabled: Story<Args> = args => {
  const [value, onChange] = React.useState<string | null>(null)
  return <HourInput {...args} value={value} onChange={onChange} />
}
Disabled.args = {
  isDisabled: true,
}

export const WithError: Story<Args> = ({ errorMessage, ...args }) => {
  const [value, onChange] = React.useState<string | null>(null)
  return (
    <FormControl {...args}>
      <HourInput {...args} value={value} onChange={onChange} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}
WithError.args = {
  isInvalid: true,
  errorMessage: 'Error info.',
}
