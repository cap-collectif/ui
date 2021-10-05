import cn from 'classnames'
import * as React from 'react'

import { Flex, FlexProps } from '../../layout/Flex'

type PopoverFooterProps = FlexProps & {
  children: React.ReactNode
}

const PopoverFooter = ({
  children,
  className,
  ...props
}: PopoverFooterProps) => (
  <Flex
    direction="row"
    justify="flex-end"
    className={cn('cap-popover__footer', className)}
    mt={6}
    {...props}
  >
    {children}
  </Flex>
)

PopoverFooter.displayName = 'Popover.Footer'

export default PopoverFooter as React.FC<PopoverFooterProps>
