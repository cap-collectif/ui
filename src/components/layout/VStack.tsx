import * as React from 'react'

import Flex, { FlexProps } from './Flex'

export interface VStackProps extends FlexProps {}

export const VStack: React.FC<VStackProps> = React.forwardRef<
  HTMLElement,
  VStackProps
>(({ children, ...props }, ref) => {
  return (
    <Flex direction="column" ref={ref} {...props}>
      {children}
    </Flex>
  )
})

export default VStack
