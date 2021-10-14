import cn from 'classnames'
import * as React from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

import { CapUILineHeight } from '../../../styles'
import { Box, BoxProps } from '../../box/Box'
import { Tag } from '../../tag'
import { useInlineSelect } from '../InlineSelect.context'

export interface InlineSelectChoiceProps extends BoxProps {
  readonly value: string
  readonly children: React.ReactNode
}

export const InlineSelectChoice: React.FC<InlineSelectChoiceProps> = ({
  children,
  value,
  className,
  ...rest
}) => {
  const { onChange, value: valueSelected } = useInlineSelect()
  const selected = valueSelected === value
  const handler = React.useCallback(() => {
    if (onChange) {
      onChange(value)
    }
  }, [onChange, value])

  const elementRef = useHotkeys('space, enter', handler, [handler])

  return (
    <Box
      as="li"
      className={cn('cap-inlineSelect__choice', className)}
      {...rest}
    >
      {selected ? (
        <Tag variantColor="blue">
          <Tag.Label>{children}</Tag.Label>
        </Tag>
      ) : (
        <Box
          as="button"
          ref={elementRef}
          onClick={handler}
          color="gray.500"
          bg="transparent"
          px={2}
          py={1}
          borderRadius="normal"
          fontFamily="roboto"
          fontSize={2}
          lineHeight={CapUILineHeight.Sm}
          _hover={{ bg: 'blue.150' }}
          _focus={{ bg: 'blue.150' }}
        >
          {children}
        </Box>
      )}
    </Box>
  )
}

InlineSelectChoice.displayName = 'InlineSelect.Choice'

export default InlineSelectChoice
