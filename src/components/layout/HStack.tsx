import * as React from 'react'
import { FC, forwardRef } from 'react'

import { PolymorphicComponent } from '../box'
import Flex, { FlexProps } from './Flex'

export interface HStackProps extends FlexProps {}

export const HStack: FC<HStackProps> = forwardRef<HTMLElement, HStackProps>(
  ({ children, ...props }, ref) => {
    return (
      <Flex direction="row" ref={ref} {...props}>
        {children}
      </Flex>
    )
  },
)

export default HStack as PolymorphicComponent<HStackProps>