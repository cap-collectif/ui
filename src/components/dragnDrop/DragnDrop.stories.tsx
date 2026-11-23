import { Meta, StoryFn } from '@storybook/react'
import * as React from 'react'

import { ListCard } from '../ListCard'
import { Flex } from '../layout'
import { Tag } from '../tag'
import DragnDrop, { DragnDropProps, DropResult } from './DragnDrop'

const meta: Meta<DragnDropProps> = {
  title: 'Library/DragnDrop',
  component: DragnDrop,
  args: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta
const initial: { id: string; content: string }[] = [
  { id: '1', content: 'Hello world 1' },
  { id: '2', content: 'Hello world 2' },
  { id: '3', content: 'Hello world 3' },
  { id: '4', content: 'Hello world 4' },
  { id: '5', content: 'Hello world 5' },
  { id: '6', content: 'Hello world 6' },
  { id: '7', content: 'Hello world 7' },
  { id: '8', content: 'Hello world 8' },
  { id: '9', content: 'Hello world 9' },
]
const reorder = (
  list: { id: string; content: string }[],
  startIndex: number,
  endIndex: number,
) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}
export const Default: StoryFn<DragnDropProps> = () => {
  const [vals, setVals] = React.useState(initial)
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    const newVals = reorder(vals, result.source.index, result.destination.index)

    setVals(newVals)
  }
  return (
    <DragnDrop onDragEnd={onDragEnd}>
      <DragnDrop.List droppableId="list" overflow="hidden">
        {vals.map((val, index) => (
          <DragnDrop.Item draggableId={val.id} index={index} key={val.id}>
            <ListCard.Item draggable>
              <ListCard.Item.Label>{val.content}</ListCard.Item.Label>
            </ListCard.Item>
          </DragnDrop.Item>
        ))}
      </DragnDrop.List>
    </DragnDrop>
  )
}

export const withTags: StoryFn<DragnDropProps> = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [vals, setVals] = React.useState(initial)
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    const newVals = reorder(vals, result.source.index, result.destination.index)

    setVals(newVals)
  }
  return (
    <DragnDrop onDragEnd={onDragEnd}>
      <DragnDrop.List droppableId="list">
        {vals.map((val, index) => (
          <DragnDrop.Item draggableId={val.id} index={index} key={val.id}>
            <Tag variantColor={'info'}>{val.content}</Tag>
          </DragnDrop.Item>
        ))}
      </DragnDrop.List>
    </DragnDrop>
  )
}

export const BetweenLists: StoryFn<DragnDropProps> = () => {
  const [lists, setLists] = React.useState<Record<string, typeof initial>>({
    available: initial.slice(0, 3),
    ranked: [],
  })

  const onDragEnd = ({ source, destination }: DropResult) => {
    const from = source.droppableId
    const to = destination?.droppableId
    if (!destination || !from || !to) return

    setLists(current => {
      const sourceItems = [...current[from]]
      const [item] = sourceItems.splice(source.index, 1)
      const destinationItems = from === to ? sourceItems : [...current[to]]
      destinationItems.splice(destination.index, 0, item)
      return { ...current, [from]: sourceItems, [to]: destinationItems }
    })
  }

  return (
    <DragnDrop onDragEnd={onDragEnd}>
      <Flex gap={4}>
        {Object.entries(lists).map(([id, items]) => (
          <DragnDrop.List
            key={id}
            droppableId={id}
            minHeight="200px"
            width="50%"
            p={2}
            border="1px solid"
            borderColor="gray.300"
          >
            {id === 'available' ? 'Available' : 'Ranked'}
            {items.map((item, index) => (
              <DragnDrop.Item key={item.id} draggableId={item.id} index={index}>
                <ListCard.Item draggable>
                  <ListCard.Item.Label>{item.content}</ListCard.Item.Label>
                </ListCard.Item>
              </DragnDrop.Item>
            ))}
          </DragnDrop.List>
        ))}
      </Flex>
    </DragnDrop>
  )
}
