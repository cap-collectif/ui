import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Flex } from '../layout'
import TabBar, { TabBarProps } from './TabBar'
import TabPane from './pane/TabPane'

const meta: Meta<TabBarProps> = {
  title: 'Library/TabBar',
  component: TabBar,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta
const Template: Story<TabBarProps> = () => {
  return (
    <TabBar defaultTab="agui">
      <TabPane id="agui" title="agui">
        Lili présidente
      </TabPane>
      <TabPane id="myriam" title="myriam">
        <Flex alignItems={'center'} gap={4}>
          Cheffe pâtissière végane
        </Flex>
      </TabPane>
      <TabPane id="alex" title="alex" count={666}>
        Pianiste de l'équipe
      </TabPane>
      <TabPane
        id="capco"
        title="Onglet avec redirection"
        href={'https://www.cap-collectif.com/'}
      />
    </TabBar>
  )
}

export const Default = Template.bind({})
