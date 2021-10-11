import cn from 'classnames'
import * as React from 'react'
import { forwardRef } from 'react'

import { CapUILineHeight } from '../../../styles'
import { BoxPropsOf } from '../../box'
import { Flex } from '../../layout'
import { Text } from '../../typography'
import { CapInputSize } from '../enums'
import { useFormControl } from '../formControl'
import S, { InputInner } from '../style'

export interface TextAreaProps extends BoxPropsOf<'textarea'> {
  readonly isDisabled?: boolean
  readonly isInvalid?: boolean
  readonly variantSize?: CapInputSize
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

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, maxLength, value, width, resize = 'none', ...props }, ref) => {
    const inputProps = useFormControl<HTMLTextAreaElement>(props)
    return (
      <Flex direction="column" width={width || '100%'}>
        <InputInner
          {...inputProps}
          sx={{ ...S, resize }}
          variant={inputProps.variantSize}
          disableFocusStyles
          ref={ref}
          as="textarea"
          className={cn('cap-input', className)}
          width="100%"
          rows={3}
          value={value}
          maxLength={maxLength}
          {...props}
        />
        {maxLength && !inputProps['aria-invalid'] && (
          <Text
            width="100%"
            textAlign="end"
            color="gray.500"
            fontSize={1}
            mt={1}
            lineHeight={CapUILineHeight.Sm}
            bg="inherit"
          >
            {(value && typeof value === 'string' && value.length) || 0} /{' '}
            {maxLength}
          </Text>
        )}
      </Flex>
    )
  },
)

TextArea.displayName = 'TextArea'

export default TextArea as React.FC<TextAreaProps>
