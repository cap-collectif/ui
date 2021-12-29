import type { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { FormControl, FormLabel } from '../form'
import { Switch, SwitchProps } from './Switch'
import mdx from './Switch.mdx'

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
  <FormControl direction="row" spacing={2} {...args}>
    <FormLabel label="Toggle" htmlFor="switch-1" />
    <Switch id="switch-1" />
  </FormControl>
)

export const Disabled: Story = () => <Switch isDisabled id="switch-1" />

export const DisabledChecked: Story = () => (
  <Switch isDisabled id="switch-1" checked />
)
