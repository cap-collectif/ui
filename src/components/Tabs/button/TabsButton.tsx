import * as React from 'react'
import { Box, BoxProps } from '../../box'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Tab as BaseTab, TabProps as BaseTabProps } from 'reakit/Tab'
import { useTabs } from '../Tabs.context'
import { Radio } from '../../form'
import { CapUIFontWeight, CapUILineHeight, CapUIRadius } from '../../../styles'

export interface TabsButtonProps
  extends BoxProps,
    Pick<BaseTabProps, 'disabled' | 'focusable'> {}
const BorderBox = styled(motion(Box))``

const TabsButton: React.FC<TabsButtonProps> = ({ children, ...props }) => {
  const { tabs } = useTabs()
  const [id, setId] = React.useState<string | undefined>(undefined)
  const $tab = React.useRef<HTMLElement>()
  React.useEffect(() => {
    if ($tab.current) {
      setId($tab.current.id)
    }
  }, [])

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
        px: '100px',
        py: 2,
        justifyContent: 'center !important',
        backgroundColor: id === tabs.currentId ? '#F7F7F8' : 'transparent',
        borderTopLeftRadius:
          id === tabs.currentId ? CapUIRadius.Accordion : CapUIRadius.Normal,
        borderTopRightRadius:
          id === tabs.currentId ? CapUIRadius.Accordion : CapUIRadius.Normal,
      }}
      className="tab__button"
      {...props}
    >
      <Box
        as="span"
        zIndex={1}
        position="relative"
        fontSize={3}
        fontWeight={CapUIFontWeight.Normal}
        lineHeight={CapUILineHeight.Base}
        color="gray.800"
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