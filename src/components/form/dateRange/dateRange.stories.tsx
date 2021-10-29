import { Meta, Story } from '@storybook/react'
import moment from 'moment/moment'
import * as React from 'react'

import { Box } from '../../box/Box'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { Tooltip } from '../../tooltip/Tooltip'
import { CapInputSize } from '../enums'
import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import { FormGuideline } from '../formGuideline'
import FormLabel from '../formLabel/FormLabel'
import DateRange, { DateRangeProps } from './dateRange'
import type { DateRangeValueType } from './dateRange'

const meta: Meta = {
  title: 'Library/Form/DateRange',
  component: DateRange,
  argTypes: {
    variantSize: { type: 'select', options: Object.keys(CapInputSize) },
    onChange: {
      action: 'clicked',
      description:
        '(value: { readonly startDate: Moment | null  readonly endDate: Moment | null}) => void',
    },
  },
  args: {
    startDateId: 'startDateId',
    endDateId: 'endDateId',
    className: 'cap-dateRange',
    errorMessage: 'Error info.',
    isRequired: false,
    isInvalid: false,
    isDisabled: false,
    variantSize: CapInputSize.Sm,
    value: { startDate: null, endDate: null },
    displayFormat: 'DD/MM/YYYY',
  },
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Default: Story<DateRangeProps> = args => {
  const [value, onChange] = React.useState<DateRangeValueType>({
    startDate: null,
    endDate: null,
  })
  return (
    <DateRange
      className={args.className}
      startDateId={args.startDateId}
      endDateId={args.endDateId}
      displayFormat={args.displayFormat}
      value={value}
      onChange={elem =>
        onChange({ startDate: elem.startDate, endDate: elem.endDate })
      }
    />
  )
}
export const Disabled: Story<DateRangeProps> = args => {
  const [value, onChange] = React.useState<DateRangeValueType>({
    startDate: null,
    endDate: null,
  })
  return (
    <DateRange
      isDisabled={args.isDisabled}
      className={args.className}
      startDateId={args.startDateId}
      endDateId={args.endDateId}
      displayFormat={args.displayFormat}
      value={value}
      onChange={elem =>
        onChange({ startDate: elem.startDate, endDate: elem.endDate })
      }
    />
  )
}
Disabled.args = {
  isDisabled: true,
}

export const WithAnErrorMessage: Story<DateRangeProps> = ({
  errorMessage,
  onChange,
  value,
  ...args
}) => (
  <FormControl {...args}>
    <DateRange
      className={args.className}
      startDateId={args.startDateId}
      endDateId={args.endDateId}
      displayFormat={args.displayFormat}
      onChange={onChange}
      value={value}
    />
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
    <DateRange
      className={args.className}
      startDateId={args.startDateId}
      endDateId={args.endDateId}
      displayFormat={args.displayFormat}
      id="Date"
      onChange={onChange}
      value={value}
    />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

export const WithStartDateInThePast: Story<DateRangeProps> = ({
  errorMessage,
  variantSize,
  onChange,
  value,
  ...args
}) => {
  const [dates, setDates] = React.useState<DateRangeValueType>({
    startDate: moment().subtract(8, 'days'),
    endDate: null,
  })
  return (
    <FormControl {...args}>
      <FormLabel htmlFor="Date" label="Label">
        {!args.isRequired && (
          <Box as="span" color="gray.500">
            facultatif
          </Box>
        )}
      </FormLabel>
      <DateRange
        className={args.className}
        startDateId={args.startDateId}
        endDateId={args.endDateId}
        displayFormat={args.displayFormat}
        id="Date"
        onChange={setDates}
        value={dates}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

export const WithGuideline: Story<DateRangeProps> = ({
  errorMessage,
  placeholder,
  onChange,
  value,
  ...args
}) => (
  <FormControl {...args}>
    <FormLabel htmlFor="name" label="Label">
      <Tooltip label="Une aide en plus">
        <Icon name={CapUIIcon.Info} size={CapUIIconSize.Sm} color="blue.500" />
      </Tooltip>
    </FormLabel>
    <FormGuideline>Guidelines</FormGuideline>
    <DateRange
      className={args.className}
      startDateId={args.startDateId}
      endDateId={args.endDateId}
      displayFormat={args.displayFormat}
      id="Date"
      onChange={onChange}
      value={value}
    />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)
