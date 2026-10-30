import { Meta, StoryFn } from '@storybook/react-webpack5'
import * as React from 'react'

import { Box } from '../../box/Box'
import { CapInputSize } from '../enums'
import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import FormLabel from '../formLabel/FormLabel'
import ColorPicker from './ColorPicker'
import { CapColorPickerVariant } from './enums'

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
    isRequired: false,
    isInvalid: false,
    errorMessage: '',
  },
  argTypes: { variantSize: { control: 'select', options: ['sm', 'md'] } },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: StoryFn<Args> = args => {
  const [value, setValue] = React.useState<string | null>('#32a852')
  return <ColorPicker {...args} value={value} onChange={setValue} />
}
export const TwitterVariant: StoryFn<Args> = args => {
  const [value, setValue] = React.useState<string | null>('#32a852')
  return (
    <ColorPicker
      {...args}
      value={value}
      variant={CapColorPickerVariant.Twitter}
      onChange={setValue}
    />
  )
}

export const WithOpacity: StoryFn<Args> = args => {
  const [value, setValue] = React.useState<string | null>('#32a85277')
  return <ColorPicker {...args} value={value} onChange={setValue} withOpacity />
}

export const Disabled: StoryFn<Args> = ({ placeholder, ...args }) => {
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

export const WithLabel: StoryFn<Args> = args => {
  const [value, setValue] = React.useState<string | null>('#32a85277')
  return (
    <FormControl {...args}>
      <FormLabel label="Label">
        {!args.isRequired && (
          <Box as="span" color="gray.500">
            facultatif
          </Box>
        )}
      </FormLabel>
      <ColorPicker value={value} onChange={setValue} withOpacity />
    </FormControl>
  )
}

export const WithErrorMessage: StoryFn<Args> = ({ errorMessage, ...args }) => {
  const [value, setValue] = React.useState<string | null>('#32a85277')
  return (
    <FormControl {...args}>
      <ColorPicker value={value} onChange={setValue} withOpacity />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}
WithErrorMessage.args = {
  isInvalid: true,
  errorMessage: 'Error info.',
}
