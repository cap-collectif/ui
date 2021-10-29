import { Moment } from 'moment'
import moment from 'moment/moment'
import React, { FunctionComponent } from 'react'
import { DateRangePicker, FocusedInputShape } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import { CapUIRadius } from '../../../styles'
import { BoxPropsOf } from '../../box'
import { Box } from '../../box/Box'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import styles, { StyledWrapper } from './dateRange.style'

export interface DateRangeProps
  extends Omit<BoxPropsOf<'input'>, 'onChange' | 'value'> {
  readonly value: {
    startDate: Moment | null
    endDate: Moment | null
  }
  onChange(value: { startDate: Moment | null; endDate: Moment | null }): void
  readonly startDatePlaceholderText?: string
  readonly endDatePlaceholderText?: string
  readonly variantSize?: CapInputSize
  readonly errorMessage?: string
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly isRequired?: boolean
}

type Props = DateRangeProps

const CustomDayContent = (day: moment.Moment): React.ReactNode => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius={CapUIRadius.Poppin}
    >
      <Box
        as="span"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={CapUIRadius.Poppin}
      >
        {day.format('D')}
      </Box>
    </Box>
  )
}
const DateRange: FunctionComponent<Props> = ({
  startDatePlaceholderText = 'jj/mm/aaaa',
  endDatePlaceholderText = 'jj/mm/aaaa',
  value,
  onChange,
  ...props
}) => {
  const [
    focusedInput,
    setFocusedInput,
  ] = React.useState<FocusedInputShape | null>(null)

  const inputProps = useFormControl<HTMLInputElement>(props)
  return (
    <StyledWrapper
      sx={styles(inputProps['aria-invalid'])}
      variant={inputProps.variantSize}
      {...inputProps}
    >
      <DateRangePicker
        disabled={inputProps.disabled}
        startDatePlaceholderText={startDatePlaceholderText}
        endDatePlaceholderText={endDatePlaceholderText}
        startDate={value.startDate}
        startDateId="your_unique_start_date_id"
        endDate={value.endDate}
        endDateId="your_unique_end_date_id"
        onDatesChange={({ startDate, endDate }) => {
          onChange({ startDate: startDate, endDate: endDate })
        }}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        inputIconPosition="after"
        displayFormat={() => 'DD/MM/YYYY'}
        hideKeyboardShortcutsPanel
        renderDayContents={CustomDayContent}
        verticalSpacing={8}
        horizontalMargin={0}
        daySize={32}
        keepOpenOnDateSelect
        navPrev={
          <div
            role="button"
            tabIndex={0}
            className="DayPickerNavigation_button__horizontalDefault DayPickerNavigation_leftButton__horizontalDefault"
            aria-label="Move backward to switch to the previous month."
          >
            <Icon
              className="DayPickerNavigation_button"
              color="gray.700"
              name={CapUIIcon.ArrowLeftO}
              size={CapUIIconSize.Sm}
            />
          </div>
        }
        navNext={
          <div
            role="button"
            tabIndex={0}
            className=" DayPickerNavigation_button__horizontalDefault DayPickerNavigation_rightButton__horizontalDefault"
            aria-label="Move forward to switch to the next month."
          >
            <Icon
              color="gray.700"
              name={CapUIIcon.ArrowRightO}
              size={CapUIIconSize.Sm}
            />
          </div>
        }
        customInputIcon={
          <Icon
            color="gray.700"
            name={CapUIIcon.Calendar}
            size={CapUIIconSize.Sm}
          />
        }
        customArrowIcon={
          <Icon
            color="gray.700"
            name={CapUIIcon.LongArrowRight}
            size={CapUIIconSize.Sm}
          />
        }
      />
    </StyledWrapper>
  )
}

export default DateRange
