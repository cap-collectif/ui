import { Meta, Story } from '@storybook/react'

import { CapUIFontSize, CapUIFontWeight } from '../../styles'
import { Box } from '../box'
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

export const Default: Story<CircularStepProps> = args => (
  <>
    <Box
      as="h2"
      fontSize={CapUIFontSize.DisplaySmall}
      fontWeight={CapUIFontWeight.Semibold}
    >
      Default
    </Box>
    <Flex gap="md">
      <CircularStep {...args.small.empty} />
      <CircularStep {...args.small.one_third} />
      <CircularStep {...args.small.half} />
      <CircularStep {...args.small.full} />
    </Flex>
    <Flex gap="md" mt="sm">
      <CircularStep {...args.medium.empty} />
      <CircularStep {...args.medium.one_third} />
      <CircularStep {...args.medium.half} />
      <CircularStep {...args.medium.full} />
    </Flex>
    <Box
      as="h2"
      fontSize={CapUIFontSize.DisplaySmall}
      fontWeight={CapUIFontWeight.Semibold}
      mt="md"
    >
      Custom icon
    </Box>
    <Flex gap="md">
      <CircularStep {...args.custom_icon.empty} />
      <CircularStep {...args.custom_icon.one_third} />
      <CircularStep {...args.custom_icon.half} />
      <CircularStep {...args.custom_icon.full} />
    </Flex>
    <Box
      as="h2"
      fontSize={CapUIFontSize.DisplaySmall}
      fontWeight={CapUIFontWeight.Semibold}
      mt="md"
    >
      No icon
    </Box>
    <Flex gap="md">
      <CircularStep {...args.without_icon.empty} />
      <CircularStep {...args.without_icon.one_third} />
      <CircularStep {...args.without_icon.half} />
      <CircularStep {...args.without_icon.full} />
    </Flex>
  </>
)
Default.args = {
  small: {
    empty: { variantSize: 'small' },
    one_third: { variantSize: 'small', progress: 33 },
    half: { variantSize: 'small', progress: 66 },
    full: { variantSize: 'small', progress: 100 },
  },
  medium: {
    empty: { variantSize: 'medium' },
    one_third: { variantSize: 'medium', progress: 33 },
    half: { variantSize: 'medium', progress: 66 },
    full: { variantSize: 'medium', progress: 100 },
  },
  custom_icon: {
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
  },
  without_icon: {
    empty: { variantSize: 'small', icon: null },
    one_third: { variantSize: 'small', icon: null, progress: 33 },
    half: { variantSize: 'small', icon: null, progress: 66 },
    full: { variantSize: 'small', icon: null, progress: 100 },
  },
}
