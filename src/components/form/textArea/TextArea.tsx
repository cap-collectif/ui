import cn from 'classnames'
import * as React from 'react'

import { CapUIFontSize, CapUILineHeight } from '../../../styles'
import type { PolymorphicBoxProps } from '../../box/Box'
import { Flex } from '../../layout'
import { Text } from '../../typography'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import FormGuideline from '../formGuideline/FormGuideline'
import S, { InputInner } from '../style'

export interface TextAreaProps extends PolymorphicBoxProps<'textarea'> {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
  readonly maxLengthMessage?: string
  readonly resize?:
    | 'none'
    | 'both'
    | 'horizontal'
    | 'vertical'
    | 'block'
    | 'inline'
    | 'inherit'
    | 'initial'
    | 'unset'
}

export const TextArea: React.FC<TextAreaProps> = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(
  (
    {
      className,
      maxLength,
      value,
      width,
      resize = 'none',
      maxLengthMessage,
      ...props
    },
    ref,
  ) => {
    const inputProps = useFormControl<HTMLTextAreaElement>(props)
    const valueLength =
      (value && typeof value === 'string' && value.length) || 0
    return (
      <Flex direction="column" width={width || '100%'}>
        <InputInner
          {...inputProps}
          sx={{ ...S, resize }}
          variant={inputProps.variantSize}
          ref={ref}
          as="textarea"
          className={cn('cap-textarea', className)}
          width="100%"
          rows={3}
          value={value}
          maxLength={maxLength}
          {...props}
        />
        {maxLength &&
          !inputProps['aria-invalid'] &&
          (valueLength < maxLength || !maxLengthMessage) && (
            <Text
              width="100%"
              textAlign="end"
              color="gray.600"
              fontSize={CapUIFontSize.Caption}
              mt={1}
              lineHeight={CapUILineHeight.S}
              bg="inherit"
            >
              {(value && typeof value === 'string' && value.length) || 0} /{' '}
              {maxLength}
            </Text>
          )}
        {maxLength &&
          valueLength === maxLength &&
          maxLengthMessage &&
          !inputProps['aria-invalid'] && (
            <FormGuideline mt={1}>{maxLengthMessage}</FormGuideline>
          )}
      </Flex>
    )
  },
)

TextArea.displayName = 'TextArea'

export default TextArea
