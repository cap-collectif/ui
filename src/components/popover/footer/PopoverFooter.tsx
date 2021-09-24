import * as React from 'react'

import { Flex, FlexProps } from '../../layout/Flex'

type PopoverFooterProps = FlexProps & {
  children: string | React.ReactNode
}

const PopoverFooter = ({ children, ...props }: PopoverFooterProps) => (
  <Flex direction="row" justify="flex-end" {...props}>
    {children}
  </Flex>
)

PopoverFooter.displayName = 'Popover.Footer'

export default PopoverFooter as React.FC<PopoverFooterProps>
