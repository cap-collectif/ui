import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import Button from './Button'
import { ButtonProps } from './Button'

const meta: Meta = {
  title: 'Library/Button',
  component: Button,
  args: {
    children: 'Action',
  },
  parameters: {
    layout: 'centered',
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
