import * as React from 'react'

import ModalFooter from '../../modal/footer/ModalFooter'
import type { ModalFooterProps } from '../../modal/footer/ModalFooter'

type MultiStepModalFooterProps = ModalFooterProps

const MultiStepModalFooter: React.FC<MultiStepModalFooterProps> = ({ children, ...rest }) => {
  return (
    <ModalFooter {...rest}>
      {children}
    </ModalFooter>
  )
}

MultiStepModalFooter.displayName = 'MultiStepModal.Footer'

export default MultiStepModalFooter
