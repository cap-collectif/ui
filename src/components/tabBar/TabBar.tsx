import * as React from 'react'

import { pxToRem } from '../../styles/modules/mixins'
import { Box, BoxProps } from '../box'
import { Flex } from '../layout'
import TabHeader from './TabHeader'
import TabPane, { TabPaneProps } from './pane/TabPane'

export type TabBarProps = Omit<BoxProps, 'onChange'> & {
  children:
    | React.ReactElement<TabPaneProps>[]
    | React.ReactElement<TabPaneProps>
  /** Initially selected tab (uncontrolled). Defaults to the first selectable tab. */
  defaultTab?: string
  /** Selected tab (controlled). Use with `onChange`. */
  selectedTab?: string
  onChange?: (tabId: string) => void
  sideContent?: React.ReactNode
  /** Keep inactive panes mounted (hidden) to preserve their state. */
  keepMounted?: boolean
  /** `automatic`: arrow keys select the tab. `manual`: arrow keys only move focus, Enter/Space selects. */
  activationMode?: 'automatic' | 'manual'
}

type SubComponents = {
  Pane: typeof TabPane
}

const TabBar: React.FC<TabBarProps> & SubComponents = ({
  children,
  defaultTab,
  selectedTab,
  onChange,
  sideContent,
  keepMounted = false,
  activationMode = 'automatic',
  ...props
}) => {
  const baseId = React.useId()
  const tablistRef = React.useRef<HTMLUListElement>(null)
  const panes = React.Children.toArray(
    children,
  ) as React.ReactElement<TabPaneProps>[]

  const [uncontrolledTab, setUncontrolledTab] = React.useState<
    string | undefined
  >(
    () =>
      defaultTab ??
      panes.find(pane => !pane.props.href && !pane.props.disabled)?.props.id,
  )
  const isControlled = selectedTab !== undefined
  const currentTab = isControlled ? selectedTab : uncontrolledTab

  if (!panes.length) return null

  const getTabId = (id: string) => `${baseId}-tab-${id}`
  const getPanelId = (id: string) => `${baseId}-panel-${id}`

  const selectTab = (tabId: string) => {
    if (tabId === currentTab) return
    if (!isControlled) setUncontrolledTab(tabId)
    onChange?.(tabId)
  }

  // Roving tabindex: only one tab is reachable with Tab, arrow keys move between tabs
  const selectableTabIds = panes
    .filter(pane => !pane.props.href && !pane.props.disabled)
    .map(pane => pane.props.id)
  const focusableTabId =
    currentTab && selectableTabIds.includes(currentTab)
      ? currentTab
      : selectableTabIds[0]

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    const tabs = Array.from(
      tablistRef.current?.querySelectorAll<HTMLButtonElement>(
        '[role="tab"]:not(:disabled)',
      ) ?? [],
    )
    const index = tabs.indexOf(event.target as HTMLButtonElement)
    if (index === -1) return

    const nextTab = {
      ArrowRight: tabs[(index + 1) % tabs.length],
      ArrowLeft: tabs[(index - 1 + tabs.length) % tabs.length],
      Home: tabs[0],
      End: tabs[tabs.length - 1],
    }[event.key]
    if (!nextTab) return

    event.preventDefault()
    nextTab.focus()
    if (activationMode === 'automatic') nextTab.click()
  }

  return (
    <>
      <Flex
        backgroundColor="white"
        justifyContent="space-between"
        align="center"
        height={pxToRem(48)}
        minHeight={pxToRem(48)}
        width="100%"
        borderBottomStyle={'solid'}
        borderBottomWidth={1}
        borderBottomColor={'gray.150'}
        gap={6}
        paddingX={6}
        {...props}
      >
        <Flex
          as="ul"
          role="tablist"
          ref={tablistRef}
          onKeyDown={handleKeyDown}
          gap={6}
          height={'inherit'}
          m={0}
          p={0}
          sx={{ listStyle: 'none' }}
        >
          {panes.map(pane => {
            const { id, href } = pane.props
            const isActive = id === currentTab

            return (
              <Box as="li" role="presentation" key={id} height="100%">
                <TabHeader
                  id={getTabId(id)}
                  panelId={
                    !href && (isActive || keepMounted)
                      ? getPanelId(id)
                      : undefined
                  }
                  title={pane.props.title}
                  count={pane.props.count}
                  href={href}
                  target={pane.props.target}
                  rel={pane.props.rel}
                  disabled={pane.props.disabled}
                  isActive={isActive}
                  tabIndex={id === focusableTabId ? 0 : -1}
                  onClick={() => selectTab(id)}
                />
              </Box>
            )
          })}
        </Flex>

        {sideContent && (
          <Flex alignItems={'center'} gap={4}>
            {sideContent}
          </Flex>
        )}
      </Flex>
      {panes.map(pane => {
        const { id, href } = pane.props
        const isActive = id === currentTab

        if (href || (!isActive && !keepMounted)) return null

        return React.cloneElement(pane, {
          key: id,
          id: getPanelId(id),
          role: 'tabpanel',
          'aria-labelledby': getTabId(id),
          hidden: !isActive,
        })
      })}
    </>
  )
}

TabBar.displayName = 'TabBar'
TabBar.Pane = TabPane

export default TabBar
