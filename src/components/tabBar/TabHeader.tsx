import * as React from 'react'

import { CapUIFontSize, CapUIFontWeight, CapUIRadius } from '../../styles'
import { Box } from '../box'
import type { TabPaneProps } from './pane/TabPane'

export type TabHeaderProps = Pick<
  TabPaneProps,
  'title' | 'count' | 'href' | 'target' | 'rel' | 'disabled'
> & {
  id: string
  panelId?: string
  tabIndex?: number
  onClick: () => void
  isActive: boolean
}

const TabHeader: React.FC<TabHeaderProps> = ({
  title,
  id,
  panelId,
  href,
  target,
  rel,
  disabled,
  tabIndex,
  onClick,
  isActive,
  count,
}) => {
  const isLink = !!href

  const elementProps = isLink
    ? {
        href: disabled ? undefined : href,
        target,
        rel,
        'aria-disabled': disabled || undefined,
      }
    : {
        type: 'button',
        role: 'tab',
        'aria-selected': isActive,
        'aria-controls': panelId,
        tabIndex,
        disabled,
        onClick,
      }

  return (
    <Box
      as={isLink ? 'a' : 'button'}
      {...elementProps}
      id={id}
      fontSize={CapUIFontSize.Caption}
      fontWeight={CapUIFontWeight.Bold}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      sx={{
        background: 'none',
        border: 'none',
        borderBottom: '2px solid',
        borderBottomColor: isActive ? 'primary.base' : 'transparent',
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
        fontFamily: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: disabled ? 'gray.500' : isActive ? 'primary.base' : 'gray.700',
        cursor: disabled ? 'not-allowed' : 'pointer',
        '&:hover:not(:disabled,[aria-disabled="true"])': {
          color: 'primary.base',
        },
        '&:hover:not(:disabled,[aria-disabled="true"]) .tabHeaderCount': {
          color: 'primary.base',
          backgroundColor: 'primary.lighter',
        },
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
}

TabHeader.displayName = 'TabHeader'

export default TabHeader
