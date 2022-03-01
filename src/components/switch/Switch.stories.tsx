import type { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Switch, SwitchProps } from './Switch'
import mdx from './Switch.md'

const meta: Meta<SwitchProps> = {
  title: 'Library/Switch',
  component: Switch,
  parameters: {
    controls: { expanded: true },
    docs: {
      page: mdx,
    },
  },
}

export default meta

export const Default: Story = args => <Switch {...args} id="switch-1" />

export const Checked: Story = args => <Switch {...args} id="switch-1" checked />

export const WithLabel: Story = args => (
  <Switch {...args} id="switch-1">
    Toggle
  </Switch>
)

export const WithLabelLeft: Story = args => (
  <Switch {...args} id="switch-1" direction="row-reverse">
    Toggle
  </Switch>
)

export const Disabled: Story = () => <Switch isDisabled id="switch-1" />

export const DisabledChecked: Story = () => (
  <Switch isDisabled id="switch-1" checked />
)
