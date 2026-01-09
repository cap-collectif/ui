import { extractClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge'
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import * as React from 'react'

import type { BoxProps } from '../box'
import { DragContext } from './DragContext'
import DragnDropItem from './item/DragnDropItem'
import DragnDropList from './list/DragnDropList'

export interface DropResult {
  source: {
    draggableId: string
    index: number
    droppableId?: string
  }
  destination: {
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
  const [draggedIndex, setDraggedIndex] = React.useState<number | null>(null)
  const [draggedHeight, setDraggedHeight] = React.useState<number | null>(null)
  const [targetIndex, setTargetIndex] = React.useState<number | null>(null)
  const [closestEdge, setClosestEdge] =
    React.useState<'top' | 'bottom' | 'right' | 'left' | null>(null)
  const itemHeightsRef = React.useRef<Map<number, number>>(new Map())

  const registerItem = React.useCallback((index: number, height: number) => {
    itemHeightsRef.current.set(index, height)
  }, [])

  React.useEffect(() => {
    return monitorForElements({
      onDragStart: ({ source }) => {
        const index = source.data.index as number
        setDraggedIndex(index)
        setDraggedHeight(itemHeightsRef.current.get(index) || null)
      },
      onDrag: ({ location }) => {
        const target = location.current.dropTargets[0]
        if (target) {
          const idx = target.data.index as number
          const edge = extractClosestEdge(target.data)
          setTargetIndex(idx)
          setClosestEdge(edge)
        }
      },
      onDrop: ({ source, location }) => {
        const destination = location.current.dropTargets[0]

        setDraggedIndex(null)
        setDraggedHeight(null)
        setTargetIndex(null)
        setClosestEdge(null)

        if (!destination) {
          onDragEnd?.({
            source: {
              draggableId: source.data.draggableId as string,
              index: source.data.index as number,
            },
            destination: null,
          })
          return
        }

        const sourceIndex = source.data.index as number
        const targetIdx = destination.data.index as number
        const edge = extractClosestEdge(destination.data)

        // Calculate where the item will be inserted
        const insertAt = edge === 'bottom' ? targetIdx + 1 : targetIdx

        // Convert insertion point to final index after removal
        let destinationIndex: number
        if (sourceIndex < insertAt) {
          // Item was before insertion point, so after removal, index shifts down by 1
          destinationIndex = insertAt - 1
        } else {
          // Item was at or after insertion point, no shift needed
          destinationIndex = insertAt
        }

        onDragEnd?.({
          source: {
            draggableId: source.data.draggableId as string,
            index: sourceIndex,
          },
          destination: {
            draggableId: destination.data.draggableId as string,
            index: destinationIndex,
            droppableId: destination.data.droppableId as string | undefined,
          },
        })
      },
    })
  }, [onDragEnd])

  const contextValue = React.useMemo(
    () => ({
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
    [draggedIndex, draggedHeight, closestEdge, targetIndex, registerItem],
  )

  return (
    <DragContext.Provider value={contextValue}>{children}</DragContext.Provider>
  )
}

DragnDrop.Item = DragnDropItem
DragnDrop.List = DragnDropList

export default DragnDrop
