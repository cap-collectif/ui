import {
  Tab as BaseTab,
  TabProps as BaseTabProps,
  useStoreState,
} from '@ariakit/react'
import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'

import {
  CapUIFontSize,
  CapUIFontWeight,
  CapUILineHeight,
  CapUIRadius,
} from '../../../styles'
import { Box, BoxProps } from '../../box'
import { Radio, RadioProps } from '../../form'
import { useTabs } from '../Tabs.context'

export interface TabsButtonProps
  extends BoxProps,
    Pick<BaseTabProps, 'disabled' | 'focusable'>,
    Pick<RadioProps, 'labelSx'> {}
const BorderBox = styled(motion(Box))``

const TabsButton: React.FC<TabsButtonProps> = ({
  children,
  labelSx,
  ...props
}) => {
  const { tabs } = useTabs()
  const generatedId = React.useId()
  const id = props.id ?? generatedId

  const currentTabId = useStoreState(tabs, 'selectedId')
  const panels = useStoreState(tabs.panels, 'items')
  const currentTabPanel = panels.find(
    panel => panel.tabId === currentTabId,
  )
  const currentTabIsEmpty = currentTabPanel?.element?.lastChild === null

  return (
    <BaseTab
      render={
        <Radio
          id={id}
          checked={id === currentTabId}
          position="relative"
          labelSx={{
            cursor: 'pointer',
            transition: 'box-shadow 0.2s, opacity 0.2s',
            width: '100%',
            px: 4,
            py: 2,
            justifyContent: 'center !important',
            backgroundColor:
              id === currentTabId ? '#F7F7F8' : 'transparent',
            borderTopLeftRadius:
              id === currentTabId
                ? CapUIRadius.Accordion
                : CapUIRadius.Normal,
            borderTopRightRadius:
              id === currentTabId
                ? CapUIRadius.Accordion
                : CapUIRadius.Normal,
            borderBottomLeftRadius: currentTabIsEmpty
              ? CapUIRadius.Accordion
              : 0,
            borderBottomRightRadius: currentTabIsEmpty
              ? CapUIRadius.Accordion
              : 0,
            ...labelSx,
          }}
          className="tab__button"
          isDisabled={props.disabled}
          {...props}
        />
      }
      id={id}
      store={tabs}
    >
      <Box
        as="span"
        position="relative"
        fontSize={CapUIFontSize.BodyRegular}
        fontWeight={CapUIFontWeight.Normal}
        lineHeight={CapUILineHeight.M}
        color={props.disabled ? 'gray.500' : 'gray.800'}
      >
        {children}
      </Box>
      {id === currentTabId && (
        <BorderBox
          layoutId="tabs-border-box"
          className="tab--border-box"
          transition={{ type: 'spring', damping: 30, stiffness: 500 }}
          position="absolute"
        />
      )}
    </BaseTab>
  )
}
TabsButton.displayName = 'Button'

export default TabsButton
