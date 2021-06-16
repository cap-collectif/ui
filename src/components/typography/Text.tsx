import React, { forwardRef } from 'react'

import { CapUIFontFamily, CapUILineHeight } from '../../styles'
import { jsxInnerText } from '../../utils/jsx'
import { BoxOwnProps, PolymorphicComponent, Box } from '../box'

type Props = BoxOwnProps & {
  readonly truncate?: number
}

const Text = forwardRef<HTMLElement, Props>(
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

export default Text as PolymorphicComponent<Props>
