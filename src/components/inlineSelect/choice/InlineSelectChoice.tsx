import cn from 'classnames'
import * as React from 'react'

import { CapUIFontFamily, CapUIFontSize, CapUILineHeight } from '../../../styles'
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

  return (
    <Box
      as="li"
      className={cn('cap-inlineSelect__choice', className)}
      {...rest}
    >
      {selected ? (
        <Tag variantColor="primary">
          <Tag.Label>{children}</Tag.Label>
        </Tag>
      ) : (
        // @ts-ignore See why type="button" causes error
        <Box
          as="button"
          type="button"
          onClick={handler}
          color="gray.500"
          bg="transparent"
          px={2}
          py={1}
          borderRadius="normal"
          fontFamily={CapUIFontFamily.Input}
          fontSize={CapUIFontSize.BodySmall}
          lineHeight={CapUILineHeight.S}
          _hover={{ bg: 'primary.lighter' }}
          _focus={{ bg: 'primary.lighter' }}
          style={{ transition: 'background-color 0.1s ease' }}
        >
          {children}
        </Box>
      )}
    </Box>
  )
}

InlineSelectChoice.displayName = 'InlineSelect.Choice'

export default InlineSelectChoice
