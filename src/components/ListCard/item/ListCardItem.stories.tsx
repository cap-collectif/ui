import { Meta, Story } from '@storybook/react'

import { ListCard } from '../'
import { ButtonGroup } from '../../buttonGroup'
import { ButtonQuickAction } from '../../buttonQuickAction'
import { CapUIIcon } from '../../icon'
import { Flex } from '../../layout'
import { Switch } from '../../switch'
import { ListCardItemProps } from './ListCardItem'

const meta: Meta = {
  title: 'Library/ListCard/ListCardItem',
  component: ListCard.Item,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<ListCardItemProps> = args => (
  <Flex direction="column" gap={'sm'}>
    {/* Draggable */}
    <ListCard.Item draggable>
      <ListCard.Item.Label>Hello world</ListCard.Item.Label>
    </ListCard.Item>

    {/* With type */}
    <ListCard.Item {...args}>
      <Flex direction="column">
        <ListCard.Item.Type>Step</ListCard.Item.Type>
        <ListCard.Item.Label>Hello world</ListCard.Item.Label>
      </Flex>
    </ListCard.Item>

    {/* With Switch */}
    <ListCard.Item as="label" htmlFor="hello-world" {...args}>
      <Flex direction="column">
        <ListCard.Item.Type>Step</ListCard.Item.Type>
        <ListCard.Item.Label>Hello world</ListCard.Item.Label>
      </Flex>

      <Switch id="hello-world" />
    </ListCard.Item>

    {/* With ButtonGroup */}
    <ListCard.Item {...args}>
      <Flex direction="column">
        <ListCard.Item.Type>Step</ListCard.Item.Type>
        <ListCard.Item.Label>Hello world</ListCard.Item.Label>
      </Flex>

      <ButtonGroup>
        <ButtonQuickAction
          variantColor="primary"
          icon={CapUIIcon.Pencil}
          label="Éditer"
        />
        <ButtonQuickAction
          variantColor="danger"
          icon={CapUIIcon.Trash}
          label="Éditer"
        />
      </ButtonGroup>
    </ListCard.Item>
  </Flex>
)

export const Hierarchy: Story<ListCardItemProps> = args => (
  <Flex
    direction="column"
    gap={'sm'}
    // backgroundColor={'neutral-gray.200'}
    padding={'md'}
  >
    {/* Draggable */}
    <ListCard.Item draggable>
      <ListCard.Item.Label>Hello world</ListCard.Item.Label>
    </ListCard.Item>
    <ListCard.Item draggable>
      <ListCard.Item.Label>Hello world</ListCard.Item.Label>
    </ListCard.Item>

    {/* With type */}
    <ListCard.Item {...args}>
      <Flex direction="column">
        <ListCard.Item.Type>Step</ListCard.Item.Type>
        <ListCard.Item.Label>Hello world</ListCard.Item.Label>
      </Flex>
    </ListCard.Item>

    {/* With Switch */}
    <ListCard.Item as="label" htmlFor="hello-world" {...args}>
      <Flex direction="column">
        <ListCard.Item.Type>Step</ListCard.Item.Type>
        <ListCard.Item.Label>Hello world</ListCard.Item.Label>
      </Flex>

      <Switch id="hello-world" />
    </ListCard.Item>

    {/* With ButtonGroup */}
    <ListCard.Item {...args}>
      <Flex direction="column">
        <ListCard.Item.Type>Step</ListCard.Item.Type>
        <ListCard.Item.Label>Hello world</ListCard.Item.Label>
      </Flex>

      <ButtonGroup>
        <ButtonQuickAction
          variantColor="primary"
          icon={CapUIIcon.Pencil}
          label="Éditer"
        />
        <ButtonQuickAction
          variantColor="danger"
          icon={CapUIIcon.Trash}
          label="Éditer"
        />
      </ButtonGroup>
    </ListCard.Item>

    {/* SubItem */}
    <ListCard.SubItem>Hello World</ListCard.SubItem>
  </Flex>
)
Hierarchy.args = {
  variantColor: 'hierarchy',
}
