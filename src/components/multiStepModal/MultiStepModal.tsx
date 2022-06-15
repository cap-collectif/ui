import * as React from 'react'

import { Modal, ModalProps } from '../modal'
import { DIRECTION, MultiStepModalContext } from './MultiStepModal.context'
import MultiStepModalBody from './body/MultiStepModalBody'
import MultiStepModalFooter from './footer/MultiStepModalFooter'
import MultiStepModalHeader from './header/MultiStepModalHeader'

type SubComponents = {
  Header: typeof MultiStepModalHeader
  Body: typeof MultiStepModalBody
  Footer: typeof MultiStepModalFooter
}

export interface MultiStepModalProps extends ModalProps {
  defaultStep?: number
  resetStepOnClose?: boolean
  children: React.ReactNode
}

const MultiStepModal: React.FC<MultiStepModalProps> & SubComponents = ({
  children,
  defaultStep,
  resetStepOnClose = true,
  onClose,
  ...rest
}) => {
  const [currentStep, setCurrentStep] = React.useState(defaultStep || 0)
  const [direction, setDirection] = React.useState(DIRECTION.RIGHT)

  const contextValue = React.useMemo(
    () => ({
      currentStep,
      totalStep: React.Children.toArray(children).length,
      direction,
      setCurrentStep,
      goToPreviousStep: () => {
        setCurrentStep(currentStep - 1)
        setDirection(DIRECTION.LEFT)
      },
      goToNextStep: () => {
        setCurrentStep(currentStep + 1)
        setDirection(DIRECTION.RIGHT)
      },
    }),
    [currentStep, direction, children],
  )

  const handleOnClose = () => {
    if (resetStepOnClose) setCurrentStep(defaultStep || 0)
    if (onClose) onClose()
  }

  return (
    <Modal {...rest} onClose={handleOnClose}>
      {modalProps => (
        <MultiStepModalContext.Provider
          value={{ ...modalProps, ...contextValue }}
        >
          {children ? React.Children.toArray(children)[currentStep] : null}
        </MultiStepModalContext.Provider>
      )}
    </Modal>
  )
}

MultiStepModal.Header = MultiStepModalHeader
MultiStepModal.Body = MultiStepModalBody
MultiStepModal.Footer = MultiStepModalFooter

MultiStepModal.displayName = 'MultiStepModal'

export default MultiStepModal
