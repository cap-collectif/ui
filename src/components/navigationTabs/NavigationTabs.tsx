import * as React from 'react'

import { CapUIShadow, CapUIFontWeight } from '../../styles'
import { Box } from '../box'
import { Flex } from '../layout'

export interface NavigationTabsProps {
  readonly selectedId: string
  readonly defaultTab: string
  readonly onChange?: (tabId: string) => void
  readonly links: Array<{
    id: string
    to: string
    url?: string
    label: string
    count?: number
  }>
}
const NavigationTabs: React.FC<NavigationTabsProps> = ({
  selectedId,
  defaultTab,
  onChange,
  links,
  ...props
}) => {
  const [currentTab, setCurrentTab] = React.useState<string>(
    defaultTab ?? links[0].id,
  )

  React.useEffect(() => {
    if (onChange) {
      onChange(currentTab)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab])

  return (
    <Flex
      position="absolute"
      top={0}
      left={0}
      backgroundColor="#FFF"
      display="inline-flex"
      justifyContent="flex-start"
      align="center"
      height="48px"
      minHeight="48px"
      width="100%"
      boxShadow={CapUIShadow.Small}
      gap={6}
      paddingX={6}
      {...props}
    >
      {links.map(link => {
        const isActive = currentTab === link.id
        const isLink = !!link.url

        return (
          <Box
            as={isLink ? 'a' : 'span'}
            {...(isLink ? { href: link.url } : null)}
            key={link.id}
            fontSize={1}
            fontWeight={CapUIFontWeight.Bold}
            color={isActive ? 'blue.500' : 'gray.700'}
            borderBottomColor={isActive ? 'blue.500' : 'transparent'}
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
                color: 'blue.500',
                borderBottomColor: 'blue.500',
              },
            }}
            onClick={() => setCurrentTab(link.id)}
          >
            {link.label}
            {link.count !== undefined && (
              <Box
                as="span"
                bg={isActive ? 'rgba(3, 136, 204, 0.2)' : 'neutral-gray.150'}
                color={isActive ? 'blue.500' : 'neutral-gray.500'}
                sx={{
                  fontWeight: 600,
                  height: '16px',
                  padding: '0 4px',
                  borderRadius: '8px',
                  marginLeft: '5px',
                  fontSize: '12px',
                }}
              >
                {link.count}
              </Box>
            )}
          </Box>
        )
      })}
    </Flex>
  )
}
NavigationTabs.displayName = 'NavigationTabs'

export default NavigationTabs
