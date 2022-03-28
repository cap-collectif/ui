import cn from 'classnames'
import * as React from 'react'

import {
  CapUIFontWeight,
  CapUILineHeight,
  FONT_SIZES,
} from '../../styles/theme/typography'
import { jsxInnerText } from '../../utils/jsx'
import { Box, BoxOwnProps, BoxProps } from '../box/Box'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

type HeadingStyles = {
  [key in HeadingLevel]: {
    fontSize: BoxProps['fontSize']
    fontWeight: BoxProps['fontWeight']
    lineHeight: BoxProps['lineHeight']
  }
}

export type HeadingProps = BoxOwnProps<HeadingLevel> & {
  readonly truncate?: number
}

export const headingStyles: HeadingStyles = {
  h1: {
    fontSize: 7,
    fontWeight: CapUIFontWeight.Semibold,
    lineHeight: CapUILineHeight.Xl,
  },
  h2: {
    fontSize: 6,
    fontWeight: CapUIFontWeight.Semibold,
    lineHeight: CapUILineHeight.L,
  },
  h3: {
    fontSize: 5,
    fontWeight: CapUIFontWeight.Semibold,
    lineHeight: CapUILineHeight.M,
  },
  h4: {
    fontSize: 4,
    fontWeight: CapUIFontWeight.Normal,
    lineHeight: CapUILineHeight.Base,
  },
  h5: {
    fontSize: 1,
    fontWeight: CapUIFontWeight.Normal,
    lineHeight: CapUILineHeight.Sm,
  },
}

export const Heading: React.FC<HeadingProps> = React.forwardRef<
  HTMLHeadingElement,
  HeadingProps
>(({ children, truncate, className, as = 'h2', ...rest }, ref) => {
  let content = children
  const innerText = jsxInnerText(content)

  if (truncate && innerText.length > truncate) {
    content = `${innerText.slice(0, truncate)}...`
  }

  return (
    <Box
      ref={ref}
      as={as}
      className={cn('cap-heading', className)}
      fontFamily="heading"
      fontSize={
        headingStyles[as] ? headingStyles[as].fontSize : FONT_SIZES['1']
      }
      fontWeight={
        headingStyles[as]
          ? headingStyles[as].fontWeight
          : CapUIFontWeight.Normal
      }
      lineHeight={
        headingStyles[as] ? headingStyles[as].lineHeight : CapUILineHeight.Base
      }
      m={0}
      {...(truncate && { title: innerText })}
      {...rest}
    >
      {content}
    </Box>
  )
})

Heading.displayName = 'Heading'

export default Heading
