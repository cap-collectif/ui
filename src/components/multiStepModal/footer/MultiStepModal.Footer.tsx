import * as React from 'react'

import { useIsMobile } from '../../../hooks/useDeviceDetect'
import { Button } from '../../button'
import { ButtonGroup } from '../../buttonGroup'
import { CapUIIcon } from '../../icon'
import ModalFooter from '../../modal/footer/ModalFooter'
import type { ModalFooterProps } from '../../modal/footer/ModalFooter'
import { useMultiStepModal } from '../MultiStepModal.context'
import MultiStepModalFooterBackButton from './MultiStepModal.Footer.BackButton'
import MultiStepModalFooterContinueButton from './MultiStepModal.Footer.ContinueButton'
import MultiStepModalFooterValidationButton from './MultiStepModal.Footer.ValidationButton'

type Props = ModalFooterProps & {
  children: React.ReactNode
}

const NAVIGATION_BUTTONS = [
  'MultiStepModal.Footer.BackButton',
  'MultiStepModal.Footer.ContinueButton',
  'MultiStepModal.Footer.ValidationButton',
]

const MultiStepModalFooter = ({ children, ...props }: Props) => {
  const { currentStep, steps } = useMultiStepModal()
  const step = steps[currentStep]
  const isMobile = useIsMobile()

  if (!step) return null

  const navigationChildren = React.Children.toArray(children).filter(child => {
    if (React.isValidElement(child) && typeof child.type !== 'string') {
      // TS says that type can be a string even if I filter it
      // @ts-ignore
      return NAVIGATION_BUTTONS.includes(child.type?.displayName)
    }
    return undefined
  })

  return (
    <ModalFooter {...props} justify="flex-end">
      {!isMobile && step.info && (
        <Button
          position="absolute"
          left={6}
          as="a"
          target="_blank"
          href={step.info.url}
          variantSize="small"
          variant="link"
          leftIcon={CapUIIcon.Info}
        >
          {step.info.label}
        </Button>
      )}

      <ButtonGroup>{navigationChildren}</ButtonGroup>
    </ModalFooter>
  )
}

MultiStepModalFooter.displayName = 'MultiStepModal.Footer'

MultiStepModalFooter.BackButton = MultiStepModalFooterBackButton
MultiStepModalFooter.ContinueButton = MultiStepModalFooterContinueButton
MultiStepModalFooter.ValidationButton = MultiStepModalFooterValidationButton

export default MultiStepModalFooter
