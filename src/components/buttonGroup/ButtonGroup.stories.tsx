import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import Button from '../button/Button'
import ButtonGroup, { ButtonGroupProps } from './ButtonGroup'
import mdx from './ButtonGroup.mdx'

const meta: Meta = {
  title: 'Library/ButtonGroup',
  component: ButtonGroup,
  args: {
    children: 'Action',
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      page: mdx,
    },
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
