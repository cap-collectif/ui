import cn from 'classnames'
import { Moment } from 'moment'
import moment from 'moment/moment'
import React, { FC } from 'react'
import {
  DateRangePicker,
  DateRangePickerInputShape,
  FocusedInputShape,
} from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import { CapUIRadius } from '../../../styles'
import { BoxPropsOf } from '../../box'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { Flex } from '../../layout/Flex'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import styles, { StyledWrapper } from './DateRange.style'
import { NavNext, NavPrev } from './Nav'

export type DateRangeValueType = {
  readonly startDate: Moment | null
  readonly endDate: Moment | null
}

export interface DateRangeProps
  extends Omit<BoxPropsOf<'input'>, 'onChange' | 'value' | 'disabled'>,
    DateRangePickerInputShape {
  readonly value: DateRangeValueType
  readonly onChange: (value: DateRangeValueType) => void
  readonly startDatePlaceholderText?: string
  readonly endDatePlaceholderText?: string
  readonly startDateId: string
  readonly endDateId: string
  readonly className?: string
  readonly variantSize?: CapInputSize
  readonly errorMessage?: string
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly isRequired?: boolean
  readonly displayFormat: string | (() => string) | undefined
}

const CustomDayContent = (day: moment.Moment): React.ReactNode => {
  return (
    <Flex justify="center" align="center" borderRadius={CapUIRadius.Poppin}>
      {day.format('D')}
    </Flex>
  )
}
const DateRange: FC<DateRangeProps> = ({
  startDatePlaceholderText = 'jj/mm/aaaa',
  endDatePlaceholderText = 'jj/mm/aaaa',
  value,
  onChange,
  startDateId,
  endDateId,
  displayFormat,
  className,
  ...props
}) => {
  const [
    focusedInput,
    setFocusedInput,
  ] = React.useState<FocusedInputShape | null>(null)

  const inputProps = useFormControl<HTMLInputElement>({
    ...props,
    disabled: typeof props.disabled === 'string' ? undefined : props.disabled,
  })
  return (
    <StyledWrapper
      className={cn('cap-dateRange', className)}
      sx={styles(inputProps['aria-invalid'])}
      variant={inputProps.variantSize}
      {...inputProps}
    >
      <DateRangePicker
        disabled={inputProps.disabled || props.disabled}
        startDatePlaceholderText={startDatePlaceholderText}
        endDatePlaceholderText={endDatePlaceholderText}
        startDate={value.startDate}
        startDateId={startDateId}
        endDate={value.endDate}
        endDateId={endDateId}
        onDatesChange={onChange}
        focusedInput={focusedInput}
        onFocusChange={setFocusedInput}
        inputIconPosition="after"
        displayFormat={displayFormat}
        hideKeyboardShortcutsPanel
        renderDayContents={CustomDayContent}
        verticalSpacing={8}
        horizontalMargin={0}
        daySize={32}
        keepOpenOnDateSelect
        navPrev={<NavPrev />}
        navNext={<NavNext />}
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
