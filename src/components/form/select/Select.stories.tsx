import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Icon, CapUIIcon } from '../../icon'
import { Flex } from '../../layout/Flex'
import { Text } from '../../typography/Text'
import { CapInputSize } from '../enums'
import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import FormLabel from '../formLabel/FormLabel'
import AsyncSelect from './AsyncSelect'
import CreatableSelect from './CreatableSelect'
import Select from './Select'

type Args = {
  errorMessage: string
  placeholder: string
  isInvalid: boolean
  isDisabled: boolean
  isRequired: boolean
  variantSize: CapInputSize
}

const meta: Meta = {
  title: 'Library/Form/Select',
  component: Select,
  args: {
    placeholder: 'Placeholder...',
    errorMessage: 'Error info.',
    isRequired: true,
    isInvalid: false,
    isMulti: false,
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const colourOptions = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' },
]

export const Default: Story<Args> = ({
  errorMessage,
  placeholder,
  ...args
}) => (
  <FormControl {...args} width="500px">
    <FormLabel label="Choisissez une couleur :" />
    <Select
      placeholder={placeholder}
      width="250px"
      options={colourOptions}
      defaultValue={colourOptions[0]}
      inputId="color"
    />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

export const Multi: Story<Args> = ({ errorMessage, placeholder, ...args }) => (
  <FormControl {...args} width="500px">
    <FormLabel label="Choisissez DES couleurs :" />
    <Select
      placeholder={placeholder}
      width="250px"
      options={colourOptions}
      defaultValue={colourOptions[0]}
      inputId="color"
      isMulti
    />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

const formatCreateLabel = (userInput: string) => (
  <Flex>
    <Icon name={CapUIIcon.Add} color="blue.500" />
    <Text fontWeight={600} color="blue.500">
      Ajouter : {userInput}
    </Text>
  </Flex>
)

const mailOptions = [
  { value: 'assistance', label: 'assistance@cap-collectif.com' },
  { value: 'tech', label: 'tech@cap-collectif.com' },
  { value: 'tous', label: 'tous@cap-collectif.com' },
]

export const Creatable: Story<Args> = ({
  errorMessage,
  placeholder,
  ...args
}) => (
  <FormControl {...args} width="500px">
    <FormLabel label="Choisissez ou créez une adresse mail :" />
    <CreatableSelect
      placeholder={placeholder}
      options={mailOptions}
      inputId="color"
      formatCreateLabel={formatCreateLabel}
    />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

export const CreatableMulti: Story<Args> = ({
  errorMessage,
  placeholder,
  ...args
}) => (
  <FormControl {...args} width="500px">
    <FormLabel label="Choisissez ou créez des adresses mail :" />
    <CreatableSelect
      placeholder={placeholder}
      options={mailOptions}
      defaultValue={mailOptions[0]}
      inputId="color"
      isMulti
      formatCreateLabel={formatCreateLabel}
    />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

const promiseOptions = (inputValue: string) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(
        colourOptions.filter(i =>
          i.label.toLowerCase().includes(inputValue.toLowerCase()),
        ),
      )
    }, 1000)
  })

export const Async: Story<Args> = ({ errorMessage, placeholder, ...args }) => (
  <FormControl {...args} width="300px">
    <FormLabel label="Async quoi :" />
    <AsyncSelect
      placeholder={placeholder}
      loadOptions={promiseOptions}
      defaultOptions
      cacheOptions
      inputId="color"
    />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)
