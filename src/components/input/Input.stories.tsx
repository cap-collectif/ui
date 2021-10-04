import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Box } from '../box/Box'
import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import { FormGuideline } from '../formGuideline'
import FormLabel from '../formLabel/FormLabel'
import Input, { InputProps } from './Input'

type Args = {
  errorMessage: string
  placeholder: string
  isInvalid: boolean
  isRequired: boolean
}

const meta: Meta = {
  title: 'Library/Form/Input',
  component: Input,
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

export const Default: Story<InputProps> = args => <Input {...args} />

export const WithAnErrorMessage: Story<Args> = ({
  errorMessage,
  placeholder,
  ...args
}) => (
  <FormControl {...args}>
    <Input placeholder={placeholder} />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

WithAnErrorMessage.args = {
  isInvalid: true,
}

export const WithFixedWidthAndLabel: Story<Args> = ({
  errorMessage,
  placeholder,
  ...args
}) => (
  <FormControl {...args} width="300px">
    <FormLabel htmlFor="name">
      <>Label</>
      {!args.isRequired && (
        <Box as="span" color="gray.500">
          facultatif
        </Box>
      )}
    </FormLabel>
    <Input placeholder={placeholder} id="name" />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

export const WithGuideline: Story<Args> = ({
  errorMessage,
  placeholder,
  ...args
}) => (
  <FormControl {...args} width="300px">
    <FormLabel htmlFor="name">
      <>Label</>
    </FormLabel>
    <FormGuideline>Guidelines</FormGuideline>
    <Input placeholder={placeholder} id="name" />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)
