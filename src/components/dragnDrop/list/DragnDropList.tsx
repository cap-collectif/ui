import * as React from 'react'
import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
import { Flex } from '../../layout'
import { BoxProps } from '../../box'

export interface DragnDropListProps extends BoxProps {
  droppableId?: string
}

const DragnDropList: React.FC<DragnDropListProps> = ({
  children,
  droppableId = 'list',
  ...rest
}) => {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    return dropTargetForElements({
      element,
      getData: () => ({ droppableId }),
    })
  }, [droppableId])

  return (
    <Flex direction="column" ref={ref} {...rest}>
      {children}
    </Flex>
  )
}

export default DragnDropList
