import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import InlineSelect, { InlineSelectProps } from './InlineSelect'

const meta: Meta = {
  title: 'Library/InlineSelect',
  component: InlineSelect,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<InlineSelectProps> = () => {
  const [item, setItem] = React.useState('item2')

  return (
    <InlineSelect value={item} onChange={setItem}>
      <InlineSelect.Choice value="item1">Item 1</InlineSelect.Choice>
      <InlineSelect.Choice value="item2">Item 2</InlineSelect.Choice>
      <InlineSelect.Choice value="item3">Item 3</InlineSelect.Choice>
    </InlineSelect>
  )
}
