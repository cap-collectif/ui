import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { largeThumbnail } from '../../assets/images'
import {
  Card,
  CardCover,
  CardCoverImage,
  CardContent,
  CardProps,
  CardTag,
  CardTagLabel,
} from './'
import './CardCover'

const meta: Meta<CardProps> = {
  title: 'Library/Card',
  component: Card,
  args: { format: 'vertical' },
  parameters: {
    controls: { expanded: true },
    backgrounds: { default: 'light' },
  },
  argTypes: {
    format: { control: 'select', options: ['horizontal', 'vertical'] },
  },
}

export default meta

export const Default: Story<CardProps> = args => (
  <Card {...args}>
    <CardCover>
      <CardCoverImage src={largeThumbnail} />
      <CardTag variantColor="success">
        <CardTagLabel>Inscription Ouverte</CardTagLabel>
      </CardTag>
    </CardCover>
    <CardContent
      primaryInfo="Primary info"
      secondaryInfo="secondary info"
      href="https://monsuperprojet.com"
      target="_blank"
    />
  </Card>
)
