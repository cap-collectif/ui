import cn from 'classnames'
import * as React from 'react'

import { useBoolean } from '../../../hooks/useBoolean'
import { Flex, FlexProps } from '../../layout/Flex'
import { CapInputSize } from '../enums'
import { createContext } from './FormControl.context'

export interface FormControlProps extends FlexProps {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly isRequired?: boolean
  readonly variantSize?: CapInputSize
}

export interface FormControlContext {
  isRequired?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  variantSize?: CapInputSize
  id?: string
}

export function useFormControlProvider(props: FormControlContext) {
  const { isRequired, isInvalid, isDisabled, variantSize, ...htmlProps } = props

  const [isFocused, setFocus] = useBoolean()

  const getRootProps = React.useCallback(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ...htmlProps,
      ref: forwardedRef,
      role: 'group',
    }),
    [htmlProps],
  )

  return {
    variantSize,
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isDisabled: !!isDisabled,
    isFocused: !!isFocused,
    onFocus: setFocus.on,
    onBlur: setFocus.off,
    htmlProps,
    getRootProps,
  }
}

type FormControlProviderContext = Omit<
  ReturnType<typeof useFormControlProvider>,
  'getRootProps' | 'htmlProps'
>

const [FormControlProvider, useFormControlContext] = createContext<
  FormControlProviderContext
>({
  strict: false,
  name: 'FormControlContext',
})

export { useFormControlContext }

export const FormControl: React.FC<FormControlProps> = React.forwardRef<
  HTMLDivElement,
  FormControlProps
>((props, ref) => {
  const { getRootProps, htmlProps: _, ...context } = useFormControlProvider(
    props,
  )
  const contextValue = React.useMemo(() => context, [context])

  return (
    <FormControlProvider value={contextValue}>
      <Flex
        width={props.width || '100%'}
        direction="column"
        spacing={1}
        {...getRootProps({}, ref)}
        className={cn('cap-form-control', props.className)}
      />
    </FormControlProvider>
  )
})

FormControl.displayName = 'FormControl'

export default FormControl as React.FC<FormControlProps>
