import * as React from 'react'
import { forwardRef } from 'react'

import { CapUIFontFamily, CapUILineHeight } from '../../styles'
import { jsxInnerText } from '../../utils/jsx'
import { BoxOwnProps, PolymorphicComponent, Box } from '../box'

export type TextProps = BoxOwnProps & {
  readonly truncate?: number
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ children, truncate, ...props }, ref) => {
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
        {...(truncate ? { title: innerText } : {})}
        {...props}
      >
        {content}
      </Box>
    )
  },
)

Text.displayName = 'Text'

export default Text as PolymorphicComponent<TextProps>
