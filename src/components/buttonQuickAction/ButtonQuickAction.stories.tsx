import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { ButtonGroup } from '../buttonGroup'
import { CapUIIcon } from '../icon'
import { ButtonQuickAction, ButtonQuickActionProps } from './ButtonQuickAction'
import mdx from './ButtonQuickAction.mdx'

const meta: Meta = {
  title: 'Library/ButtonQuickAction',
  component: ButtonQuickAction,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      page: mdx,
    },
  },
}

export default meta

export const Default: Story<ButtonQuickActionProps> = args => (
  <ButtonQuickAction {...args} />
)

Default.args = {
  variantColor: 'blue',
  label: 'Editer',
  icon: CapUIIcon.Pencil,
}
export const Group: Story<ButtonQuickActionProps> = args => {
  return (
    <ButtonGroup>
      <ButtonQuickAction {...args} />
      <ButtonQuickAction {...args} />
      <ButtonQuickAction {...args} />
      <ButtonQuickAction {...args} />
    </ButtonGroup>
  )
}
Group.args = {
  variantColor: 'blue',
  label: 'Editer',
  icon: CapUIIcon.Pencil,
}
