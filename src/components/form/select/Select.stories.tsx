import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Icon, CapUIIcon } from '../../icon'
import { Flex } from '../../layout/Flex'
import { Text } from '../../typography'
import { CapInputSize } from '../enums'
import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import { FormGuideline } from '../formGuideline'
import FormLabel from '../formLabel/FormLabel'
import AsyncCreatableSelect from './AsyncCreatableSelect'
import AsyncSelect from './AsyncSelect'
import CreatableSelect from './CreatableSelect'
import Select from './Select'
import mdx from './Select.md'

type Args = {
  errorMessage: string
  placeholder: string
  isInvalid: boolean
  isDisabled: boolean
  isRequired: boolean
  variantSize: CapInputSize
  menuIsOpen: boolean
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
  argTypes: {
    menuIsOpen: {
      options: [undefined, true, false],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      page: mdx,
    },
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
  menuIsOpen,
  ...args
}) => (
  <FormControl {...args} width="500px">
    <FormLabel label="Choisissez une couleur :" />
    <Select
      menuIsOpen={menuIsOpen}
      placeholder={placeholder}
      width="280px"
      options={colourOptions}
      defaultValue={colourOptions[0]}
      inputId="color"
    />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

export const DefaultWithGuideline: Story<Args> = ({
  errorMessage,
  placeholder,
  menuIsOpen,
  ...args
}) => (
  <FormControl {...args}>
    <FormLabel label="Choisissez une couleur :" />
    <FormGuideline>Mais choisissez bien !</FormGuideline>
    <Select
      menuIsOpen={menuIsOpen}
      placeholder={placeholder}
      options={colourOptions}
      defaultValue={colourOptions[0]}
      inputId="color"
    />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

export const Multi: Story<Args> = ({
  errorMessage,
  placeholder,
  menuIsOpen,
  ...args
}) => (
  <FormControl {...args} width="500px">
    <FormLabel label="Choisissez DES couleurs :" />
    <Select
      menuIsOpen={menuIsOpen}
      placeholder={placeholder}
      width="280px"
      options={colourOptions}
      defaultValue={colourOptions[0]}
      inputId="color"
      isMulti
    />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

export const MultiWithGuideline: Story<Args> = ({
  errorMessage,
  placeholder,
  menuIsOpen,
  ...args
}) => (
  <FormControl {...args}>
    <FormLabel label="Choisissez DES couleurs :" />
    <FormGuideline>Mais choisissez les bien !</FormGuideline>
    <Select
      menuIsOpen={menuIsOpen}
      placeholder={placeholder}
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

type SelectValue = {
  value: string
  label: string
}

export const Creatable: Story<Args> = ({
  errorMessage,
  placeholder,
  menuIsOpen,
  ...args
}) => {
  const [value, setValue] = React.useState<SelectValue | null>(null)
  return (
    <FormControl {...args} width="500px">
      <FormLabel label="Choisissez ou créez une adresse mail :" />
      <CreatableSelect
        menuIsOpen={menuIsOpen}
        placeholder={placeholder}
        options={mailOptions}
        inputId="color"
        width="280px"
        formatCreateLabel={formatCreateLabel}
        value={value}
        onChange={(newValue: { value: string; label: string }) =>
          setValue(newValue)
        }
        onCreateOption={(newValue: string) => {
          mailOptions.push({ value: newValue, label: newValue })
          setValue({ value: newValue, label: newValue })
        }}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

export const CreatableWithGuideline: Story<Args> = ({
  errorMessage,
  placeholder,
  menuIsOpen,
  ...args
}) => {
  const [value, setValue] = React.useState<SelectValue | null>(null)
  return (
    <FormControl {...args} width="500px">
      <FormLabel label="Choisissez ou créez une adresse mail :" />
      <FormGuideline>Pas de vérification sur un storybook</FormGuideline>
      <CreatableSelect
        menuIsOpen={menuIsOpen}
        placeholder={placeholder}
        options={mailOptions}
        inputId="color"
        formatCreateLabel={formatCreateLabel}
        value={value}
        onChange={(newValue: { value: string; label: string }) =>
          setValue(newValue)
        }
        onCreateOption={(newValue: string) => {
          mailOptions.push({ value: newValue, label: newValue })
          setValue({ value: newValue, label: newValue })
        }}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

export const CreatableMulti: Story<Args> = ({
  errorMessage,
  placeholder,
  menuIsOpen,
  ...args
}) => {
  const [value, setValue] = React.useState<Array<SelectValue> | null>(null)
  return (
    <FormControl {...args} width="500px">
      <FormLabel label="Choisissez ou créez des adresses mail :" />
      <CreatableSelect
        menuIsOpen={menuIsOpen}
        placeholder={placeholder}
        options={mailOptions}
        inputId="color"
        isMulti
        value={value}
        onChange={newValue => setValue(newValue)}
        onCreateOption={(newValue: string) => {
          const newOption = { value: newValue, label: newValue }
          mailOptions.push(newOption)
          if (value && newOption) setValue([...value, newOption])
          else setValue([newOption])
        }}
        formatCreateLabel={formatCreateLabel}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

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

export const Async: Story<Args> = ({
  errorMessage,
  placeholder,
  menuIsOpen,
  ...args
}) => (
  <FormControl {...args} width="280px">
    <FormLabel label="Async quoi :" />
    <AsyncSelect
      menuIsOpen={menuIsOpen}
      placeholder={placeholder}
      loadOptions={promiseOptions}
      defaultOptions
      cacheOptions
      inputId="color"
    />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

export const AsyncCreatable: Story<Args> = ({
  errorMessage,
  placeholder,
  menuIsOpen,
  ...args
}) => {
  const [value, setValue] = React.useState<SelectValue | null>(null)
  return (
    <FormControl {...args} width="280px">
      <FormLabel label="Async et creatable :" />
      <FormGuideline>Complex af</FormGuideline>
      <AsyncCreatableSelect
        menuIsOpen={menuIsOpen}
        placeholder={placeholder}
        loadOptions={promiseOptions}
        defaultOptions
        inputId="color"
        formatCreateLabel={formatCreateLabel}
        value={value}
        onChange={(newValue: { value: string; label: string }) =>
          setValue(newValue)
        }
        onCreateOption={(newValue: string) => {
          colourOptions.push({ value: newValue, label: newValue })
          setValue({ value: newValue, label: newValue })
        }}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}
