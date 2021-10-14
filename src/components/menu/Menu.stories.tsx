import { Meta, Story } from '@storybook/react'
import * as React from 'react'

import { Avatar } from '../avatar'
import Button from '../button/Button'
import { CapUIIcon, Icon } from '../icon'
import { Text } from '../typography'
import Menu, { MenuProps } from './Menu'

const meta: Meta = {
  title: 'Library/Menu',
  component: Menu,
  args: {
    disclosure: <Button>Filters</Button>,
  },
  argTypes: {
    disclosure: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<MenuProps> = args => (
  <Menu {...args}>
    <Menu.List>
      <Menu.Item>Normal item</Menu.Item>
      <Menu.Item>Hello world</Menu.Item>
      <Menu.Item disabled>Disabled item</Menu.Item>
      <Menu.Item>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
        aliquid aspernatur atque consequatur cumque dolorem doloremque eum
        laboriosam laborum, laudantium maiores numquam quaerat quibusdam quo,
        reiciendis repellat repellendus, sequi! Aperiam, beatae blanditiis
        corporis cumque
      </Menu.Item>
    </Menu.List>
  </Menu>
)

export const WithOptionGroup: Story<MenuProps> = args => {
  const [sorting, setSorting] = React.useState<string>('asc')
  const [filters, setFilters] = React.useState<string[]>(['blue'])

  return (
    <Menu closeOnSelect={false} {...args}>
      <Menu.List>
        <Menu.OptionGroup
          value={sorting}
          onChange={setSorting}
          type="radio"
          title="Sorting"
        >
          <Menu.OptionItem value="asc">
            <Text>Ascending</Text>
            <Icon ml="auto" name={CapUIIcon.ArrowUpO} />
          </Menu.OptionItem>
          <Menu.OptionItem value="desc">
            <Text>Descending</Text>
            <Icon ml="auto" name={CapUIIcon.ArrowDownO} />
          </Menu.OptionItem>
        </Menu.OptionGroup>

        <Menu.OptionGroup
          value={filters}
          onChange={setFilters}
          type="checkbox"
          title="Filter"
        >
          <Menu.OptionItem value="red">
            <Text>Dan Abranov</Text>
            <Avatar
              size="xs"
              src="https://bit.ly/dan-abramov"
              name="Dan Abranov"
              ml="auto"
            />
          </Menu.OptionItem>
          <Menu.OptionItem value="blue">
            <Text>Victor Hugo</Text>
            <Avatar
              size="xs"
              src="https://bit.ly/3azOia8"
              name="Victor Hugo"
              ml="auto"
            />
          </Menu.OptionItem>
          <Menu.OptionItem value="green">
            <Text>Whitney Houston</Text>
            <Avatar
              size="xs"
              src="https://bit.ly/3j0ZIrZ"
              name="Whitney Houston"
              ml="auto"
            />
          </Menu.OptionItem>
        </Menu.OptionGroup>
      </Menu.List>
    </Menu>
  )
}
