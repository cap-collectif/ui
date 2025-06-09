import cn from 'classnames'
import type { Moment } from 'moment'
import React, { FC } from 'react'
import type { DateRangePickerShape, FocusedInputShape } from 'react-dates'
import 'react-dates/initialize'
import DateRangePicker from 'react-dates/lib/components/DateRangePicker'

import type { BoxPropsOf } from '../../../box'
import { CapUIIcon, CapUIIconSize, Icon } from '../../../icon'
import { CapInputSize } from '../../enums'
import { useFormControl } from '../../formControl'
import { COMMON_PROPS } from '../commonProps'
import { DateRangeBox } from './DateRange.style'

export type DateRangeValueType = {
  readonly startDate: Moment | null
  readonly endDate: Moment | null
}

export interface DateRangeProps
  extends Omit<BoxPropsOf<'input'>, 'onChange' | 'value' | 'disabled'> {
  readonly value: DateRangeValueType
  readonly onChange: (value: DateRangeValueType) => void
  readonly className?: string
  readonly variantSize?: CapInputSize
  readonly errorMessage?: string
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly isRequired?: boolean
  readonly isOutsideRange?: boolean
  readonly displayFormat?: DateRangePickerShape['displayFormat']
  readonly startDatePlaceholderText?: DateRangePickerShape['startDatePlaceholderText']
  readonly endDatePlaceholderText?: DateRangePickerShape['endDatePlaceholderText']
  readonly startDateId?: DateRangePickerShape['startDateId']
  readonly endDateId?: DateRangePickerShape['endDateId']
  readonly disabled?: DateRangePickerShape['disabled']
  readonly keepOpenOnDateSelect?: DateRangePickerShape['keepOpenOnDateSelect']
  readonly minDate?: DateRangePickerShape['minDate']
  readonly maxDate?: DateRangePickerShape['maxDate']
  readonly onClose?: DateRangePickerShape['onClose']
}

const DateRange: FC<DateRangeProps> = ({
  startDatePlaceholderText = 'jj/mm/aaaa',
  endDatePlaceholderText = 'jj/mm/aaaa',
  value,
  onChange,
  startDateId = 'cap-dateRange-startDate',
  endDateId = 'cap-dateRange-endDate',
  displayFormat = 'DD/MM/YYYY',
  className,
  keepOpenOnDateSelect = true,
  isOutsideRange,
  minDate,
  maxDate,
  onClose,
  ...props
}) => {
  const [focusedInput, setFocusedInput] =
    React.useState<FocusedInputShape | null>(null)

  const inputProps = useFormControl<HTMLInputElement>({
    ...props,
    disabled: typeof props.disabled === 'string' ? undefined : props.disabled,
  })

  const isEmpty = !value || (!value.endDate && !value.startDate)

  return (
    <DateRangeBox
      className={cn('cap-date-range', className)}
      isInvalid={!!inputProps['aria-invalid']}
      isEmpty={isEmpty}
      variant={inputProps.variantSize}
      onKeyUp={e => {
        if (e.key === 'Escape') setFocusedInput(null)
      }}
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
        displayFormat={displayFormat}
        {...COMMON_PROPS}
        keepOpenOnDateSelect={keepOpenOnDateSelect}
        isOutsideRange={isOutsideRange ? () => false : undefined}
        minDate={minDate}
        maxDate={maxDate}
        onClose={onClose}
        customArrowIcon={
          <Icon
            color={`input.icon.${
              inputProps.disabled
                ? 'disable'
                : isEmpty
                ? 'placeholder'
                : 'default'
            }`}
            name={CapUIIcon.LongArrowRight}
            size={CapUIIconSize.Md}
          />
        }
      />
    </DateRangeBox>
  )
}

export default DateRange
