import * as React from 'react'

import { Button } from '../../button'
import type { ButtonProps } from '../../button'
import { useModal } from '../../modal/Modal.context'
import { useMultiStepModal } from '../MultiStepModal.context'

export type FooterBackButtonProps = ButtonProps & {
  wording: {
    firstStepWording: string
    otherStepsWording: string
  }
}

const MultiStepModalFooterBackButton: React.FC<FooterBackButtonProps> = ({
  wording,
  ...props
}: FooterBackButtonProps) => {
  const { hide } = useModal()
  const { currentStep, steps, setCurrentStep } = useMultiStepModal()
  const isFirstStep = currentStep === 0

  const previousStep = steps[currentStep - 1]
    ? () => setCurrentStep(currentStep - 1)
    : null

  return (
    <Button
      variant="secondary"
      variantColor="hierarchy"
      variantSize="medium"
      onClick={() => {
        isFirstStep ? hide() : previousStep ? previousStep() : undefined
      }}
      {...props}
    >
      {isFirstStep ? wording.firstStepWording : wording.otherStepsWording}
    </Button>
  )
}

MultiStepModalFooterBackButton.displayName = 'MultiStepModal.Footer.BackButton'

export default MultiStepModalFooterBackButton
