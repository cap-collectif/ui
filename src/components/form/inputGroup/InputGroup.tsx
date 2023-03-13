import cn from 'classnames'
import * as React from 'react'

import { cleanChildren } from '../../../utils/jsx'
import { Flex, FlexProps } from '../../layout'
import { FormGuideline } from '../formGuideline'
import { FormLabel } from '../formLabel'
import S from './InputGroup.style'

export interface InputGroupProps extends FlexProps {}

const InputGroup: React.FC<InputGroupProps> = React.forwardRef<
  HTMLDivElement,
  InputGroupProps
>(({ className, children, sx, ...props }, ref) => {
  const cleanChildren1 = cleanChildren(children)
  const hasLabel = cleanChildren1.find(child => child.type === FormLabel)
  const hasGuideline = cleanChildren1.find(
    child => child.type === FormGuideline,
  )

  const styles = sx ?? {}

  return (
    <Flex
      sx={{ ...S(!!hasGuideline, !!hasLabel), ...styles }}
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
