import type { Meta, StoryFn } from '@storybook/react-webpack5'

import { Switch, SwitchProps } from './Switch'

const meta: Meta<SwitchProps> = {
  title: 'Library/Switch',
  component: Switch,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: StoryFn = args => <Switch {...args} id="switch-1" />

export const Checked: StoryFn = args => <Switch {...args} id="switch-1" checked />

export const WithLabel: StoryFn = args => (
  <Switch {...args} id="switch-1">
    Toggle
  </Switch>
)

export const WithLabelLeft: StoryFn = args => (
  <Switch {...args} id="switch-1" direction="row-reverse">
    Toggle
  </Switch>
)

export const Disabled: StoryFn = () => (
  <Switch isDisabled id="switch-1">
    Toggle
  </Switch>
)

export const DisabledChecked: StoryFn = () => (
  <Switch isDisabled id="switch-1" checked />
)
