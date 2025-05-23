import { motion } from 'framer-motion'
import * as React from 'react'
import { Tab as BaseTab, TabProps as BaseTabProps } from 'reakit/Tab'
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
  const [id, setId] = React.useState<string | undefined>(undefined)
  const $tab = React.useRef<HTMLElement>()
  React.useEffect(() => {
    if ($tab.current) {
      setId($tab.current.id)
    }
  }, [])

  const currentTab = tabs.currentId
  const currentTabPanel = tabs.panels.find(
    panel => panel.groupId === currentTab,
  )
  const currentTabIsEmpty = currentTabPanel?.ref.current?.lastChild === null

  return (
    <BaseTab
      as={Radio}
      ref={$tab}
      checked={id === tabs.currentId}
      {...tabs}
      position="relative"
      labelSx={{
        cursor: 'pointer',
        transition: 'box-shadow 0.2s, opacity 0.2s',
        width: '100%',
        px: 4,
        py: 2,
        justifyContent: 'center !important',
        backgroundColor: id === tabs.currentId ? '#F7F7F8' : 'transparent',
        borderTopLeftRadius:
          id === tabs.currentId ? CapUIRadius.Accordion : CapUIRadius.Normal,
        borderTopRightRadius:
          id === tabs.currentId ? CapUIRadius.Accordion : CapUIRadius.Normal,
        borderBottomLeftRadius: currentTabIsEmpty ? CapUIRadius.Accordion : 0,
        borderBottomRightRadius: currentTabIsEmpty ? CapUIRadius.Accordion : 0,
        ...labelSx,
      }}
      className="tab__button"
      isDisabled={props.disabled}
      {...props}
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
      {id === tabs.currentId && (
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
