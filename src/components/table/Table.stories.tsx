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
        <Table.Td isNumeric>789123456</Table.Td>
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

export const Default = Template.bind({})

export const Loading = Template.bind({})
Loading.args = { isLoading: true }

export const Selectable = Template.bind({})
Selectable.args = { selectable: true }

export const Empty = EmptyTemplate.bind({})
