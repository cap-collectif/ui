import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import RankButton, { RankButtonProps } from './RankButton'

const meta: Meta = {
  title: 'Library/RankButton',
  component: RankButton,
  args: {
    label: '+3 Points',
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<RankButtonProps> = args => {
  const [points, setPoints] = React.useState(3)

  return (
    <RankButton
      {...args}
      label={`+${points} Points`}
      onLeftIconClick={() => {
        setPoints(points + 1)
      }}
      onRightIconClick={() => {
        setPoints(points - 1)
      }}
    ></RankButton>
  )
}
export const Disabled: Story<RankButtonProps> = args => {
  const [points, setPoints] = React.useState(3)

  return (
    <RankButton
      {...args}
      disabled
      label={`+${points} Points`}
      onLeftIconClick={() => {
        setPoints(points + 1)
      }}
      onRightIconClick={() => {
        setPoints(points - 1)
      }}
    ></RankButton>
  )
}
