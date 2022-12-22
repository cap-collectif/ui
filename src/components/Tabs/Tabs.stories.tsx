import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Tabs, TabsProps } from './'
import { Flex } from '../layout'
import { Radio } from '../form'
import { Heading } from '../typography'

const meta: Meta<TabsProps> = {
  title: 'Library/Tabs',
  component: Tabs,
  args: {},
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: null,
      },
    },
  },
}

export default meta

export const Default: Story<TabsProps> = () => (
  <Tabs>
    <Tabs.ButtonList>
      <Tabs.Button id="tab1">
        <Flex as="button">
          <Radio id="radio">Check me 1</Radio>
        </Flex>
      </Tabs.Button>
      <Tabs.Button id="tab2">
        <Flex as="button">
          <Radio id="radio">Check me 2</Radio>
        </Flex>
      </Tabs.Button>
    </Tabs.ButtonList>
    <Tabs.PanelList>
      <Tabs.Panel id="tab1">
        <Heading>Content1</Heading>
      </Tabs.Panel>
      <Tabs.Panel id="tab2">
        <Heading>Content2</Heading>
      </Tabs.Panel>
    </Tabs.PanelList>
  </Tabs>
)
