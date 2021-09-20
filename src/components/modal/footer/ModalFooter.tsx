import cn from 'classnames'
import * as React from 'react'

import { FlexProps, Flex } from '../../layout'

type ModalFooterProps = FlexProps & {
  readonly children: React.ReactNode
  readonly infoUrl?: string
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className,
  infoUrl,
  ...rest
}) => {
  return (
    <Flex
      as="footer"
      px={6}
      py={4}
      align="center"
      justify="flex-end"
      borderTop="normal"
      borderColor="gray.200"
      className={cn('cap-modal__footer', className)}
      {...rest}
    >
      {children}
    </Flex>
  )
}

ModalFooter.displayName = 'Modal.Footer'

export default ModalFooter
