import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ImageProps } from './Image'
import Image from './Image'

const meta: Meta<ImageProps> = {
  title: 'Library/Image',
  component: Image,
  args: {},
}

export default meta

export const Default: Story<ImageProps> = () => (
  <Image isDevOrTest={true} alt={'Dan_'} src="https://bit.ly/dan-abramov" />
)
