import { Meta, Story } from '@storybook/react'
import * as React from 'react'
import { DropResult } from 'react-beautiful-dnd'

import { ListCard } from '../ListCard'
import { Tag } from '../tag'
import DragnDrop, { DragnDropProps } from './DragnDrop'

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
export const Default: Story<DragnDropProps> = () => {
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
      <DragnDrop.List
        droppableId="list"
        borderRadius="8px"
        overflow="hidden"
        border="normal"
        borderColor="gray.200"
      >
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

export const withTags: Story<DragnDropProps> = () => {
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
