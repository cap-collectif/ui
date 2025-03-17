import cn from 'classnames'
import * as React from 'react'

import {
  CapUIFontSize,
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
    fontSize: CapUIFontSize.DisplayLarge,
    fontWeight: CapUIFontWeight.Semibold,
    lineHeight: CapUILineHeight.XXL,
  },
  h2: {
    fontSize: CapUIFontSize.DisplayMedium,
    fontWeight: CapUIFontWeight.Semibold,
    lineHeight: CapUILineHeight.XL,
  },
  h3: {
    fontSize: CapUIFontSize.DisplaySmall,
    fontWeight: CapUIFontWeight.Semibold,
    lineHeight: CapUILineHeight.L,
  },
  h4: {
    fontSize: CapUIFontSize.Headline,
    fontWeight: CapUIFontWeight.Normal,
    lineHeight: CapUILineHeight.M,
  },
  h5: {
    fontSize: CapUIFontSize.Caption,
    fontWeight: CapUIFontWeight.Normal,
    lineHeight: CapUILineHeight.S,
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
        headingStyles[as] ? headingStyles[as].lineHeight : CapUILineHeight.M
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
