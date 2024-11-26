import { Meta, Story } from '@storybook/react'
import React from 'react'

import TabBar, { TabBarProps } from './TabBar'

const meta: Meta<TabBarProps> = {
  title: 'Library/TabBar',
  component: TabBar,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta
const Template: Story<TabBarProps> = args => {
  return (
    <TabBar
      {...args}
      onChange={newTab => {
        console.log('Switching tabs! Currently on ', newTab)
      }}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  defaultTab: 'users_invitations',
  links: [
    { to: '', url: '', id: 'users_list', label: 'Users List' },
    {
      to: '',
      id: 'users_invitations',

      label: 'Invitations',
    },
    { to: '', id: 'users_groups', label: 'Groups' },
    { to: '', id: 'users_types', label: 'User Types', count: 99 },
  ],
}
