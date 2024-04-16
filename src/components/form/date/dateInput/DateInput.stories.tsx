import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapInputSize } from '../../enums'
import { FormControl } from '../../formControl'
import FormErrorMessage from '../../formErrorMessage/FormErrorMessage'
import { InputProps } from '../../input'
import DateInput from './DateInput'

const moment = require('moment')
require('moment/dist/locale/fr')
moment.locale('fr')

type Args = {
  errorMessage: string
  placeholder: string
  isInvalid: boolean
  isRequired: boolean
  variantSize: CapInputSize
}

const meta: Meta = {
  title: 'Library/Form/DateInput',
  component: DateInput,
  argTypes: {
    variantSize: { type: 'select', options: Object.values(CapInputSize) },
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

export const Default: Story<InputProps> = args => {
  return <DateInput {...args} />
}

export const Disabled: Story<InputProps> = args => {
  return <DateInput {...args} />
}
Disabled.args = {
  isDisabled: true,
}

export const WithError: Story<Args> = ({ errorMessage, ...args }) => {
  return (
    <FormControl {...args}>
      <DateInput {...args} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}
WithError.args = {
  isInvalid: true,
  errorMessage: 'Error info.',
}
