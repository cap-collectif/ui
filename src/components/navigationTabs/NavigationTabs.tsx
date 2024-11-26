import { Meta, Story } from '@storybook/react'
import React from 'react'

import { NavigationTabsProps, NavigationTabs } from '.'

const meta: Meta<NavigationTabsProps> = {
  title: 'Library/NavigationTabs',
  component: NavigationTabs,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta
const Template: Story<NavigationTabsProps> = args => {
  return (
    <NavigationTabs
      {...args}
      selectedTab={args.links[0].id}
      onChange={newTab => {
        console.log(newTab)
      }}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  selectedTab: 'users_list',
  links: [
    { to: '', id: 'users_list', label: 'Users List' },
    {
      to: '',
      id: 'users_invitations',

      label: 'Invitations',
    },
    { to: '', id: 'users_groups', label: 'Groups' },
    { to: '', id: 'users_types', label: 'User Types', count: 99 },
  ],
  path: '',
}
