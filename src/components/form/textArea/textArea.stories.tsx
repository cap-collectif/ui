import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapInputSize } from '../enums'
import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import FormLabel from '../formLabel/FormLabel'
import TextArea, { TextAreaProps } from './TextArea'

type Args = {
  errorMessage: string
  placeholder: string
  isInvalid: boolean
  isRequired: boolean
  variantSize: CapInputSize
}

const meta: Meta = {
  title: 'Library/Form/TextArea',
  component: TextArea,
  args: {
    placeholder: 'Placeholder...',
    errorMessage: 'Error info.',
    isRequired: true,
    isInvalid: false,
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<TextAreaProps> = args => {
  const [value, setValue] = React.useState('toto')
  return (
    <TextArea
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
      maxLength={40}
    />
  )
}

export const WithAnErrorMessage: Story<Args> = ({
  errorMessage,
  placeholder,
  ...args
}) => (
  <FormControl {...args}>
    <TextArea placeholder={placeholder} />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

WithAnErrorMessage.args = {
  isInvalid: true,
}

export const WithFixedWidth: Story<Args> = ({
  errorMessage,
  placeholder,
  ...args
}) => {
  const [value, setValue] = React.useState('')
  return (
    <FormControl {...args} width="500px">
      <FormLabel label="Soyez concis !" />
      <TextArea
        placeholder={placeholder}
        width="280px"
        maxLength={25}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}
WithFixedWidth.args = {
  errorMessage: "Je suis un message d'erreur somme toute assez long",
}
