import cn from 'classnames'
import * as React from 'react'

import { Flex, FlexProps } from '../../layout'
import S from './InputGroup.style'

export interface InputGroupProps extends FlexProps {}

const InputGroup: React.FC<InputGroupProps> = React.forwardRef<
  HTMLDivElement,
  InputGroupProps
>(({ className, children, ...props }, ref) => {
  return (
    <Flex
      sx={S}
      className={cn('cap-input-group', className)}
      ref={ref}
      direction="row"
      wrap="wrap"
      {...props}
    >
      {children}
    </Flex>
  )
})
InputGroup.displayName = 'InputGroup'

export default InputGroup
