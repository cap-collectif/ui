import { Meta, Story } from '@storybook/react'

import { CapUIIcon } from '../icon'
import Button, { ButtonProps } from './Button'

const ICONS = Object.values(CapUIIcon).sort()

const meta: Meta = {
  title: 'Library/Button',
  component: Button,
  args: {
    children: 'Action',
  },
  argTypes: {
    leftIcon: {
      options: ICONS,
    },
    rightIcon: {
      options: ICONS,
    },
    onClick: {
      action: 'clicked',
      description: 'onClick',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { variant: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }

export const Tertiary = Template.bind({})
Tertiary.args = { variant: 'tertiary' }

export const Link = Template.bind({})
Link.args = { variant: 'link' }

export const WithIcon = Template.bind({})
WithIcon.args = { leftIcon: CapUIIcon.Add }

export const Loading = Template.bind({})
Loading.args = { isLoading: true }
