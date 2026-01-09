import * as React from 'react'

export interface DragState {
  draggedIndex: number | null
  draggedHeight: number | null
  itemHeights: Map<number, number>
  closestEdge: 'top' | 'bottom' | 'left' | 'right' | null
  targetIndex: number | null
}

export interface DragContextValue extends DragState {
  registerItem: (index: number, height: number) => void
  setDraggedIndex: (index: number | null) => void
  setDraggedHeight: (height: number | null) => void
  setClosestEdge: (edge: 'top' | 'bottom' | 'left' | 'right' | null) => void
  setTargetIndex: (index: number | null) => void
}

export const DragContext = React.createContext<DragContextValue>({
  draggedIndex: null,
  draggedHeight: null,
  itemHeights: new Map(),
  closestEdge: null,
  targetIndex: null,
  registerItem: () => {},
  setDraggedIndex: () => {},
  setDraggedHeight: () => {},
  setClosestEdge: () => {},
  setTargetIndex: () => {},
})

export const useDragContext = () => React.useContext(DragContext)
