import React from 'react'
import { Meta, Story } from '@storybook/react'

import { SPACING } from '../../styles/theme'
import { Box } from '../box'
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

const Template: Story<ButtonProps & { backgroundColor?: string }> = ({ backgroundColor = 'neutral-gray.lighter', ...args }) => (
  <Box
    backgroundColor={backgroundColor}
    width={'50vw'}
    height={'100%'}
    m={'auto'}
    p={'5%'}
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'}
    gap={SPACING.md}
  >
    <Button {...args} variantSize="small" variantColor="primary" />
    <Button {...args} variantSize="medium" variantColor="primary" />
    <Button {...args} variantSize="big" variantColor="primary" />

    <Button {...args} variantSize="small" variantColor="danger" />
    <Button {...args} variantSize="medium" variantColor="danger" />
    <Button {...args} variantSize="big" variantColor="danger" />

    <Button {...args} variantSize="small" variantColor="hierarchy" />
    <Button {...args} variantSize="medium" variantColor="hierarchy" />
    <Button {...args} variantSize="big" variantColor="hierarchy" />

    <Button {...args} leftIcon={CapUIIcon.Add} variantColor="primary" />
    <Button {...args} rightIcon={CapUIIcon.Add} variantColor="danger" />
  </Box>
)

export const Primary = Template.bind({})
Primary.args = { variant: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }

export const Tertiary = Template.bind({})
Tertiary.args = { variant: 'tertiary' }

export const Link = Template.bind({})
Link.args = { variant: 'link' }

export const Loading = Template.bind({})
Loading.args = { isLoading: true, backgroundColor: 'white' }
