import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import FormLabel from '../formLabel/FormLabel'
import Checkbox from './Checkbox'
import CheckboxGroup from './CheckboxGroup'

type Args = {
  errorMessage: string
  isInvalid: boolean
  isRequired: boolean
}

const meta: Meta = {
  title: 'Library/Form/CheckboxGroup',
  component: CheckboxGroup,
  args: {
    errorMessage: 'Error info.',
    isRequired: true,
    isInvalid: false,
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<Args> = args => (
  <FormControl {...args} width="500px">
    <FormLabel label="User selection" />
    <CheckboxGroup>
      <Checkbox id="checkbox">Check me</Checkbox>
      <Checkbox id="checkbox-2">Check me 2</Checkbox>
      <Checkbox id="checkbox-long">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque
        tortor, cursus at dapibus at, pulvinar in turpis. Donec at augue
        aliquam, condimentum velit id, pellentesque ante. Duis et libero neque.
      </Checkbox>
      <Checkbox id="checkbox-3">Check me 3</Checkbox>
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
      <Checkbox id="checkbox">Check me</Checkbox>
      <Checkbox id="checkbox-2">Check me 2</Checkbox>
      <Checkbox id="checkbox-3">Check me 3</Checkbox>
      <Checkbox id="checkbox-4">Check me 4</Checkbox>
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
            checked={field.checked}
            onChange={e => {
              const newState = formState.slice()
              newState[index].checked = e.target.checked
              setFormState(newState)
            }}
          >
            {field.label}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </FormControl>
  )
}
