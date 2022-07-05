import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapInputSize } from '../enums'
import FormControl from '../formControl/FormControl'
import ColorPicker, { ColorPickerProps } from './ColorPicker'
import mdx from './ColorPicker.mdx'

type Args = {
  errorMessage: string
  placeholder: string
  isInvalid: boolean
  isRequired: boolean
  variantSize: CapInputSize
  isDisabled: boolean
}

const meta: Meta = {
  title: 'Library/Form/ColorPicker',
  component: ColorPicker,
  args: {
    isDisabled: false,
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      page: mdx,
    },
  },
}

export default meta

export const Default: Story<ColorPickerProps> = args => {
  const [value, setValue] = React.useState<string | null>('#32a852ff')
  return <ColorPicker {...args} value={value} onChange={setValue} />
}

export const Disabled: Story<Args> = ({ placeholder, ...args }) => {
  const [value, setValue] = React.useState<string | null>('#32a852')
  return (
    <FormControl {...args}>
      <ColorPicker value={value} onChange={setValue} />
    </FormControl>
  )
}
Disabled.args = {
  isDisabled: true,
}
