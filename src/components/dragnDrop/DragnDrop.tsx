import * as React from 'react'
import type { BoxProps } from '../box'
import { DragDropContext, DragDropContextProps } from 'react-beautiful-dnd'
import DragnDropItem from './item/DragnDropItem'
import DragnDropList from './list/DragnDropList'

export interface DragnDropProps
  extends DragDropContextProps,
    Omit<BoxProps, 'children' | 'onDragEnd' | 'onDragStart'> {}
type DragnDropComponent = React.FC<DragnDropProps> & {
  Item: typeof DragnDropItem
  List: typeof DragnDropList
}

const DragnDrop: DragnDropComponent = ({ children, onDragEnd }) => {
  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
}
DragnDrop.Item = DragnDropItem
DragnDrop.List = DragnDropList
export default DragnDrop
