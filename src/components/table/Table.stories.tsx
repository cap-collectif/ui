import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Box } from '../box'
import { Button } from '../button'
import { ButtonQuickAction } from '../buttonQuickAction'
import { CapUIIcon } from '../icon'
import { Flex } from '../layout'
import { Link } from '../link'
import { Tag } from '../tag'
import { Text } from '../typography'
import { headingStyles } from '../typography/Heading'
import { Table, TableProps } from './Table'
import mdx from './Table.mdx'
import { Menu } from './menu/Menu'

const EmptyMessage = (
  <Flex direction="column" px={6} py={12} spacing={2} width="100%">
    <Text color="blue.900" {...headingStyles.h3}>
      No result
    </Text>
    <Text color="blue.900" {...headingStyles.h4}>
      Adjust search to find
    </Text>
    <Button variant="tertiary" variantColor="primary">
      Reset filters
    </Button>
  </Flex>
)

const meta: Meta<TableProps> = {
  title: 'Library/Table',
  component: Table,
  args: {
    emptyMessage: EmptyMessage,
  },
  argTypes: {
    emptyMessage: {
      control: { disable: true },
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

const Template: Story<TableProps> = args => (
  <Table
    {...args}
    actionBar={({ selectedRows }) => (
      <>
        <Box as="span">{`${selectedRows.length} rows selected`}</Box>
        <Button variant="primary" variantColor="danger">
          Delete
        </Button>
      </>
    )}
  >
    <Table.Thead>
      <Table.Tr>
        <Table.Th>Fruit</Table.Th>
        <Table.Th>Job</Table.Th>
        <Table.Th>Country</Table.Th>
        <Table.Th isNumeric>Number</Table.Th>
        <Table.Th>
          <Table.Menu label="Publication">
            <Table.Menu.Item>Recent</Table.Menu.Item>
            <Table.Menu.Item>Older</Table.Menu.Item>
          </Table.Menu>
        </Table.Th>
        <Table.Th>Description</Table.Th>
        <Table.Th>Gender</Table.Th>
        <Table.Th />
      </Table.Tr>
    </Table.Thead>

    <Table.Tbody>
      <Table.Tr rowId="123" checkboxLabel="Apple">
        <Table.Td>
          <Link href="https://apple.com" truncate={20}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            aspernatur commodi dolores, illum laborum modi porro provident quasi
            quo sequi temporibus voluptate voluptates. A ea excepturi hic ipsa.
          </Link>
          <Link display="block" href="https://apple.com" color="gray.500">
            Apple pen
          </Link>
        </Table.Td>
        <Table.Td>Developer</Table.Td>
        <Table.Td>
          <Box zIndex={12}>Coucou</Box>
        </Table.Td>
        <Table.Td isNumeric>123456789</Table.Td>
        <Table.Td>
          <Tag variantColor="aqua">
            <Tag.Label>Coucou</Tag.Label>
          </Tag>
        </Table.Td>
        <Table.Td>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
          atque, consectetur cumque eaque eum exercitationem in laudantium,
          minus modi odit optio quae quibusdam, quidem quis ratione rem suscipit
          voluptatum?
        </Table.Td>
        <Table.Td>M</Table.Td>
        <Table.Td visibleOnHover>
          <Flex direction="row">
            <ButtonQuickAction
              variantColor="blue"
              icon={CapUIIcon.Pencil}
              label="Edit"
            />
            <ButtonQuickAction
              variantColor="red"
              icon={CapUIIcon.Trash}
              label="Delete"
            />
          </Flex>
        </Table.Td>
      </Table.Tr>

      <Table.Tr rowId="456" checkboxLabel="Banana">
        <Table.Td>
          <Box as="a" href="https://banana.com">
            Banana
          </Box>
        </Table.Td>
        <Table.Td>Engineer</Table.Td>
        <Table.Td>China</Table.Td>
        <Table.Td isNumeric>456789123.45</Table.Td>
        <Table.Td>11/01/2030</Table.Td>
        <Table.Td>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
          atque, consectetur cumque eaque eum exercitationem in laudantium,
          minus modi odit optio quae quibusdam, quidem quis ratione rem suscipit
          voluptatum?
        </Table.Td>
        <Table.Td>{null}</Table.Td>
        <Table.Td visibleOnHover>
          <Flex direction="row">
            <ButtonQuickAction
              variantColor="blue"
              icon={CapUIIcon.Pencil}
              label="Edit"
            />
            <ButtonQuickAction
              variantColor="red"
              icon={CapUIIcon.Trash}
              label="Delete"
            />
          </Flex>
        </Table.Td>
      </Table.Tr>

      <Table.Tr rowId="789" checkboxLabel="Strawberry">
        <Table.Td>
          <Box as="a" href="https://strawberry.com">
            Strawberry
          </Box>
        </Table.Td>
        <Table.Td>CEO</Table.Td>
        <Table.Td>Russia</Table.Td>
        <Table.Td isNumeric>{Number(0)}</Table.Td>
        <Table.Td>10/01/2030</Table.Td>
        <Table.Td>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
          atque, consectetur cumque eaque eum exercitationem in laudantium,
          minus modi odit optio quae quibusdam, quidem quis ratione rem suscipit
          voluptatum?
        </Table.Td>
        <Table.Td>F</Table.Td>
        <Table.Td visibleOnHover>
          <Flex direction="row">
            <ButtonQuickAction
              variantColor="blue"
              icon={CapUIIcon.Pencil}
              label="Edit"
            />
            <ButtonQuickAction
              variantColor="red"
              icon={CapUIIcon.Trash}
              label="Delete"
            />
          </Flex>
        </Table.Td>
      </Table.Tr>
    </Table.Tbody>
  </Table>
)

const EmptyTemplate: Story<TableProps> = args => (
  <Table
    {...args}
    actionBar={({ selectedRows }) => (
      <>
        <Box as="span">{`${selectedRows.length} rows selected`}</Box>
        <Button variant="primary" variantColor="danger">
          Delete
        </Button>
      </>
    )}
  >
    <Table.Thead>
      <Table.Tr>
        <Table.Th>Fruit</Table.Th>
        <Table.Th>Job</Table.Th>
        <Table.Th>Country</Table.Th>
        <Table.Th isNumeric>Number</Table.Th>
        <Table.Th>
          <Menu label="Publication">
            <Menu.Item>Recent</Menu.Item>
            <Menu.Item>Older</Menu.Item>
          </Menu>
        </Table.Th>
        <Table.Th>Description</Table.Th>
        <Table.Th>Gender</Table.Th>
        <Table.Th />
      </Table.Tr>
    </Table.Thead>

    <Table.Tbody>{null}</Table.Tbody>
  </Table>
)

const FilterableTemplate: Story<TableProps> = args => {
  const [selectedCountry, setSelectedCountry] = React.useState('all')

  const data = [
    {
      id: '123',
      name: 'Marie Sklodovska-Curie',
      occupation: 'Multi-field Nobel prizes winner',
      country: 'poland',
    },
    {
      id: '456',
      name: 'Ada Lovelace',
      occupation: 'Développeuse fullstack',
      country: 'uk',
    },
    {
      id: '789',
      name: 'Malala Yousafzai',
      occupation: "Women's rights activist",
      country: 'pakistan',
    },
    {
      id: '101',
      name: 'Emmeline Pankhurst',
      occupation: 'Politician | British suffrage movement',
      country: 'uk',
    },
  ]

  const optionGroups = [
    {
      title: 'All',
      options: [{ key: 'all', value: 'all', label: 'All' }],
    },
    {
      title: 'Europe',
      options: [
        { key: 'france', value: 'france', label: 'France' },
        { key: 'poland', value: 'poland', label: 'Poland' },
        { key: 'uk', value: 'uk', label: 'United Kingdom' },
      ],
    },
    {
      title: 'Asia',
      options: [{ key: 'pakistan', value: 'pakistan', label: 'Pakistan' }],
    },
  ]

  const filteredData =
    selectedCountry === 'all'
      ? data
      : data.filter(item => item.country === selectedCountry)

  return (
    <Table
      {...args}
      actionBar={({ selectedRows }) => (
        <>
          <Box as="span">{`${selectedRows.length} rows selected`}</Box>
          <Button variant="primary" variantColor="danger">
            Delete
          </Button>
        </>
      )}
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Occupation</Table.Th>
          <Table.Th noPlaceholder>
            <Table.Menu label="Country">
              {optionGroups.map(group => (
                <Table.Menu.OptionGroup
                  key={group.title}
                  value={selectedCountry}
                  onChange={value => {
                    if (value !== selectedCountry) {
                      setSelectedCountry(value)
                    }
                  }}
                  type={'radio'}
                  title={group.title}
                >
                  {group.options.map(option => (
                    <Table.Menu.OptionItem
                      key={option.key}
                      value={option.value}
                    >
                      {option.label}
                    </Table.Menu.OptionItem>
                  ))}
                </Table.Menu.OptionGroup>
              ))}
            </Table.Menu>
          </Table.Th>
          <Table.Th />
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {filteredData.map(item => (
          <Table.Tr key={item.id} rowId={item.id} checkboxLabel={item.name}>
            <Table.Td>{item.name}</Table.Td>
            <Table.Td>{item.occupation}</Table.Td>
            <Table.Td>
              {item.country.charAt(0).toUpperCase() + item.country.slice(1)}
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  )
}

export const Default = Template.bind({})

export const Loading = Template.bind({})
Loading.args = { isLoading: true }

export const Selectable = Template.bind({})
Selectable.args = { selectable: true }

export const Filterable = FilterableTemplate.bind({})

export const Empty = EmptyTemplate.bind({})
