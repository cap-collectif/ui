import * as React from 'react'
import { forwardRef } from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

import colors from '../../styles/modules/colors'
import { jsxInnerText } from '../../utils/jsx'
import { Box, BoxPropsOf } from '../box'

export interface LinkProps extends BoxPropsOf<'a'> {
  readonly target?: string
  readonly variant?: 'primary' | 'danger' | 'hierarchy'
  readonly truncate?: number
}

export const styles = {
  primary: {
    textDecoration: 'underline',
    color: colors.blue['500'],

    '&:focus': {
      boxShadow: `0 0 2px 2px ${colors.blue['300']}`,
      textDecoration: 'underline',
      color: colors.blue['500'],
    },

    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
      color: colors.blue['700'],

      '&:focus': {
        boxShadow: `0 0 2px 2px ${colors.blue['300']}`,
      },
    },
  },
  danger: {
    textDecoration: 'underline',
    color: colors.red['500'],

    '&:focus': {
      boxShadow: `0 0 2px 2px ${colors.red['300']}`,
      color: colors.red['500'],
    },

    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
      color: colors.red['700'],

      '&:focus': {
        boxShadow: `0 0 2px 2px ${colors.red['300']}`,
      },
    },
  },
  hierarchy: {
    textDecoration: 'underline',
    color: colors.gray['500'],

    '&:focus': {
      boxShadow: `0 0 2px 2px ${colors.gray['300']}`,
      color: colors.gray['500'],
    },

    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
      color: colors.blue['500'],

      '&:focus': {
        boxShadow: `0 0 2px 2px ${colors.blue['300']}`,
      },
    },
  },
}

const LinkInner = styled(Box)(
  variant({
    variants: {
      primary: styles.primary,
      danger: styles.danger,
      hierarchy: styles.hierarchy,
    },
  }),
)

export const Link = forwardRef<HTMLElement, LinkProps>(
  (
    {
      href,
      truncate,
      variant: variantType = 'primary',
      children,
      ...props
    }: LinkProps,
    ref,
  ) => {
    let content = children
    const innerText = jsxInnerText(content)

    if (truncate && innerText.length > truncate) {
      content = `${innerText.slice(0, truncate)}...`
    }

    return (
      <LinkInner
        as="a"
        ref={ref}
        href={href}
        variant={variantType}
        {...(truncate && { title: innerText })}
        {...props}
      >
        {content}
      </LinkInner>
    )
  },
)

Link.displayName = 'Link'
