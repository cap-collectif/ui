import * as React from 'react'
import {
  draggable,
  dropTargetForElements,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine'
import { attachClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge'
import { DragListContext, useDragContext } from '../DragContext'

export interface DragnDropItemProps {
  draggableId: string
  index: number
  children?: React.ReactNode
}

const DragnDropItem: React.FC<DragnDropItemProps> = ({
  children,
  draggableId,
  index,
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)
  const list = React.useContext(DragListContext)
  const droppableId = list?.droppableId
  const {
    instanceId,
    draggedDroppableId,
    targetDroppableId,
    draggedIndex,
    draggedHeight,
    targetIndex,
    closestEdge,
    registerItem,
  } = useDragContext()

  // Register item height
  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    registerItem(index, element.offsetHeight)
    return list?.registerIndex(element, index)
  }, [index, list, registerItem])

  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    const data = { instanceId, draggableId, index, droppableId }
    return combine(
      draggable({
        element,
        getInitialData: () => data,
        onDragStart: () => setIsDragging(true),
        onDrop: () => setIsDragging(false),
      }),
      dropTargetForElements({
        element,
        canDrop: ({ source }) => source.data.instanceId === instanceId,
        getData: ({ input }) =>
          attachClosestEdge(data, {
            input,
            element,
            allowedEdges: ['top', 'bottom'],
          }),
      }),
    )
  }, [draggableId, droppableId, index, instanceId])

  const getTransform = (): string => {
    if (
      draggedIndex === null ||
      targetIndex === null ||
      draggedHeight === null ||
      draggedDroppableId !== droppableId ||
      targetDroppableId !== droppableId
    ) {
      return 'none'
    }

    // Don't move the dragged item itself
    if (index === draggedIndex) {
      return 'none'
    }

    // Calculate the effective insertion point
    let insertionIndex = targetIndex
    if (closestEdge === 'bottom') {
      insertionIndex = targetIndex + 1
    }

    // Determine if this item should move
    if (draggedIndex < insertionIndex) {
      // Dragging down: items between draggedIndex+1 and insertionIndex-1 move up
      if (index > draggedIndex && index < insertionIndex) {
        return `translateY(-${draggedHeight}px)`
      }
    } else if (draggedIndex > insertionIndex) {
      // Dragging up: items between insertionIndex and draggedIndex-1 move down
      if (index >= insertionIndex && index < draggedIndex) {
        return `translateY(${draggedHeight}px)`
      }
    }

    return 'none'
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.4 : 1,
        cursor: 'grab',
        transform: getTransform(),
        transition:
          draggedIndex !== null
            ? 'transform 200ms cubic-bezier(0.2, 0, 0, 1)'
            : 'none',
      }}
    >
      {children}
    </div>
  )
}

export default DragnDropItem
