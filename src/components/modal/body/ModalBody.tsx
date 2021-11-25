import cn from 'classnames'
import * as React from 'react'

import { useIsMobile } from '../../../hooks/useDeviceDetect'
import { FlexProps, Flex } from '../../layout'

type ModalBodyProps = FlexProps & {
  readonly children: React.ReactNode
}

export const ModalBody = ({ children, className, ...rest }: ModalBodyProps) => {
  const isMobile = useIsMobile()

  return (
    <Flex
      as="main"
      px={isMobile ? 4 : 6}
      height="100%"
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
