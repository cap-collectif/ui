import React from 'react'

export type TabPaneProps = {
  id: string
  title: React.ReactNode
  count?: number
  /**
   * Text read by screen readers instead of the bare `count`, to give it a
   * meaning (e.g. "3 contributions").
   */
  countLabel?: string
  /** Renders the header as a link (outside of the tablist) instead of a tab. */
  href?: string
  target?: string
  rel?: string
  disabled?: boolean
  children?: React.ReactNode
}

/**
 * Describes a tab of a `TabBar`. Its props are read by `TabBar`, which renders
 * the header and the panel itself.
 */
export const TabPane: React.FC<TabPaneProps> = ({ children }) => <>{children}</>

TabPane.displayName = 'TabPane'

export default TabPane
