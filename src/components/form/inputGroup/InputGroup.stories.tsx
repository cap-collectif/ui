import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import Button from '../../button/Button'
import { Flex } from '../../layout'
import DateRange, { DateRangeValueType } from '../dateRange/DateRange'
import { FormControl } from '../formControl'
import { FormErrorMessage } from '../formErrorMessage'
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
      <FormControl {...args}>
        <InputGroup {...args}>
          <Select
            placeholder="Placeholder..."
            width="280px"
            options={colourOptions}
            defaultValue={colourOptions[0]}
            inputId="color"
          />
          <Input placeholder="Placeholder..." />
          <Button variant="primary">Action</Button>
        </InputGroup>
        <FormErrorMessage>ERROR</FormErrorMessage>
      </FormControl>
      <FormControl {...args}>
        <InputGroup {...args}>
          <Input placeholder="Placeholder..." />
          <Select
            placeholder="Placeholder..."
            width="280px"
            options={colourOptions}
            defaultValue={colourOptions[0]}
            inputId="color"
          />
          <Button variant="primary">Action</Button>
        </InputGroup>
        <FormErrorMessage>ERROR</FormErrorMessage>
      </FormControl>
      <FormControl {...args}>
        <InputGroup {...args}>
          <Button variant="primary">Action</Button>
          <Select
            placeholder="Placeholder..."
            width="280px"
            options={colourOptions}
            defaultValue={colourOptions[0]}
            inputId="color"
          />
          <Input placeholder="Placeholder..." />
        </InputGroup>
        <FormErrorMessage>ERROR</FormErrorMessage>
      </FormControl>

      <InputGroup {...args}>
        <InputNumber placeholder="6" />
        <Input placeholder="Placeholder..." />
      </InputGroup>
      <InputGroup {...args}>
        <DateRange
          displayFormat="DD/MM/YYYY"
          value={value}
          onChange={elem =>
            onChange({ startDate: elem.startDate, endDate: elem.endDate })
          }
        />
        <Input placeholder="Placeholder..." />
      </InputGroup>

      <InputGroup {...args}>
        <Input placeholder="Placeholder..." />
        <Select
          placeholder="Placeholder..."
          width="280px"
          options={colourOptions}
          defaultValue={colourOptions[0]}
          inputId="color"
        />
      </InputGroup>
      <InputGroup {...args}>
        <Input placeholder="Placeholder..." />
        <InputNumber placeholder="6" />
      </InputGroup>
      <InputGroup {...args}>
        <Input placeholder="Placeholder..." />
        <DateRange
          displayFormat="DD/MM/YYYY"
          value={value}
          onChange={elem =>
            onChange({ startDate: elem.startDate, endDate: elem.endDate })
          }
        />
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
      <FormControl isInvalid {...args}>
        <InputGroup {...args}>
          <Select
            placeholder="Placeholder..."
            width="280px"
            options={colourOptions}
            defaultValue={colourOptions[0]}
            inputId="color"
          />
          <Input placeholder="Placeholder..." />
        </InputGroup>
        <FormErrorMessage>ERROR</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid {...args}>
        <InputGroup {...args}>
          <InputNumber placeholder="6" />
          <Input placeholder="Placeholder..." />
        </InputGroup>
        <FormErrorMessage>ERROR</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid {...args}>
        <InputGroup {...args}>
          <DateRange
            displayFormat="DD/MM/YYYY"
            value={value}
            onChange={elem =>
              onChange({ startDate: elem.startDate, endDate: elem.endDate })
            }
          />
          <Input placeholder="Placeholder..." />
        </InputGroup>
        <FormErrorMessage>ERROR</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid {...args}>
        <InputGroup {...args}>
          <Input placeholder="Placeholder..." />
          <Select
            placeholder="Placeholder..."
            width="280px"
            options={colourOptions}
            defaultValue={colourOptions[0]}
            inputId="color"
          />
        </InputGroup>
        <FormErrorMessage>ERROR</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid {...args}>
        <InputGroup {...args}>
          <Input placeholder="Placeholder..." />
          <InputNumber placeholder="6" />
        </InputGroup>
        <FormErrorMessage>ERROR</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid {...args}>
        <InputGroup {...args}>
          <Input placeholder="Placeholder..." />
          <DateRange
            displayFormat="DD/MM/YYYY"
            value={value}
            onChange={elem =>
              onChange({ startDate: elem.startDate, endDate: elem.endDate })
            }
          />
        </InputGroup>
        <FormErrorMessage>ERROR</FormErrorMessage>
      </FormControl>
    </Flex>
  )
}
