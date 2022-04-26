import cn from 'classnames'
import type { Moment } from 'moment'
import React, { FC } from 'react'
import type { SingleDatePickerInputShape } from 'react-dates';
import 'react-dates/initialize'
import SingleDatePicker from 'react-dates/lib/components/SingleDatePicker'
import { useHotkeys } from 'react-hotkeys-hook'

import { BoxPropsOf } from '../../../box'
import { COMMON_PROPS } from '../commonProps'
import { CapInputSize } from '../../enums'
import { useFormControl } from '../../formControl'
import { DateInputBox } from './DateInput.style'

export type DateInputValueType = Moment | null

export interface DateInputProps
  extends Omit<BoxPropsOf<'input'>, 'onChange' | 'value' | 'disabled'> {
  readonly value: DateInputValueType
  readonly onChange: (value: DateInputValueType) => void
  readonly className?: string
  readonly variantSize?: CapInputSize
  readonly errorMessage?: string
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly isRequired?: boolean
  readonly id?: string
  readonly disabled?: SingleDatePickerInputShape['disabled']
  readonly placeholder?: SingleDatePickerInputShape['placeholder']
}


const DateInput: FC<DateInputProps> = ({
  value,
  onChange,
  id = 'cap-date-input-id',
  className,
  placeholder= 'jj/mm/aaaa',
  ...props
}) => {
  const [focusedInput, setFocusedInput] = React.useState(false)

  const inputProps = useFormControl<HTMLInputElement>({
    ...props,
    disabled: typeof props.disabled === 'string' ? undefined : props.disabled,
  })
  // The library doesn't handle closing the calendar after Tabbing out of the input
  // https://github.com/airbnb/react-dates/issues/1809
  useHotkeys('esc', () => setFocusedInput(false))

  return (
    <DateInputBox
      className={cn('cap-date-input', className)}
      isInvalid={inputProps['aria-invalid']}
      variant={inputProps.variantSize}
    >
      <SingleDatePicker
        date={value}
        onDateChange={onChange}
        focused={focusedInput}
        onFocusChange={({ focused }) => {
          setFocusedInput(focused)
        }}
        id={id}
        disabled={inputProps.disabled || props.disabled}
        placeholder={placeholder}
        {...COMMON_PROPS}
      />
    </DateInputBox>
  )
}

export default DateInput
