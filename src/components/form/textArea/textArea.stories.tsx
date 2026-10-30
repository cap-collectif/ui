import { Meta, StoryFn } from '@storybook/react'
import * as React from 'react'

import { CapInputSize } from '../enums'
import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import FormGuideline from '../formGuideline/FormGuideline'
import FormLabel from '../formLabel/FormLabel'
import TextArea, { TextAreaProps } from './TextArea'

type Args = {
  errorMessage: string
  placeholder: string
  isInvalid: boolean
  isRequired: boolean
  variantSize: CapInputSize
  maxLength?: number
}

const meta: Meta = {
  title: 'Library/Form/TextArea',
  component: TextArea,
  args: {
    variantSize: 'sm',
    variantColor: 'default',
    placeholder: 'Placeholder...',
    errorMessage: 'Error info.',
    isRequired: true,
    isInvalid: false,
  },
  argTypes: {
    variantSize: { control: 'select', options: ['sm', 'md'] },
    variantColor: { control: 'radio', options: ['default', 'hierarchy'] },
    maxLength: { control: 'number' },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: StoryFn<TextAreaProps> = args => {
  const [value, setValue] = React.useState('toto')
  return (
    <TextArea
      {...args}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setValue(e.target.value)
      }
    />
  )
}

export const WithAnErrorMessage: StoryFn<Args> = ({
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

export const WithFixedWidthAndMaxLength: StoryFn<Args> = ({
  errorMessage,
  placeholder,
  ...args
}) => {
  const [value, setValue] = React.useState('Beaucoup de caracteres et')
  return (
    <FormControl {...args} width="500px">
      <FormLabel label="Label" />
      <TextArea
        placeholder={placeholder}
        width="280px"
        maxLength={25}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value)
        }
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}
WithFixedWidthAndMaxLength.args = {
  errorMessage: "Je suis un message d'erreur somme toute assez long",
}

export const Disabled: StoryFn<Args> = ({ placeholder, ...args }) => {
  const [value, setValue] = React.useState('')
  return (
    <FormControl {...args} isDisabled width="500px">
      <TextArea
        placeholder={placeholder}
        width="280px"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value)
        }
      />
    </FormControl>
  )
}

export const WithLabel: StoryFn<Args> = ({ placeholder, ...args }) => {
  const [value, setValue] = React.useState('')
  return (
    <FormControl {...args} width="500px">
      <FormLabel label="Label" />
      <TextArea
        placeholder={placeholder}
        width="280px"
        value={value}
        maxLength={args.maxLength}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value)
        }
      />
    </FormControl>
  )
}

export const WithLabelDisabled: StoryFn<Args> = ({ placeholder, ...args }) => {
  const [value, setValue] = React.useState('')
  return (
    <FormControl {...args} isDisabled width="500px">
      <FormLabel label="Label" />
      <TextArea
        placeholder={placeholder}
        width="280px"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value)
        }
      />
    </FormControl>
  )
}

export const WithGuideline: StoryFn<Args> = ({ placeholder, ...args }) => {
  const [value, setValue] = React.useState('')
  return (
    <FormControl {...args} width="500px">
      <FormLabel label="Label" />
      <FormGuideline>Guideline</FormGuideline>
      <TextArea
        placeholder={placeholder}
        width="280px"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value)
        }
      />
    </FormControl>
  )
}

export const WithGuidelineDisabled: StoryFn<Args> = ({
  placeholder,
  ...args
}) => {
  const [value, setValue] = React.useState('')
  return (
    <FormControl {...args} isDisabled width="500px">
      <FormLabel label="Label" />
      <FormGuideline>Guideline</FormGuideline>
      <TextArea
        placeholder={placeholder}
        width="280px"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value)
        }
      />
    </FormControl>
  )
}
