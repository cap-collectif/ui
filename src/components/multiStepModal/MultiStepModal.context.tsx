import * as React from 'react'

import {
  ModalContextType as ModalContext,
  DEFAULT_VALUE_CONTEXT as DEFAULT_MODAL_CONTEXT,
} from '../modal/Modal.context'

export enum DIRECTION {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export type Context = ModalContext & {
  currentStep: number
  totalSteps: number
  direction: DIRECTION
  setCurrentStep: (stepIndex: number) => void
  goToPreviousStep: () => void
  goToNextStep: () => void
}

export const MultiStepModalContext = React.createContext<Context>({
  ...DEFAULT_MODAL_CONTEXT,
  currentStep: 0,
  totalSteps: 0,
  direction: DIRECTION.RIGHT,
  setCurrentStep: () => {},
  goToPreviousStep: () => {},
  goToNextStep: () => {},
})

export const useMultiStepModal = (): Context => {
  const context = React.useContext(MultiStepModalContext)
  if (!context) {
    throw new Error(
      `You can't use the MultiStepModalContext outside a MultiStepModal component.`,
    )
  }
  return context
}
