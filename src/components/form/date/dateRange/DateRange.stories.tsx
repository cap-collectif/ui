import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Box } from '../../../box/Box'
import { CapUIIcon, CapUIIconSize, Icon } from '../../../icon'
import { Tooltip } from '../../../tooltip/Tooltip'
import { CapInputSize } from '../../enums'
import FormControl from '../../formControl/FormControl'
import FormErrorMessage from '../../formErrorMessage/FormErrorMessage'
import { FormGuideline } from '../../formGuideline'
import FormLabel from '../../formLabel/FormLabel'
import DateRange, { DateRangeProps } from './DateRange'
import type { DateRangeValueType } from './DateRange'

const moment = require('moment')
require('moment/dist/locale/fr')
moment.locale('fr')

const meta: Meta = {
  title: 'Library/Form/DateRange',
  component: DateRange,
  argTypes: {
    variantSize: { control: 'select', options: ['sm', 'md'] },
    variantColor: {
      control: 'select',
      options: ['default', 'hierarchy'],
    },
    onChange: {
      action: 'clicked',
      description:
        '(value: { readonly startDate: Moment | null  readonly endDate: Moment | null}) => void',
    },
  },
  args: {
    isRequired: false,
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

export const Default: Story<DateRangeProps> = args => {
  const [value, onChange] = React.useState<DateRangeValueType>({
    startDate: null,
    endDate: null,
  })
  return (
    <DateRange
      {...args}
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
      {...args}
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

export const WithError: Story<DateRangeProps> = ({
  errorMessage,
  onChange: storybookOnChange,
  value: storybookValue,
  ...args
}) => {
  const [value, onChange] = React.useState<DateRangeValueType>({
    startDate: null,
    endDate: null,
  })
  return (
    <FormControl {...args}>
      <DateRange
        displayFormat={args.displayFormat}
        onChange={elem => {
          onChange({ startDate: elem.startDate, endDate: elem.endDate })
          storybookOnChange({
            startDate: elem.startDate,
            endDate: elem.endDate,
          })
        }}
        value={value}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

WithError.args = {
  isInvalid: true,
  errorMessage: 'Error info.',
}

export const WithLabel: Story<DateRangeProps> = ({
  errorMessage,
  variantSize,
  onChange: storybookOnChange,
  value: storybookValue,
  ...args
}) => {
  const [value, onChange] = React.useState<DateRangeValueType>({
    startDate: null,
    endDate: null,
  })
  return (
    <FormControl {...args}>
      <FormLabel label="Label">
        {!args.isRequired && (
          <Box as="span" color="gray.500">
            facultatif
          </Box>
        )}
      </FormLabel>
      <DateRange
        displayFormat={args.displayFormat}
        onChange={elem => {
          onChange({ startDate: elem.startDate, endDate: elem.endDate })
          storybookOnChange({
            startDate: elem.startDate,
            endDate: elem.endDate,
          })
        }}
        value={value}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

export const WithStartDateInThePast: Story<DateRangeProps> = ({
  errorMessage,
  variantSize,
  onChange: storybookOnChange,
  value: storybookValue,
  ...args
}) => {
  const [value, onChange] = React.useState<DateRangeValueType>({
    startDate: moment('1965-07-31'),
    endDate: null,
  })
  return (
    <FormControl {...args}>
      <FormLabel label="Label">
        {!args.isRequired && (
          <Box as="span" color="gray.500">
            facultatif
          </Box>
        )}
      </FormLabel>
      <DateRange
        disabled={'startDate'}
        displayFormat={args.displayFormat}
        onChange={elem => {
          onChange({ startDate: elem.startDate, endDate: elem.endDate })
          storybookOnChange({
            startDate: elem.startDate,
            endDate: elem.endDate,
          })
        }}
        value={value}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

export const WithGuideline: Story<DateRangeProps> = ({
  errorMessage,
  placeholder,
  onChange: storybookOnChange,
  value: storybookValue,
  ...args
}) => {
  const [value, onChange] = React.useState<DateRangeValueType>({
    startDate: null,
    endDate: null,
  })
  return (
    <FormControl {...args}>
      <FormLabel label="Label">
        <Tooltip label="Une aide en plus">
          <Icon
            name={CapUIIcon.Info}
            size={CapUIIconSize.Sm}
            color="blue.500"
          />
        </Tooltip>
      </FormLabel>
      <FormGuideline>Guidelines</FormGuideline>
      <DateRange
        displayFormat={args.displayFormat}
        onChange={elem => {
          onChange({ startDate: elem.startDate, endDate: elem.endDate })
          storybookOnChange({
            startDate: elem.startDate,
            endDate: elem.endDate,
          })
        }}
        value={value}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}
