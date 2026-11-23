import * as React from 'react'
import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import { Flex } from '../../layout'
import { BoxProps } from '../../box'
import { DragListContext, useDragContext } from '../DragContext'

export interface DragnDropListProps extends BoxProps {
  droppableId?: string
}

const DragnDropList: React.FC<DragnDropListProps> = ({
  children,
  droppableId = 'list',
  ...rest
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { instanceId } = useDragContext()
  const indexes = React.useRef(new Map<HTMLElement, number>())
  const registerIndex = React.useCallback(
    (element: HTMLElement, index: number) => {
      indexes.current.set(element, index)
      return () => {
        indexes.current.delete(element)
      }
    },
    [],
  )
  const list = React.useMemo(() => ({ droppableId, registerIndex }), [
    droppableId,
    registerIndex,
  ])

  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    return dropTargetForElements({
      element,
      canDrop: ({ source }) => source.data.instanceId === instanceId,
      getData: () => {
        let index = 0
        indexes.current.forEach(itemIndex => {
          index = Math.max(index, itemIndex + 1)
        })
        return { instanceId, droppableId, index, draggableId: '' }
      },
    })
  }, [droppableId, instanceId])

  return (
    <Flex direction="column" ref={ref} {...rest}>
      <DragListContext.Provider value={list}>
        {children}
      </DragListContext.Provider>
    </Flex>
  )
}

export default DragnDropList
