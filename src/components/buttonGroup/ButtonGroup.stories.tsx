import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import Button from '../button/Button'
import ButtonGroup, { ButtonGroupProps } from './ButtonGroup'

const meta: Meta = {
  title: 'Library/ButtonGroup',
  component: ButtonGroup,
  args: {
    children: 'Action',
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<ButtonGroupProps> = args => (
  <ButtonGroup>
    <Button {...args} variant="primary" />
    <Button {...args} variant="secondary" />
    <Button {...args} variant="tertiary" />
    <Button {...args} variant="link" />
  </ButtonGroup>
)
