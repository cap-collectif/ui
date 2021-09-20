import cn from 'classnames'
import * as React from 'react'

import { FlexProps, Flex } from '../../layout'

type ModalBodyProps = FlexProps & {
  readonly children: React.ReactNode
}

export const ModalBody = ({ children, className, ...rest }: ModalBodyProps) => {
  return (
    <Flex
      as="main"
      p={6}
      direction="column"
      className={cn('cap-modal__footer', className)}
      overflow="auto"
      {...rest}
    >
      {children}
    </Flex>
  )
}

ModalBody.displayName = 'Modal.Body'

export default ModalBody
