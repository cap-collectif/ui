import { Meta, StoryFn } from '@storybook/react'
import { fn } from '@storybook/test'
import React from 'react'

import { Button } from '../button'
import { CapUIIcon, Icon } from '../icon'
import { Flex } from '../layout'
import { Link } from '../link'
import TabBar, { TabBarProps } from './TabBar'
import TabPane from './pane/TabPane'

const meta: Meta<TabBarProps> = {
  title: 'Library/TabBar',
  component: TabBar,
  args: { onChange: fn() },
  parameters: {
    layout: 'top',
    controls: { expanded: true },
  },
}

export default meta
const Template: StoryFn<TabBarProps> = args => {
  return (
    <TabBar {...args} defaultTab="agui">
      <TabPane id="agui" title="agui">
        <Flex m={4}>Lili présidente</Flex>
      </TabPane>
      <TabPane id="myriam" title="myriam">
        <Flex m={4}>Cheffe pâtissière végane</Flex>
      </TabPane>
      <TabPane id="alex" title="alex" count={666}>
        <Flex m={4}>Pianiste de l'équipe</Flex>
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

export const WithSideContent: StoryFn<TabBarProps> = args => {
  return (
    <TabBar
      {...args}
      defaultTab="agui"
      sideContent={
        <>
          <Link
            href={'https://www.cap-collectif.com/'}
            display={'flex'}
            color="primary.base"
            mr={0}
            ml={'auto'}
            target="_blank"
          >
            <Icon name={CapUIIcon.Preview} />
            Cap Collectif
          </Link>
          <Button>I love cats</Button>
        </>
      }
    >
      <TabPane id="agui" title="agui">
        <Flex m={4}>Lili présidente</Flex>
      </TabPane>
      <TabPane id="myriam" title="myriam">
        <Flex m={4}>Cheffe pâtissière végane</Flex>
      </TabPane>
      <TabPane id="alex" title="alex" count={666}>
        <Flex m={4}>Pianiste de l'équipe</Flex>
      </TabPane>
      <TabPane
        id="capco"
        title="Onglet avec redirection"
        href={'https://www.cap-collectif.com/'}
      />
    </TabBar>
  )
}
