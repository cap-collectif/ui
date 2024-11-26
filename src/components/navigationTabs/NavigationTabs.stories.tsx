import { Meta, Story } from '@storybook/react'
import React from 'react'

import NavigationTabs, { NavigationTabsProps } from './NavigationTabs'

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
