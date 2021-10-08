import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import FormLabel from '../formLabel/FormLabel'
import Number, { NumberProps } from './Number'

type Args = {
  errorMessage: string
  placeholder: string
  isInvalid: boolean
  isRequired: boolean
  variantSize: 'md' | 'sm'
}

const meta: Meta = {
  title: 'Library/Form/Number',
  component: Number,
  args: {
    placeholder: '1000',
    errorMessage: 'Error info.',
    isRequired: true,
    isInvalid: false,
  },
  argTypes: {
    variantSize: {
      options: ['sm', 'md'],
      control: { type: 'select' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<NumberProps> = args => <Number {...args} />

export const WithNumberProperties: Story<Args> = ({
  errorMessage,
  ...args
}) => {
  const [isValid, setIsValid] = React.useState(true)
  return (
    <FormControl {...args} isInvalid={!isValid} width="300px">
      <FormLabel label="Décimaux entre 1 et 10" />
      <Number
        placeholder="6,6"
        min={1}
        max={10}
        step={0.1}
        onBlur={e => {
          setIsValid(!(e.target.value < 1 || e.target.value > 10))
        }}
      />
      <FormErrorMessage>Ca va pas ça... c'est pas bon</FormErrorMessage>
    </FormControl>
  )
}
