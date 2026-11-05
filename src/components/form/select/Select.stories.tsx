import { Meta, StoryFn } from '@storybook/react'
import * as React from 'react'

import { Divider } from '../../divider'
import { CapUIIcon, Icon } from '../../icon'
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
    isDisabled: false,
  },
  argTypes: {
    menuIsOpen: {
      options: [undefined, true, false],
      control: { type: 'radio' },
    },
    variantSize: { control: 'select', options: ['sm', 'md'] },
    variantColor: {
      control: 'select',
      options: ['default', 'hierarchy'],
    },
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

const StorySection: React.FC<{
  title: string
  children: React.ReactNode
}> = ({ title, children }) => (
  <Flex direction="column" gap="md" width="100%">
    <Divider width="100%">{title}</Divider>
    {children}
  </Flex>
)

const StoryContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Flex direction="column" gap="xl" maxWidth="600px">
    {children}
  </Flex>
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

export const Default: StoryFn<Args> = ({
  errorMessage,
  placeholder,
  menuIsOpen,
  ...args
}) => (
  <StoryContainer>
    <StorySection title="Default">
      <FormControl {...args} width="500px">
        <FormLabel label="Choisissez une couleur :" />
        <Select
          menuIsOpen={menuIsOpen}
          placeholder={placeholder}
          width="280px"
          options={colourOptions}
          defaultValue={colourOptions[0]}
          inputId="color-default"
        />
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </StorySection>

    <StorySection title="Clearable">
      <FormControl {...args} width="500px">
        <FormLabel label="Choisissez une couleur :" />
        <Select
          isClearable
          menuIsOpen={menuIsOpen}
          placeholder={placeholder}
          width="280px"
          options={colourOptions}
          defaultValue={colourOptions[0]}
          inputId="color-clearable"
        />
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </StorySection>

    <StorySection title="With guideline">
      <FormControl {...args} width="500px">
        <FormLabel label="Choisissez une couleur :" />
        <FormGuideline>Mais choisissez bien !</FormGuideline>
        <Select
          width="280px"
          menuIsOpen={menuIsOpen}
          placeholder={placeholder}
          options={colourOptions}
          defaultValue={colourOptions[0]}
          inputId="color-guideline"
        />
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </StorySection>
  </StoryContainer>
)

export const Multi: StoryFn<Args> = ({
  errorMessage,
  placeholder,
  menuIsOpen,
  ...args
}) => (
  <StoryContainer>
    <StorySection title="Multi">
      <FormControl {...args} width="500px">
        <FormLabel label="Choisissez DES couleurs :" />
        <Select
          menuIsOpen={menuIsOpen}
          placeholder={placeholder}
          width="280px"
          options={colourOptions}
          defaultValue={colourOptions[0]}
          inputId="colors-multi"
          isMulti
        />
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </StorySection>

    <StorySection title="Multi with guideline">
      <FormControl {...args} width="500px">
        <FormLabel label="Choisissez DES couleurs :" />
        <FormGuideline>Mais choisissez les bien !</FormGuideline>
        <Select
          width="280px"
          menuIsOpen={menuIsOpen}
          placeholder={placeholder}
          options={colourOptions}
          defaultValue={colourOptions[0]}
          inputId="colors-multi-guideline"
          isMulti
        />
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </StorySection>
  </StoryContainer>
)

export const Readonly: StoryFn<Args> = ({ errorMessage, ...args }) => (
  <StoryContainer>
    <StorySection title="Select with readonly styles">
      <FormControl {...args} isReadonly width="500px">
        <FormLabel label="Choisissez une couleur :" />
        <Select
          width="280px"
          options={colourOptions}
          defaultValue={colourOptions[0]}
          inputId="color-readonly"
          isClearable
        />
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </StorySection>

    <StorySection title="Multi with readonly styles">
      <FormControl {...args} isReadonly width="500px">
        <FormLabel label="Choisissez DES couleurs :" />
        <Select
          width="280px"
          options={colourOptions}
          defaultValue={[colourOptions[0], colourOptions[1]]}
          inputId="colors-readonly"
          isMulti
        />
      </FormControl>
    </StorySection>
  </StoryContainer>
)

export const Creatable: StoryFn<Args> = ({
  errorMessage,
  placeholder,
  menuIsOpen,
  ...args
}) => {
  const [value, setValue] = React.useState<SelectValue | null>(null)
  const [
    guidelineValue,
    setGuidelineValue,
  ] = React.useState<SelectValue | null>(null)
  const [multiValue, setMultiValue] = React.useState<Array<SelectValue> | null>(
    null,
  )

  return (
    <StoryContainer>
      <StorySection title="Creatable">
        <FormControl {...args} width="500px">
          <FormLabel label="Choisissez ou créez une adresse mail :" />
          <CreatableSelect
            menuIsOpen={menuIsOpen}
            placeholder={placeholder}
            options={mailOptions}
            inputId="mail-creatable"
            width="280px"
            formatCreateLabel={formatCreateLabel}
            value={value}
            onChange={(newValue: SelectValue) => setValue(newValue)}
            onCreateOption={(newValue: string) => {
              mailOptions.push({ value: newValue, label: newValue })
              setValue({ value: newValue, label: newValue })
            }}
          />
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
      </StorySection>

      <StorySection title="Creatable with guideline">
        <FormControl {...args} width="500px">
          <FormLabel label="Choisissez ou créez une adresse mail :" />
          <FormGuideline>Pas de vérification sur un storybook</FormGuideline>
          <CreatableSelect
            width="280px"
            menuIsOpen={menuIsOpen}
            placeholder={placeholder}
            options={mailOptions}
            inputId="mail-creatable-guideline"
            formatCreateLabel={formatCreateLabel}
            value={guidelineValue}
            onChange={(newValue: SelectValue) => setGuidelineValue(newValue)}
            onCreateOption={(newValue: string) => {
              mailOptions.push({ value: newValue, label: newValue })
              setGuidelineValue({ value: newValue, label: newValue })
            }}
          />
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
      </StorySection>

      <StorySection title="Creatable multi">
        <FormControl {...args} width="500px">
          <FormLabel label="Choisissez ou créez des adresses mail :" />
          <CreatableSelect
            width="280px"
            menuIsOpen={menuIsOpen}
            placeholder={placeholder}
            options={mailOptions}
            inputId="mail-creatable-multi"
            isMulti
            value={multiValue}
            onChange={newValue => setMultiValue(newValue)}
            onCreateOption={(newValue: string) => {
              const newOption = { value: newValue, label: newValue }
              mailOptions.push(newOption)
              if (multiValue && newOption)
                setMultiValue([...multiValue, newOption])
              else setMultiValue([newOption])
            }}
            formatCreateLabel={formatCreateLabel}
          />
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
      </StorySection>
    </StoryContainer>
  )
}

export const Async: StoryFn<Args> = ({
  errorMessage,
  placeholder,
  menuIsOpen,
  ...args
}) => {
  const [value, setValue] = React.useState<SelectValue | null>(null)

  return (
    <StoryContainer>
      <StorySection title="Async">
        <FormControl {...args} width="500px">
          <FormLabel label="Async quoi :" />
          <AsyncSelect
            width="280px"
            menuIsOpen={menuIsOpen}
            placeholder={placeholder}
            loadOptions={promiseOptions}
            defaultOptions
            cacheOptions
            inputId="color-async"
          />
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
      </StorySection>

      <StorySection title="Async creatable">
        <FormControl {...args} width="500px">
          <FormLabel label="Async et creatable :" />
          <FormGuideline>Complex af</FormGuideline>
          <AsyncCreatableSelect
            width="280px"
            menuIsOpen={menuIsOpen}
            placeholder={placeholder}
            loadOptions={promiseOptions}
            defaultOptions
            inputId="color-async-creatable"
            formatCreateLabel={formatCreateLabel}
            value={value}
            onChange={(newValue: SelectValue) => setValue(newValue)}
            onCreateOption={(newValue: string) => {
              colourOptions.push({ value: newValue, label: newValue })
              setValue({ value: newValue, label: newValue })
            }}
          />
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
      </StorySection>
    </StoryContainer>
  )
}
