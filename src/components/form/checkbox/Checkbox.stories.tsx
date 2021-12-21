import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import { FormGuideline } from '../formGuideline'
import FormLabel from '../formLabel/FormLabel'
import Checkbox, { CheckboxProps } from './Checkbox'
import mdx from './Checkbox.mdx'
import CheckboxGroup from './CheckboxGroup'

type Args = {
  errorMessage: string
  isInvalid: boolean
  isRequired: boolean
}

const meta: Meta = {
  title: 'Library/Form/Checkbox',
  component: Checkbox,
  args: {
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

export const Default: Story<CheckboxProps> = args => (
  <Checkbox {...args} id="checkbox" />
)

export const WithText: Story<CheckboxProps> = args => (
  <Checkbox {...args} id="checkbox" label="Checkbox" />
)

export const WithLabel: Story<Args> = args => (
  <FormControl {...args}>
    <FormLabel label="User selection" />
    <Checkbox id="checkbox" label="Checkbox" />
  </FormControl>
)

export const WithGuideline: Story<Args> = args => (
  <FormControl {...args}>
    <FormLabel label="User selection" />
    <FormGuideline>Guideline</FormGuideline>
    <Checkbox id="checkbox" label="Checkbox" />
  </FormControl>
)

export const WithAnErrorMessage: Story<Args> = ({ errorMessage, ...args }) => (
  <FormControl {...args}>
    <Checkbox id="checkbox1" label="Checkbox1" />
    <FormErrorMessage ml={7} mt={-1}>
      {errorMessage}
    </FormErrorMessage>
  </FormControl>
)

WithAnErrorMessage.args = {
  isInvalid: true,
}

export const WithAnErrorMessageChecked: Story<Args> = ({
  errorMessage,
  ...args
}) => (
  <FormControl {...args}>
    <Checkbox id="checkbox1" label="Checkbox1" checked />
    <FormErrorMessage ml={7} mt={-1}>
      {errorMessage}
    </FormErrorMessage>
  </FormControl>
)

WithAnErrorMessageChecked.args = {
  isInvalid: true,
}

export const Disabled: Story<Args> = () => (
  <>
    <Checkbox isDisabled id="checkbox1" label="Checkbox1" />
    <Checkbox isDisabled id="checkboxChecked" label="CheckboxChecked" checked />
  </>
)

export const Group: Story<Args> = args => (
  <FormControl {...args} width="500px">
    <FormLabel label="User selection" />
    <CheckboxGroup>
      <Checkbox id="checkbox1" label="Checkbox1" />
      <Checkbox id="checkbox2" label="Checkbox2" />
      <Checkbox
        id="checkboxLong"
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque tortor, cursus at dapibus at, pulvinar in turpis. 
Donec at augue aliquam, condimentum velit id, pellentesque ante. Duis et libero neque."
      />
      <Checkbox id="checkbox3" label="Checkbox3" />
    </CheckboxGroup>
  </FormControl>
)

export const GroupWithAnErrorMessage: Story<Args> = ({
  errorMessage,
  ...args
}) => (
  <FormControl {...args}>
    <FormLabel label="User selection" />
    <CheckboxGroup>
      <Checkbox id="checkbox1" label="Checkbox1" />
      <Checkbox id="checkbox2" label="Checkbox2" />
      <Checkbox id="checkbox3" label="Checkbox3" />
      <Checkbox id="checkbox4" label="Checkbox4" />
    </CheckboxGroup>
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

GroupWithAnErrorMessage.args = {
  isInvalid: true,
}

export const GroupWithBasicForm: Story<Args> = ({ errorMessage, ...args }) => {
  const [formState, setFormState] = React.useState([
    { id: 'checkbox1', label: 'Checkbox1', checked: false },
    { id: 'checkbox2', label: 'Checkbox2', checked: true },
    { id: 'checkbox3', label: 'Checkbox3', checked: false },
    { id: 'checkbox4', label: 'Checkbox4', checked: false },
  ])
  return (
    <FormControl {...args}>
      <FormLabel label="User selection" />
      <CheckboxGroup>
        {formState.map((field, index) => (
          <Checkbox
            key={index}
            id={field.id}
            label={field.label}
            checked={field.checked}
            onChange={e => {
              const newState = formState.slice()
              newState[index].checked = e.target.checked
              setFormState(newState)
            }}
          />
        ))}
      </CheckboxGroup>
    </FormControl>
  )
}
