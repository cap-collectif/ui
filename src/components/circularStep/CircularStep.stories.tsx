import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapUIIcon } from '../icon'
import Flex from '../layout/Flex'
import CircularStep, { CircularStepProps } from './CircularStep'

const meta: Meta = {
  title: 'Library/CircularStep',
  component: CircularStep,
  args: {
    children: 'Action',
  },
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Small: Story<CircularStepProps> = args => (
  <Flex gap={'md'}>
    <CircularStep {...args.empty} />
    <CircularStep {...args.one_third} />
    <CircularStep {...args.half} />
    <CircularStep {...args.full} />
  </Flex>
)
Small.args = {
  empty: { variantSize: 'small' },
  one_third: { variantSize: 'small', progress: 33 },
  half: { variantSize: 'small', progress: 66 },
  full: { variantSize: 'small', progress: 100 },
}

export const Medium: Story<CircularStepProps> = args => (
  <Flex gap={'md'}>
    <CircularStep {...args.empty} />
    <CircularStep {...args.one_third} />
    <CircularStep {...args.half} />
    <CircularStep {...args.full} />
  </Flex>
)
Medium.args = {
  empty: { variantSize: 'medium' },
  one_third: { variantSize: 'medium', progress: 33 },
  half: { variantSize: 'medium', progress: 66 },
  full: { variantSize: 'medium', progress: 100 },
}

export const WithoutIcon: Story<CircularStepProps> = args => (
  <Flex gap={'md'}>
    <CircularStep {...args.empty} />
    <CircularStep {...args.one_third} />
    <CircularStep {...args.half} />
    <CircularStep {...args.full} />
  </Flex>
)
WithoutIcon.args = {
  empty: { variantSize: 'small', icon: null },
  one_third: { variantSize: 'small', icon: null, progress: 33 },
  half: { variantSize: 'small', icon: null, progress: 66 },
  full: { variantSize: 'small', icon: null, progress: 100 },
}

export const WithCustomIcon: Story<CircularStepProps> = args => (
  <Flex gap={'md'}>
    <CircularStep {...args.empty} />
    <CircularStep {...args.one_third} />
    <CircularStep {...args.half} />
    <CircularStep {...args.full} />
  </Flex>
)
WithCustomIcon.args = {
  empty: { variantSize: 'small', icon: CapUIIcon.Culture },
  one_third: {
    variantSize: 'small',
    icon: CapUIIcon.Culture,
    progress: 33,
  },
  half: {
    variantSize: 'small',
    icon: CapUIIcon.Culture,
    progress: 66,
  },
  full: {
    variantSize: 'small',
    icon: CapUIIcon.Culture,
    progress: 100,
  },
}
