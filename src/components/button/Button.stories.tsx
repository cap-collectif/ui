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

const Template: Story<ButtonProps> = args => (
  <Box
    backgroundColor={'neutral-gray.lighter'}
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
    <Button {...args} variantSize="small" />
    <Button {...args} variantSize="medium" />
    <Button {...args} variantSize="big" />
    <Button {...args} leftIcon={CapUIIcon.Add} />
    <Button {...args} rightIcon={CapUIIcon.Add} />
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
Loading.args = { isLoading: true }
