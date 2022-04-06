import cn from 'classnames'
import * as React from 'react'

import { cleanChildren } from '../../../utils/jsx'
import { Flex, FlexProps } from '../../layout'
import { FormGuideline } from '../formGuideline'
import S from './InputGroup.style'

export interface InputGroupProps extends FlexProps {}

const InputGroup: React.FC<InputGroupProps> = React.forwardRef<
  HTMLDivElement,
  InputGroupProps
>(({ className, children, ...props }, ref) => {
  const cleanChildren1 = cleanChildren(children)
  const hasGuideline = cleanChildren1.find(
    child => child.type === FormGuideline,
  )
  return (
    <Flex
      sx={S(!!hasGuideline)}
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
