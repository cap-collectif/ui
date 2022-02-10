import * as React from 'react'

import type { ButtonProps } from '../../button'
import { Button } from '../../button'
import { useMultiStepModal } from '../MultiStepModal.context'

type Props = ButtonProps

const MultiStepModalFooterValidationButton: React.FC<Props> = (
  props: Props,
) => {
  const { currentStep, steps } = useMultiStepModal()
  const isLastStep = steps.length - 1 === currentStep

  if (!isLastStep) return null

  return (
    <Button
      variant="primary"
      variantColor="primary"
      variantSize="medium"
      {...props}
    >
      {steps[currentStep].validationLabel}
    </Button>
  )
}

MultiStepModalFooterValidationButton.displayName =
  'MultiStepModal.Footer.ValidationButton'

export default MultiStepModalFooterValidationButton
