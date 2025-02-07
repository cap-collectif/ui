import * as React from 'react'

import { CapUIFontWeight, CapUIRadius } from '../../styles'
import { Box } from '../box'

export type TabHeaderProps = {
  title: string
  id: string
  href?: string
  onClick: () => void
  onKeyDown: (event: React.KeyboardEvent) => void | undefined
  isActive: boolean
  count?: number
}

const TabHeader: React.FC<TabHeaderProps> = ({
  title,
  href,
  onClick,
  onKeyDown,
  isActive,
  count,
  ...props
}) => {
  const isLink = !!href

  return (
    <Box
      as={isLink ? 'a' : 'span'}
      // @ts-expect-error - span won't take href as a prop
      href={isLink ? href : undefined}
      fontSize={1}
      fontWeight={CapUIFontWeight.Bold}
      color={isActive ? 'primary.500' : 'gray.700'}
      borderBottomColor={isActive ? 'primary.500' : 'transparent'}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      sx={{
        textTransform: 'uppercase',
        cursor: 'pointer',
        boxSizing: 'border-box',
        borderBottom: '2px solid transparent',
        '&:hover': {
          color: 'primary.500',
        },
        '&:hover .tabHeaderCount': {
          color: 'primary.500',
          backgroundColor: 'primary.150',
        },
      }}
      onClick={isLink ? undefined : onClick}
      onKeyDown={isLink ? undefined : onKeyDown}
      tabIndex={0}
      {...props}
    >
      {title}
      {count !== undefined && (
        <Box
          as="span"
          className="tabHeaderCount"
          bg={isActive ? 'primary.150' : 'neutral-gray.150'}
          color={isActive ? 'primary.500' : 'neutral-gray.500'}
          sx={{
            fontWeight: 600,
            height: 4,
            px: 1,
            py: 0,
            borderRadius: CapUIRadius.Tags,
            marginLeft: 1,
            fontSize: 2,
          }}
        >
          {count}
        </Box>
      )}
    </Box>
  )
}

TabHeader.displayName = 'TabHeader'

export default TabHeader
