import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Flex } from '../layout'
import ProgressBar from './ProgressBar'

type Args = {
  totalSteps: number
  currentStep: number
  color: string
}

const meta: Meta = {
  title: 'Library/ProgressBar',
  component: ProgressBar,
  args: {
    totalSteps: 5,
    currentStep: 2,
  },
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Default: Story<Args> = ({ ...args }) => (
  <Flex width="200px">
    <ProgressBar {...args} />
  </Flex>
)

export const oneStep: Story<Args> = ({ ...args }) => (
  <Flex width="200px">
    <ProgressBar {...args} />
  </Flex>
)
oneStep.args = {
  totalSteps: 1,
  currentStep: 0,
  color: 'red.500',
}
