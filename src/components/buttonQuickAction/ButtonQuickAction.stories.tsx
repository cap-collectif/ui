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

export const Default: Story<ButtonQuickActionProps> = args => (
  <ButtonQuickAction {...args} />
)

Default.args = {
  variantColor: 'blue',
  label: 'Edit',
  icon: CapUIIcon.Pencil,
}
