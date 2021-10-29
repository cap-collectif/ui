import { Meta, Story } from '@storybook/react'
import { Moment } from 'moment'
import * as React from 'react'

import { Box } from '../../box/Box'
import { CapInputSize } from '../enums'
import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import FormLabel from '../formLabel/FormLabel'
import DateRange, { DateRangeProps } from './dateRange'

const meta: Meta = {
  title: 'Library/Form/DateRange',
  component: DateRange,
  argTypes: {
    variantSize: { type: 'select', options: CapInputSize },
    onChange: { action: 'clicked' },
  },
  args: {
    errorMessage: 'Error info.',
    isRequired: true,
    isInvalid: false,
    isDisabled: false,
    variantSize: CapInputSize.Sm,
    value: { startDate: null, endDate: null },
  },
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Default: Story<DateRangeProps> = () => {
  const [value, onChange] = React.useState<{
    startDate: Moment | null
    endDate: Moment | null
  }>({ startDate: null, endDate: null })
  return (
    <DateRange
      value={value}
      onChange={elem =>
        onChange({ startDate: elem.startDate, endDate: elem.endDate })
      }
    />
  )
}

export const WithAnErrorMessage: Story<DateRangeProps> = ({
  errorMessage,
  onChange,
  value,
  ...args
}) => (
  <FormControl {...args}>
    <DateRange onChange={onChange} value={value} />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

WithAnErrorMessage.args = {
  isInvalid: true,
}

export const WithLabel: Story<DateRangeProps> = ({
  errorMessage,
  variantSize,
  onChange,
  value,
  ...args
}) => (
  <FormControl {...args}>
    <FormLabel htmlFor="Date" label="Label">
      {!args.isRequired && (
        <Box as="span" color="gray.500">
          facultatif
        </Box>
      )}
    </FormLabel>
    <DateRange id="Date" onChange={onChange} value={value} />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)
