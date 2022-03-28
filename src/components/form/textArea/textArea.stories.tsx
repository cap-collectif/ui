import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { CapInputSize } from '../enums'
import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import FormGuideline from '../formGuideline/FormGuideline'
import FormLabel from '../formLabel/FormLabel'
import TextArea, { TextAreaProps } from './TextArea'
import mdx from './TextArea.mdx'

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
    docs: {
      page: mdx,
    },
  },
}

export default meta

export const Default: Story<TextAreaProps> = args => {
  const [value, setValue] = React.useState('toto')
  return (
    <TextArea
      {...args}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setValue(e.target.value)
      }
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

export const WithFixedWidthAndMaxLength: Story<Args> = ({
  errorMessage,
  placeholder,
  ...args
}) => {
  const [value, setValue] = React.useState('Beaucoup de caracteres et')
  return (
    <FormControl {...args} width="500px">
      <TextArea
        placeholder={placeholder}
        width="280px"
        maxLength={25}
        maxLengthMessage="Vous avez atteint le nombre maximum de caractères"
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

export const Disabled: Story<Args> = ({ placeholder, ...args }) => {
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

export const WithLabel: Story<Args> = ({ placeholder, ...args }) => {
  const [value, setValue] = React.useState('')
  return (
    <FormControl {...args} width="500px">
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

export const WithLabelDisabled: Story<Args> = ({ placeholder, ...args }) => {
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

export const WithLabelErrorState: Story<Args> = ({ placeholder, ...args }) => {
  const [value, setValue] = React.useState('')
  return (
    <FormControl {...args} isInvalid width="500px">
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

export const WithGuideline: Story<Args> = ({ placeholder, ...args }) => {
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

export const WithGuidelineDisabled: Story<Args> = ({
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

export const WithGuidelineErrorState: Story<Args> = ({
  placeholder,
  ...args
}) => {
  const [value, setValue] = React.useState('')
  return (
    <FormControl {...args} isInvalid width="500px">
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
