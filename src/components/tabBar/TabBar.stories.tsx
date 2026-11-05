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
    // `key`: remount when `defaultTab` changes, it is only read on mount
    <TabBar aria-label="Équipe" key={args.defaultTab} {...args}>
      <TabPane id="agui" title="agui">
        <Flex m={4}>Lili présidente</Flex>
      </TabPane>
      <TabPane id="myriam" title="myriam">
        <Flex m={4}>Cheffe pâtissière végane</Flex>
      </TabPane>
      <TabPane
        id="alex"
        title="alex"
        count={666}
        countLabel="666 notifications"
      >
        <Flex m={4}>Pianiste de l'équipe</Flex>
      </TabPane>
      <TabPane id="disabled" title="Onglet désactivé" disabled>
        <Flex m={4}>Jamais affiché</Flex>
      </TabPane>
      <TabPane
        id="capco"
        title="Onglet avec redirection"
        href={'https://www.cap-collectif.com/'}
      />
    </TabBar>
  )
}

const tabIds = ['agui', 'myriam', 'alex']

export const Default = Template.bind({})
Default.args = {
  defaultTab: 'agui',
  activationMode: 'automatic',
  keepMounted: false,
}
Default.argTypes = {
  defaultTab: { control: 'select', options: tabIds },
  // Controlled mode: the selection only follows this control, clicks are
  // reported in the Actions panel through `onChange`
  selectedTab: {
    control: 'select',
    options: ['(uncontrolled)', ...tabIds],
    mapping: { '(uncontrolled)': undefined },
  },
  activationMode: {
    control: 'inline-radio',
    options: ['automatic', 'manual'],
  },
}

export const WithSideContent: StoryFn<TabBarProps> = args => {
  return (
    <TabBar
      aria-label="Équipe"
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
      <TabPane
        id="alex"
        title="alex"
        count={666}
        countLabel="666 notifications"
      >
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
