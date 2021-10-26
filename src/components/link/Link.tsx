import cn from 'classnames'
import * as React from 'react'

import { jsxInnerText } from '../../utils/jsx'
import { Box, BoxPropsOf } from '../box'

export interface LinkProps extends BoxPropsOf<'a'> {
  readonly truncate?: number
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  truncate,
  className,
  ...rest
}) => {
  let content = children
  const innerText = jsxInnerText(content)
  const isTruncated = truncate && innerText.length > truncate
  if (isTruncated) {
    content = `${innerText.slice(0, truncate)}…`
  }

  return (
    <Box
      as="a"
      href={href}
      className={cn('cap-link', className)}
      _hover={{
        textDecoration: 'underline',
      }}
      {...(isTruncated ? { title: innerText } : {})}
      {...rest}
    >
      {content}
    </Box>
  )
}

Link.displayName = 'Link'

export default Link
