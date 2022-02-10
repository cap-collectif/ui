import * as React from 'react'

import ModalHeader, { ModalHeaderProps } from '../../modal/header/ModalHeader'
import ModalHeaderLabel from '../../modal/headerLabel/ModalHeaderLabel'
import { Heading } from '../../typography'
import { useMultiStepModal } from '../MultiStepModal.context'

type Props = ModalHeaderProps

const MultiStepModalHeader = ({ children, ...rest }: Props) => {
  const { currentStep, steps } = useMultiStepModal()
  const isLastStep = steps.length - 1 === currentStep

  if (!steps[currentStep]) return null

  // It's the ModalHeaderLabel here
  const headerLabel = React.isValidElement(React.Children.toArray(children)[0])
    ? // @ts-ignore
      React.Children.toArray(children)[0]?.props?.children
    : undefined

  return (
    <ModalHeader height="66px" {...rest}>
      {!isLastStep && children}
      <Heading>{isLastStep ? headerLabel : steps[currentStep].label}</Heading>
    </ModalHeader>
  )
}

MultiStepModalHeader.Label = ModalHeaderLabel

MultiStepModalHeader.displayName = 'MultiStepModal.Header'

export default MultiStepModalHeader
