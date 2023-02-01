import * as React from 'react'
import { Draggable, DraggableProps } from 'react-beautiful-dnd'

export interface DragnDropItemProps extends Omit<DraggableProps, 'children'> {}

const DragnDropItem: React.FC<DragnDropItemProps> = ({
  children,
  draggableId,
  index,
}) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </div>
      )}
    </Draggable>
  )
}

export default DragnDropItem
