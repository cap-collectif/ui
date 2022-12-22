import * as React from 'react'
import { Flex } from '../../layout'
import { FlexboxProps } from 'styled-system'
export interface TabsButtonProps extends FlexboxProps {
  readonly id: string
}

const TabsButton: React.FC<TabsButtonProps> = ({ children, id }) => {
  return (
    <Flex as="button" id={id}>
      {children}
    </Flex>
  )
}

export default TabsButton
