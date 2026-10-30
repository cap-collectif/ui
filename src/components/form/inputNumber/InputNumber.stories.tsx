import { Meta, StoryFn } from '@storybook/react'
import * as React from 'react'

import { CapInputSize } from '../enums'
import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import { FormGuideline } from '../formGuideline'
import FormLabel from '../formLabel/FormLabel'
import InputNumber, { InputNumberProps } from './InputNumber'

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
    placeholder: '',
    errorMessage: 'Error info.',
    isRequired: true,
    isInvalid: false,
    isDisabled: false,
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: StoryFn<InputNumberProps> = args => (
  <InputNumber {...args} />
)

export const WithError: StoryFn<Args> = ({ errorMessage, ...args }) => {
  return (
    <FormControl {...args} isInvalid width="300px">
      <InputNumber placeholder="6" />
      <FormErrorMessage>Error Info</FormErrorMessage>
    </FormControl>
  )
}

export const WithLabel: StoryFn<Args> = ({ errorMessage, ...args }) => {
  return (
    <FormControl {...args} width="300px">
      <FormLabel label="Label" />
      <InputNumber placeholder="6" />
      <FormErrorMessage>Error Info</FormErrorMessage>
    </FormControl>
  )
}

export const WithLabelError: StoryFn<Args> = ({ errorMessage, ...args }) => {
  return (
    <FormControl {...args} isInvalid width="300px">
      <FormLabel label="Label" />
      <InputNumber placeholder="6" />
      <FormErrorMessage>Error Info</FormErrorMessage>
    </FormControl>
  )
}

export const WithGuideline: StoryFn<Args> = ({ errorMessage, ...args }) => {
  return (
    <FormControl {...args} width="300px">
      <FormLabel label="Label" />
      <FormGuideline>Guideline</FormGuideline>
      <InputNumber placeholder="6" />
      <FormErrorMessage>Error Info</FormErrorMessage>
    </FormControl>
  )
}

export const WithGuidelineError: StoryFn<Args> = ({ errorMessage, ...args }) => {
  return (
    <FormControl {...args} isInvalid width="300px">
      <FormLabel label="Label" />
      <FormGuideline>Guideline</FormGuideline>
      <InputNumber placeholder="6" />
      <FormErrorMessage>Error Info</FormErrorMessage>
    </FormControl>
  )
}

export const Disabled: StoryFn<Args> = ({ errorMessage, ...args }) => {
  return (
    <FormControl {...args} isDisabled width="300px">
      <InputNumber placeholder="6" />
    </FormControl>
  )
}

export const MediumSize: StoryFn<Args> = ({ errorMessage, ...args }) => {
  return (
    <FormControl {...args} variantSize={CapInputSize.Md} width="300px">
      <InputNumber placeholder="6" />
    </FormControl>
  )
}

export const WithInputNumberProperties: StoryFn<Args> = ({
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
      <FormErrorMessage>Error Info</FormErrorMessage>
    </FormControl>
  )
}
