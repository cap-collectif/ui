import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapUIIcon } from '../icon'
import { ButtonQuickAction, ButtonQuickActionProps } from './ButtonQuickAction'

const meta: Meta = {
  title: 'Library/ButtonQuickAction',
  component: ButtonQuickAction,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta

export const Primary: Story<ButtonQuickActionProps> = args => (
  <ButtonQuickAction {...args} />
)

Primary.args = {
  variantColor: 'primary',
  label: 'Edit',
  icon: CapUIIcon.Pencil,
}

export const Danger: Story<ButtonQuickActionProps> = args => (
  <ButtonQuickAction {...args} />
)

Danger.args = {
  variantColor: 'danger',
  label: 'Delete',
  icon: CapUIIcon.Trash,
}
