import * as React from 'react'

import { Button } from '../../button'
import type { ButtonProps } from '../../button'
import { CapUIIcon } from '../../icon'
import { useMultiStepModal } from '../MultiStepModal.context'

type Props = ButtonProps

const MultiStepModalFooterContinueButton: React.FC<Props> = (props: Props) => {
  const { currentStep, steps, setCurrentStep } = useMultiStepModal()

  const nextStep = steps[currentStep + 1]
    ? () => setCurrentStep(currentStep + 1)
    : null

  if (!nextStep) return null

  return (
    <Button
      variant="secondary"
      variantColor="primary"
      variantSize="medium"
      rightIcon={CapUIIcon.LongArrowRight}
      onClick={nextStep}
      {...props}
    >
      {steps[currentStep].validationLabel}
    </Button>
  )
}

MultiStepModalFooterContinueButton.displayName =
  'MultiStepModal.Footer.ContinueButton'

export default MultiStepModalFooterContinueButton
