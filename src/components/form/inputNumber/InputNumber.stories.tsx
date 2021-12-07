import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapInputSize } from '../enums'
import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import FormLabel from '../formLabel/FormLabel'
import InputNumber, { InputNumberProps } from './InputNumber'
import mdx from './InputNumber.mdx'

type Args = {
  errorMessage: string
  placeholder: string
  isInvalid: boolean
  isRequired: boolean
  variantSize: CapInputSize
}

const meta: Meta = {
  title: 'Library/Form/InputNumber',
  component: InputNumber,
  args: {
    placeholder: '1000',
    errorMessage: 'Error info.',
    isRequired: true,
    isInvalid: false,
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      page: mdx,
    },
  },
}

export default meta

export const Default: Story<InputNumberProps> = args => (
  <InputNumber {...args} />
)

export const WithInputNumberProperties: Story<Args> = ({
  errorMessage,
  ...args
}) => {
  const [isValid, setIsValid] = React.useState(true)
  return (
    <FormControl {...args} isInvalid={!isValid} width="300px">
      <FormLabel label="Décimaux entre 1 et 10" />
      <InputNumber
        placeholder="6,6"
        min={1}
        max={10}
        step={0.1}
        onBlur={e => {
          setIsValid(
            !(Number(e.target.value) < 1 || Number(e.target.value) > 10),
          )
        }}
      />
      <FormErrorMessage>Ca va pas ça... c'est pas bon</FormErrorMessage>
    </FormControl>
  )
}
