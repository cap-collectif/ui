import { FocusEventHandler } from 'react'

import { FormControlContext, useFormControlContext } from './FormControl'

export type FunctionArguments<T extends Function> = T extends (
  ...args: infer R
) => any
  ? R
  : never

export function callAllHandlers<T extends (event: any) => void>(
  ...fns: (T | undefined)[]
) {
  return function func(event: FunctionArguments<T>[0]) {
    fns.some(fn => {
      fn?.(event)
      return event?.defaultPrevented
    })
  }
}

export interface UseFormControlProps<T extends HTMLElement>
  extends FormControlContext {
  id?: string
  onFocus?: FocusEventHandler<T>
  onBlur?: FocusEventHandler<T>
  onChange?: FocusEventHandler<T>
  disabled?: boolean
  required?: boolean
  variantSize?: 'sm' | 'md'
  'aria-describedby'?: string
}

function useFormControlProps<T extends HTMLElement>(
  props: UseFormControlProps<T>,
) {
  const field = useFormControlContext()
  const {
    id,
    disabled,
    required,
    isRequired,
    isInvalid,
    isDisabled,
    onFocus,
    onBlur,
    variantSize,
    ...rest
  } = props
  return {
    ...rest,
    variantSize: variantSize || field?.variantSize,
    id: id ?? undefined,
    isDisabled: disabled ?? isDisabled ?? field?.isDisabled,
    isRequired: required ?? isRequired ?? field?.isRequired,
    isInvalid: isInvalid ?? field?.isInvalid,
    onFocus: callAllHandlers(field?.onFocus, onFocus),
    onBlur: callAllHandlers(field?.onBlur, onBlur),
  }
}

export function useFormControl<T extends HTMLElement>(
  props: UseFormControlProps<T>,
) {
  const {
    isDisabled,
    isInvalid,
    isRequired,
    variantSize,
    ...rest
  } = useFormControlProps(props)
  return {
    ...rest,
    variantSize: variantSize || 'sm',
    disabled: isDisabled,
    required: isRequired,
    'aria-invalid': isInvalid || undefined,
    'aria-required': isRequired || undefined,
  }
}
