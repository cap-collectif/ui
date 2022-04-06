import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import Button from '../../button/Button'
import { Flex } from '../../layout'
import DateRange, { DateRangeValueType } from '../dateRange/DateRange'
import { FormControl } from '../formControl'
import { FormErrorMessage } from '../formErrorMessage'
import { FormGuideline } from '../formGuideline'
import { FormLabel } from '../formLabel'
import { Input } from '../input'
import { InputNumber } from '../inputNumber'
import { Select } from '../select'
import InputGroup, { InputGroupProps } from './InputGroup'

const meta: Meta = {
  title: 'Library/Form/InputGroup',
  component: InputGroup,
  args: {},
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

export const Default: Story<InputGroupProps> = args => {
  const [value, onChange] = React.useState<DateRangeValueType>({
    startDate: null,
    endDate: null,
  })
  return (
    <Flex direction="column" width="700px" spacing={3}>
      <InputGroup {...args}>
        <FormLabel label="Choisissez une couleur :" />
        <FormGuideline>Guidelines</FormGuideline>
        <FormControl {...args}>
          <Select
            placeholder="Placeholder..."
            options={colourOptions}
            defaultValue={colourOptions[0]}
            inputId="color"
          />
        </FormControl>
        <FormControl {...args}>
          <Input placeholder="Placeholder..." />
        </FormControl>
        <Button variant="primary" variantSize="small">
          Action
        </Button>
      </InputGroup>
      <InputGroup {...args}>
        <FormLabel label="Label" />
        <FormControl {...args}>
          <Input placeholder="Placeholder..." />
        </FormControl>
        <FormControl {...args}>
          {' '}
          <Select
            placeholder="Placeholder..."
            options={colourOptions}
            defaultValue={colourOptions[0]}
            inputId="color"
          />
        </FormControl>
        <Button variant="primary">Action</Button>
      </InputGroup>

      <InputGroup {...args}>
        <FormLabel label="Label" />
        <FormGuideline>Guidelines</FormGuideline>
        <Button variant="primary">Action</Button>
        <FormControl {...args}>
          {' '}
          <Select
            placeholder="Placeholder..."
            options={colourOptions}
            defaultValue={colourOptions[0]}
            inputId="color"
          />
        </FormControl>
        <FormControl {...args}>
          {' '}
          <Input placeholder="Placeholder..." />
        </FormControl>
      </InputGroup>

      <InputGroup {...args}>
        <FormLabel label="Label" />
        <FormControl {...args}>
          <InputNumber placeholder="6" />
        </FormControl>
        <FormControl {...args}>
          <Input placeholder="Placeholder..." />
        </FormControl>
      </InputGroup>

      <InputGroup {...args}>
        <FormLabel label="Label" />
        <FormControl {...args}>
          <DateRange
            displayFormat="DD/MM/YYYY"
            value={value}
            onChange={elem =>
              onChange({ startDate: elem.startDate, endDate: elem.endDate })
            }
          />
        </FormControl>
        <FormControl {...args}>
          <Input placeholder="Placeholder..." />
        </FormControl>
      </InputGroup>
    </Flex>
  )
}
export const WithError: Story<InputGroupProps> = args => {
  const [value, onChange] = React.useState<DateRangeValueType>({
    startDate: null,
    endDate: null,
  })
  return (
    <Flex direction="column" width="700px" spacing={3}>
      <InputGroup {...args}>
        <FormLabel label="Choisissez une couleur :" />
        <FormControl isInvalid {...args}>
          <Select
            placeholder="Placeholder..."
            options={colourOptions}
            defaultValue={colourOptions[0]}
            inputId="color"
          />
          <FormErrorMessage>Error Info</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid {...args}>
          <Input placeholder="Placeholder..." />
          <FormErrorMessage>Error Info</FormErrorMessage>
        </FormControl>
      </InputGroup>
      <InputGroup {...args}>
        <FormLabel label="Label" />
        <FormControl isInvalid {...args}>
          <Input placeholder="Placeholder..." />
          <FormErrorMessage>Error Info</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid {...args}>
          <Select
            placeholder="Placeholder..."
            options={colourOptions}
            defaultValue={colourOptions[0]}
            inputId="color"
          />
          <FormErrorMessage>Error Info</FormErrorMessage>
        </FormControl>
      </InputGroup>

      <InputGroup {...args}>
        <FormLabel label="Label" />
        <FormControl isInvalid {...args}>
          <Select
            placeholder="Placeholder..."
            options={colourOptions}
            defaultValue={colourOptions[0]}
            inputId="color"
          />
          <FormErrorMessage>Error Info</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid {...args}>
          <Input placeholder="Placeholder..." />
          <FormErrorMessage>Error Info</FormErrorMessage>
        </FormControl>
      </InputGroup>

      <InputGroup {...args}>
        <FormLabel label="Label" />
        <FormControl isInvalid {...args}>
          <InputNumber placeholder="6" />
          <FormErrorMessage>Error Info</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid {...args}>
          <Input placeholder="Placeholder..." />
          <FormErrorMessage>Error Info</FormErrorMessage>
        </FormControl>
      </InputGroup>

      <InputGroup {...args}>
        <FormLabel label="Label" />
        <FormControl isInvalid {...args}>
          <DateRange
            displayFormat="DD/MM/YYYY"
            value={value}
            onChange={elem =>
              onChange({ startDate: elem.startDate, endDate: elem.endDate })
            }
          />
          <FormErrorMessage>Error Info</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid {...args}>
          <Input placeholder="Placeholder..." />
          <FormErrorMessage>Error Info</FormErrorMessage>
        </FormControl>
      </InputGroup>
    </Flex>
  )
}
