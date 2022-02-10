import * as React from 'react'

import { Modal, ModalProps } from '../modal'
import { MultiStepModalContext } from './MultiStepModal.context'
import type { Step } from './MultiStepModal.context'
import MultiStepModalBody from './body/MultiStepModal.Body'
import MultiStepModalFooter from './footer/MultiStepModal.Footer'
import MultiStepModalHeader from './header/MultiStepModal.Header'
import MultiStepModalProgressBar from './progressBar/MultiStepModal.ProgressBar'

export interface MultiStepModalProps extends ModalProps {
  defaultStepId?: string
  resetStepOnClose?: boolean
}

const MultiStepModal = ({
  children,
  defaultStepId,
  resetStepOnClose = true,
  onClose,
  ...rest
}: MultiStepModalProps) => {
  const [currentStep, setCurrentStep] = React.useState<number>(0)
  const [stepsRegistered, registerSteps] = React.useState<Step[]>([])

  const context = React.useMemo(
    () => ({
      currentStep,
      setCurrentStep,
      steps: stepsRegistered,
      registerSteps,
    }),
    [currentStep, stepsRegistered],
  )

  React.useEffect(() => {
    const defaultStep: number = defaultStepId
      ? stepsRegistered.findIndex(step => step.id === defaultStepId) || 0
      : 0

    setCurrentStep(defaultStep)
  }, [defaultStepId, resetStepOnClose, stepsRegistered])

  const handleOnClose = () => {
    if (resetStepOnClose) {
      const defaultStep: number = defaultStepId
        ? stepsRegistered.findIndex(step => step.id === defaultStepId) || 0
        : 0
      setCurrentStep(defaultStep)
    }

    if (onClose) onClose()
  }

  return (
    <MultiStepModalContext.Provider value={context}>
      <Modal {...rest} onClose={handleOnClose}>
        {modalProps =>
          typeof children === 'function' ? children(modalProps) : children
        }
      </Modal>
    </MultiStepModalContext.Provider>
  )
}

MultiStepModal.displayName = 'MultiStepModal'

MultiStepModal.Header = MultiStepModalHeader
MultiStepModal.Footer = MultiStepModalFooter
MultiStepModal.ProgressBar = MultiStepModalProgressBar
MultiStepModal.Body = MultiStepModalBody

export default MultiStepModal
