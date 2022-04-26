import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapInputSize } from '../../enums'
import DateInput, { DateInputProps } from './DateInput'

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
    displayFormat: 'DD/MM/YYYY',
  },
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Default: Story<DateInputProps> = args => {
  const [value, onChange] = React.useState<any>(null)
  return <DateInput {...args} value={value} onChange={onChange} />
}
