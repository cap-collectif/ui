import * as React from 'react'

import ModalHeader, { ModalHeaderProps } from '../../modal/header/ModalHeader'
import ModalHeaderLabel from '../../modal/headerLabel/ModalHeaderLabel'
import MultiStepModalProgressBar from '../progressBar/MultiStepModalProgressBar'

type SubComponents = {
  Label: typeof ModalHeaderLabel
}

type MultiStepModalHeaderProps = ModalHeaderProps

const MultiStepModalHeader: React.FC<MultiStepModalHeaderProps> &
  SubComponents = ({ children, ...rest }) => {
  return (
    <ModalHeader position="relative" border="none" {...rest}>
      {children}

      <MultiStepModalProgressBar />
    </ModalHeader>
  )
}

MultiStepModalHeader.Label = ModalHeaderLabel

MultiStepModalHeader.displayName = 'MultiStepModal.Header'

export default MultiStepModalHeader
