import * as React from 'react'
import { Droppable, DroppableProps } from 'react-beautiful-dnd'
import { Flex } from '../../layout'
import { BoxProps } from '../../box'

export interface DragnDropListProps
  extends Omit<DroppableProps, 'children'>,
    BoxProps {}

const DragnDropList: React.FC<DragnDropListProps> = ({
  children,
  droppableId = 'list',
  ...rest
}) => {
  return (
    <Droppable droppableId={droppableId} {...rest}>
      {provided => (
        <Flex
          direction="column"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {children}
          {provided.placeholder}
        </Flex>
      )}
    </Droppable>
  )
}

export default DragnDropList
