import { Tab, TabList, TabPanel, useTabStore } from '@ariakit/react'
import * as React from 'react'

import { pxToRem } from '../../styles/modules/mixins'
import { Box, BoxProps } from '../box'
import { Flex } from '../layout'
import TabHeader from './TabHeader'
import TabPane, { TabPaneProps } from './pane/TabPane'

export type TabBarProps = Omit<BoxProps, 'onChange'> & {
  children:
    React.ReactElement<TabPaneProps>[] | React.ReactElement<TabPaneProps>
  /** Initially selected tab (uncontrolled). Defaults to the first selectable tab. */
  defaultTab?: string
  /**
   * Selected tab (controlled). Use with `onChange`. If it doesn't match a
   * selectable tab, the first one is displayed without calling `onChange`.
   */
  selectedTab?: string
  /** Accessible name of the tab list (e.g. "Project sections"). */
  'aria-label'?: string
  /** Id of the element naming the tab list. */
  'aria-labelledby'?: string
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

const isSelectable = (pane: React.ReactElement<TabPaneProps>) =>
  !pane.props.href && !pane.props.disabled

// Whitespace would break the space-separated IDREFs (aria-controls, aria-labelledby)
const toDomSafeId = (id: string) => id.trim().replace(/\s+/g, '-')

// Let browser shortcuts (Alt+Arrow, Cmd/Ctrl+Home…) through
const hasNoModifier = (event: React.KeyboardEvent) =>
  !event.altKey && !event.ctrlKey && !event.metaKey

const TabBar: React.FC<TabBarProps> & SubComponents = ({
  children,
  defaultTab,
  selectedTab,
  onChange,
  sideContent,
  keepMounted = false,
  activationMode = 'automatic',
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...props
}) => {
  const baseId = React.useId()
  const tablistRef = React.useRef<HTMLUListElement>(null)
  const [isRtl, setIsRtl] = React.useState(false)

  const panes = React.Children.toArray(
    children,
  ) as React.ReactElement<TabPaneProps>[]
  const tabPanes = panes.filter(pane => !pane.props.href)
  const linkPanes = panes.filter(pane => !!pane.props.href)
  const selectableTabIds = panes.filter(isSelectable).map(pane => pane.props.id)

  const [uncontrolledTab, setUncontrolledTab] = React.useState(defaultTab)
  const isControlled = selectedTab !== undefined
  const requestedTab = isControlled ? selectedTab : uncontrolledTab
  // Fall back to the first selectable tab when none is requested, or when the
  // requested one is missing (panes loaded later, removed, disabled…)
  const currentTab =
    requestedTab !== undefined && selectableTabIds.includes(requestedTab)
      ? requestedTab
      : selectableTabIds[0]

  const getTabDomId = (id: string) => `${baseId}-tab-${toDomSafeId(id)}`
  const paneIdByTabDomId = new Map(
    tabPanes.map(pane => [getTabDomId(pane.props.id), pane.props.id]),
  )

  const tabs = useTabStore({
    selectedId: currentTab !== undefined ? getTabDomId(currentTab) : null,
    setSelectedId: tabDomId => {
      const tabId = tabDomId ? paneIdByTabDomId.get(tabDomId) : undefined
      if (tabId === undefined || tabId === currentTab) return
      if (!isControlled) setUncontrolledTab(tabId)
      onChange?.(tabId)
    },
    selectOnMove: activationMode === 'automatic',
    rtl: isRtl,
  })

  // Only affects arrow keys, so no need for a layout effect (warns on SSR)
  const hasTabs = tabPanes.length > 0
  React.useEffect(() => {
    if (!tablistRef.current) return
    setIsRtl(getComputedStyle(tablistRef.current).direction === 'rtl')
  }, [hasTabs])

  if (!panes.length) return null

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
        <Flex gap={6} height={'inherit'}>
          {hasTabs && (
            <TabList
              store={tabs}
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledBy}
              render={
                <Flex
                  as="ul"
                  ref={tablistRef}
                  gap={6}
                  height={'inherit'}
                  m={0}
                  p={0}
                  sx={{ listStyle: 'none' }}
                />
              }
            >
              {tabPanes.map(pane => {
                const { id, title, count, countLabel, disabled } = pane.props

                return (
                  <Box as="li" role="presentation" key={id} height="100%">
                    <Tab
                      id={getTabDomId(id)}
                      store={tabs}
                      disabled={disabled}
                      // Disabled tabs are skipped by the arrow keys
                      accessibleWhenDisabled={false}
                      moveOnKeyPress={hasNoModifier}
                      render={
                        <TabHeader
                          title={title}
                          count={count}
                          countLabel={countLabel}
                          disabled={disabled}
                          isActive={id === currentTab}
                        />
                      }
                    />
                  </Box>
                )
              })}
            </TabList>
          )}

          {/* Links are not tabs: they live outside the tablist */}
          {linkPanes.map(pane => {
            const {
              id,
              title,
              count,
              countLabel,
              href,
              target,
              rel,
              disabled,
            } = pane.props

            return (
              <TabHeader
                key={id}
                title={title}
                count={count}
                countLabel={countLabel}
                href={href}
                target={target}
                rel={rel}
                disabled={disabled}
              />
            )
          })}
        </Flex>

        {sideContent && (
          <Flex alignItems={'center'} gap={4}>
            {sideContent}
          </Flex>
        )}
      </Flex>
      {tabPanes.map(pane => (
        <TabPanel
          key={pane.props.id}
          tabId={getTabDomId(pane.props.id)}
          store={tabs}
          unmountOnHide={!keepMounted}
          render={<Flex />}
        >
          {pane.props.children}
        </TabPanel>
      ))}
    </>
  )
}

TabBar.displayName = 'TabBar'
TabBar.Pane = TabPane

export default TabBar
