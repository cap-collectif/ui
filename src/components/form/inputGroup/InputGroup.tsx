import cn from 'classnames'
import * as React from 'react'
import { forwardRef } from 'react'

import { Flex, FlexProps } from '../../layout'
import S from './InputGroup.style'

export interface InputGroupProps extends FlexProps {}

const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Flex
        sx={S}
        className={cn('cap-input-group', className)}
        ref={ref}
        direction="row"
        {...props}
      >
        {children}
      </Flex>
    )
  },
)
InputGroup.displayName = 'InputGroup'

export default InputGroup
