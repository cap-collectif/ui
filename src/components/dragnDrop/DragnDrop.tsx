import { extractClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge'
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import * as React from 'react'

import type { BoxProps } from '../box'
import { DragContext, DragListContext } from './DragContext'
import DragnDropItem from './item/DragnDropItem'
import DragnDropList from './list/DragnDropList'

export interface DropResult {
  source: {
    draggableId: string
    index: number
    droppableId?: string
  }
  destination: {
    /** The targeted item ID, or an empty string when dropping on the list itself. */
    draggableId: string
    index: number
    droppableId?: string
  } | null
}

export interface DragnDropProps
  extends Omit<BoxProps, 'children' | 'onDragEnd' | 'onDragStart'> {
  children?: React.ReactNode
  onDragEnd?: (result: DropResult) => void
}

type DragnDropComponent = React.FC<DragnDropProps> & {
  Item: typeof DragnDropItem
  List: typeof DragnDropList
}

const DragnDrop: DragnDropComponent = ({ children, onDragEnd }) => {
  const [instanceId] = React.useState(() => Symbol('DragnDrop'))
  const [draggedDroppableId, setDraggedDroppableId] = React.useState<string>()
  const [targetDroppableId, setTargetDroppableId] = React.useState<string>()
  const [draggedIndex, setDraggedIndex] = React.useState<number | null>(null)
  const [draggedHeight, setDraggedHeight] = React.useState<number | null>(null)
  const [targetIndex, setTargetIndex] = React.useState<number | null>(null)
  const [closestEdge, setClosestEdge] = React.useState<
    'top' | 'bottom' | 'right' | 'left' | null
  >(null)
  const itemHeightsRef = React.useRef<Map<number, number>>(new Map())

  const registerItem = React.useCallback((index: number, height: number) => {
    itemHeightsRef.current.set(index, height)
  }, [])

  React.useEffect(() => {
    return monitorForElements({
      canMonitor: ({ source }) => source.data.instanceId === instanceId,
      onDragStart: ({ source }) => {
        setDraggedIndex(source.data.index as number)
        setDraggedDroppableId(source.data.droppableId as string | undefined)
        setDraggedHeight(source.element.offsetHeight)
      },
      onDrag: ({ location }) => {
        const target = location.current.dropTargets.find(
          ({ data }) => data.instanceId === instanceId,
        )
        setTargetIndex(target ? (target.data.index as number) : null)
        setTargetDroppableId(target?.data.droppableId as string | undefined)
        setClosestEdge(target ? extractClosestEdge(target.data) : null)
      },
      onDrop: ({ source, location }) => {
        const target = location.current.dropTargets.find(
          ({ data }) => data.instanceId === instanceId,
        )

        setDraggedIndex(null)
        setDraggedDroppableId(undefined)
        setDraggedHeight(null)
        setTargetIndex(null)
        setTargetDroppableId(undefined)
        setClosestEdge(null)

        const origin = {
          draggableId: source.data.draggableId as string,
          index: source.data.index as number,
          droppableId: source.data.droppableId as string | undefined,
        }

        if (!target) {
          onDragEnd?.({ source: origin, destination: null })
          return
        }

        const droppableId = target.data.droppableId as string | undefined
        const targetIndex = target.data.index as number
        const insertAt =
          extractClosestEdge(target.data) === 'bottom'
            ? targetIndex + 1
            : targetIndex
        // Removing the item shifts the insertion point only within its source list.
        const index =
          droppableId === origin.droppableId && origin.index < insertAt
            ? insertAt - 1
            : insertAt

        onDragEnd?.({
          source: origin,
          destination: {
            draggableId: target.data.draggableId as string,
            index,
            droppableId,
          },
        })
      },
    })
  }, [instanceId, onDragEnd])

  const contextValue = React.useMemo(
    () => ({
      instanceId,
      draggedDroppableId,
      targetDroppableId,
      draggedIndex,
      draggedHeight,
      itemHeights: itemHeightsRef.current,
      closestEdge,
      targetIndex,
      registerItem,
      setDraggedIndex,
      setDraggedHeight,
      setClosestEdge,
      setTargetIndex,
    }),
    [
      instanceId,
      draggedDroppableId,
      targetDroppableId,
      draggedIndex,
      draggedHeight,
      closestEdge,
      targetIndex,
      registerItem,
    ],
  )

  return (
    <DragContext.Provider value={contextValue}>
      <DragListContext.Provider value={null}>
        {children}
      </DragListContext.Provider>
    </DragContext.Provider>
  )
}

DragnDrop.Item = DragnDropItem
DragnDrop.List = DragnDropList

export default DragnDrop
