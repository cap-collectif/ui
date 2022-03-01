import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Link, LinkProps } from './'

const meta: Meta<LinkProps> = {
  title: 'Library/Link',
  component: Link,
  parameters: {
    controls: { expanded: true },  },
}

export default meta

export const Default: Story<LinkProps> = args => (
  <Link href="https://google.com" {...args}>
    Click on me
  </Link>
)
