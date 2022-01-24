// @flow
import * as React from 'react'
import { forwardRef } from 'react'

import { BoxProps } from '../../box'
import { Flex } from '../../layout'
import S from './InputGroup.style'

export interface InputGroupProps extends BoxProps {}

const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  ({ className, children }, ref) => {
    return (
      <Flex sx={S} className={className} ref={ref} direction="row">
        {children}
      </Flex>
    )
  },
)

export default InputGroup
