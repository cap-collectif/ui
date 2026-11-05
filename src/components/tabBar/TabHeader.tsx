import * as React from 'react'

import { CapUIFontSize, CapUIFontWeight, CapUIRadius } from '../../styles'
import { Box } from '../box'
import type { TabPaneProps } from './pane/TabPane'

export type TabHeaderProps = Pick<
  TabPaneProps,
  'title' | 'count' | 'href' | 'target' | 'rel' | 'disabled'
> &
  Omit<React.HTMLAttributes<HTMLElement>, 'title'> & {
    isActive?: boolean
  }

/**
 * Visual header of a `TabBar` item. Rendered as a link when `href` is set,
 * otherwise as a button (the tab semantics are added by Ariakit's `Tab`).
 */
const TabHeader = React.forwardRef<HTMLElement, TabHeaderProps>(
  (
    { title, href, target, rel, disabled, isActive = false, count, ...props },
    ref,
  ) => {
    const isLink = !!href

    const elementProps = isLink
      ? {
          href: disabled ? undefined : href,
          target,
          rel,
          'aria-disabled': disabled || undefined,
        }
      : { type: 'button' as const, disabled }

    return (
      <Box
        as={isLink ? 'a' : 'button'}
        ref={ref}
        {...elementProps}
        {...props}
        fontSize={CapUIFontSize.Caption}
        fontWeight={CapUIFontWeight.Bold}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        m={0}
        p={0}
        bg="transparent"
        borderWidth={0}
        borderBottomWidth={2}
        borderStyle="solid"
        borderBottomColor={isActive ? 'primary.base' : 'transparent'}
        color={disabled ? 'gray.500' : isActive ? 'primary.base' : 'gray.700'}
        uppercase
        _hover={
          disabled
            ? undefined
            : {
                color: 'primary.base',
                '& .tabHeaderCount': {
                  color: 'primary.base',
                  backgroundColor: 'primary.lighter',
                },
              }
        }
        sx={{
          boxSizing: 'border-box',
          fontFamily: 'inherit',
          lineHeight: 'inherit',
          letterSpacing: 'inherit',
          textDecoration: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        {title}
        {count !== undefined && (
          <Box
            as="span"
            className="tabHeaderCount"
            bg={isActive ? 'primary.lighter' : 'neutral-gray.150'}
            color={isActive ? 'primary.base' : 'neutral-gray.500'}
            px={1}
            borderRadius={CapUIRadius.Normal}
            fontWeight={CapUIFontWeight.Semibold}
            fontSize={CapUIFontSize.BodySmall}
            marginLeft={1}
          >
            {count}
          </Box>
        )}
      </Box>
    )
  },
)

TabHeader.displayName = 'TabHeader'

export default TabHeader
