import cn from 'classnames'
import * as React from 'react'

import { useIsMobile } from '../../../hooks/useDeviceDetect'
import { FlexProps, Flex } from '../../layout'

export type ModalBodyProps = FlexProps & {
  readonly children: React.ReactNode
}

export const ModalBody = ({ children, className, ...rest }: ModalBodyProps) => {
  const isMobile = useIsMobile()

  return (
    <Flex
      as="div"
      p={isMobile ? 'md' : 'lg'}
      pt={isMobile ? 0 : 'lg'}
      height="100%"
      direction="column"
      className={cn('cap-modal__body', className)}
      overflow="auto"
      {...rest}
    >
      {children}
    </Flex>
  )
}

ModalBody.displayName = 'Modal.Body'

export default ModalBody
