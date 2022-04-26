import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapInputSize } from '../../enums'
import DateInput, { DateInputProps, DateInputValueType } from './DateInput';
import FormErrorMessage from '../../formErrorMessage/FormErrorMessage';
import { FormControl } from '../../formControl';

const moment = require('moment')
require('moment/dist/locale/fr')
moment.locale('fr')

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
  },
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Default: Story<DateInputProps> = args => {
  const [value, onChange] = React.useState<DateInputValueType>(null)
  return <DateInput {...args} value={value} onChange={onChange} />
}

export const Disabled: Story<DateInputProps> = args => {
  const [value, onChange] = React.useState<DateInputValueType>(null)
  return <DateInput {...args} value={value} onChange={onChange} />
}
Disabled.args = {
  isDisabled: true,
}

export const WithError: Story<DateInputProps> = ({
  errorMessage,
  onChange: storybookOnChange,
  value: storybookValue,
  ...args
}) => {
  const [value, onChange] = React.useState<DateInputValueType>(null)
  return (
    <FormControl {...args}>
      <DateInput {...args} value={value} onChange={onChange} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}
WithError.args = {
  isInvalid: true,
  errorMessage: 'Error info.',
}
