import cn from 'classnames'
import * as React from 'react'
import { forwardRef } from 'react'

import { CapUIFontFamily, CapUILineHeight } from '../../styles'
import { jsxInnerText } from '../../utils/jsx'
import { Box, PolymorphicBoxProps } from '../box/Box'

export type TextProps = PolymorphicBoxProps<React.ElementType> & {
  readonly truncate?: number
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ children, className, truncate, ...props }, ref) => {
    let content = children
    const innerText = jsxInnerText(content)
    if (truncate && innerText.length > truncate) {
      content = `${innerText.slice(0, truncate)}…`
    }
    return (
      <Box
        ref={ref}
        fontFamily={CapUIFontFamily.Body}
        lineHeight={CapUILineHeight.Base}
        as="p"
        className={cn('cap-text', className)}
        {...(truncate ? { title: innerText } : {})}
        {...props}
      >
        {content}
      </Box>
    )
  },
)

Text.displayName = 'Text'

export default Text
