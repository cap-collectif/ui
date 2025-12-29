import * as React from 'react'
import {
  draggable,
  dropTargetForElements,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine'
import { attachClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge'
import { useDragContext } from '../DragContext'

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
  const {
    draggedIndex,
    draggedHeight,
    targetIndex,
    closestEdge,
    registerItem,
  } = useDragContext()

  // Register item height
  React.useEffect(() => {
    const element = ref.current
    if (element) {
      registerItem(index, element.offsetHeight)
    }
  }, [index, registerItem])

  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    return combine(
      draggable({
        element,
        getInitialData: () => ({ draggableId, index }),
        onDragStart: () => setIsDragging(true),
        onDrop: () => setIsDragging(false),
      }),
      dropTargetForElements({
        element,
        getData: ({ input, element: el }) => {
          const data = { draggableId, index }
          return attachClosestEdge(data, {
            input,
            element: el,
            allowedEdges: ['top', 'bottom'],
          })
        },
        getIsSticky: () => true,
      }),
    )
  }, [draggableId, index])

  const getTransform = (): string => {
    if (draggedIndex === null || targetIndex === null || draggedHeight === null) {
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
        transition: draggedIndex !== null ? 'transform 200ms cubic-bezier(0.2, 0, 0, 1)' : 'none',
      }}
    >
      {children}
    </div>
  )
}

export default DragnDropItem
