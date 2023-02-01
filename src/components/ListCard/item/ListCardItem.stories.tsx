import { Meta, Story } from '@storybook/react'
import * as React from 'react'
import { ListCard } from '../'
import { Flex } from '../../layout'
import { Switch } from '../../switch'
import { ButtonGroup } from '../../buttonGroup'
import { ButtonQuickAction } from '../../buttonQuickAction'
import { CapUIIcon } from '../../icon'
import { ListCardItemProps } from './ListCardItem'

const meta: Meta = {
  title: 'Library/ListCard/ListCardItem',
  component: ListCard.Item,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<ListCardItemProps> = () => (
  <ListCard.Item draggable>
    <ListCard.Item.Label>Hello world</ListCard.Item.Label>
  </ListCard.Item>
)

export const WithType: Story<ListCardItemProps> = args => (
  <ListCard.Item {...args}>
    <Flex direction="column">
      <ListCard.Item.Type>Step</ListCard.Item.Type>
      <ListCard.Item.Label>Hello world</ListCard.Item.Label>
    </Flex>
  </ListCard.Item>
)

export const WithSwitch: Story<ListCardItemProps> = args => (
  <ListCard.Item as="label" htmlFor="hello-world" {...args}>
    <Flex direction="column">
      <ListCard.Item.Type>Step</ListCard.Item.Type>
      <ListCard.Item.Label>Hello world</ListCard.Item.Label>
    </Flex>

    <Switch id="hello-world" />
  </ListCard.Item>
)

export const WithButtonGroup: Story<ListCardItemProps> = args => (
  <ListCard.Item {...args}>
    <Flex direction="column">
      <ListCard.Item.Type>Step</ListCard.Item.Type>
      <ListCard.Item.Label>Hello world</ListCard.Item.Label>
    </Flex>

    <ButtonGroup>
      <ButtonQuickAction
        variantColor="blue"
        icon={CapUIIcon.Pencil}
        label="Éditer"
      />
      <ButtonQuickAction
        variantColor="red"
        icon={CapUIIcon.Trash}
        label="Éditer"
      />
    </ButtonGroup>
  </ListCard.Item>
)
