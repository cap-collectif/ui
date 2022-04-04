import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import FormControl from '../formControl/FormControl'
import FormErrorMessage from '../formErrorMessage/FormErrorMessage'
import FormLabel from '../formLabel/FormLabel'
import Radio from './Radio'
import RadioGroup from './RadioGroup'

type Args = {
  errorMessage: string
  isInvalid: boolean
  isRequired: boolean
}

const meta: Meta = {
  title: 'Library/Form/RadioGroup',
  component: RadioGroup,
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
    <RadioGroup>
      <Radio id="radio" name="radio">Check me</Radio>
      <Radio id="radio-2" name="radio">Check me 2</Radio>
      <Radio id="radio-long" name="radio">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque
        tortor, cursus at dapibus at, pulvinar in turpis. Donec at augue
        aliquam, condimentum velit id, pellentesque ante. Duis et libero neque.
      </Radio>
      <Radio id="radio-3" name="radio">Check me 3</Radio>
    </RadioGroup>
  </FormControl>
)

export const GroupWithAnErrorMessage: Story<Args> = ({
  errorMessage,
  ...args
}) => (
  <FormControl {...args}>
    <FormLabel label="User selection" />
    <RadioGroup>
      <Radio id="radio" name="radio">Check me</Radio>
      <Radio id="radio-2" name="radio">Check me 2</Radio>
      <Radio id="radio-3" name="radio">Check me 3</Radio>
      <Radio id="radio-4" name="radio">Check me 4</Radio>
    </RadioGroup>
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

GroupWithAnErrorMessage.args = {
  isInvalid: true,
}

export const GroupWithBasicForm: Story<Args> = ({ errorMessage, ...args }) => {

  const [selectedRadio, setSelectedRadio] = React.useState<string>('radio1');

  const [formState] = React.useState([
    { id: 'radio1', label: 'Radio1', value: 'radio1' },
    { id: 'radio2', label: 'Radio2', value: 'radio2' },
    { id: 'radio3', label: 'Radio3', value: 'radio3' },
    { id: 'radio4', label: 'Radio4', value: 'radio4' },
  ])

  return (
    <FormControl {...args}>
      <FormLabel label="User selection" />
      <RadioGroup>
        {formState.map((field, index) => (
          <Radio
            key={index}
            id={field.id}
            value={field.value}
            checked={selectedRadio === field.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target)
              setSelectedRadio(e.target.value)
            }}
          >
            {field.label}
          </Radio>
        ))}
      </RadioGroup>
    </FormControl>
  )
}
