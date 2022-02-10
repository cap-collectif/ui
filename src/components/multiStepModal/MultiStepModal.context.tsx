import * as React from 'react'

export type Step = {
  id: string
  validationLabel: string
  label?: string
  info?: {
    url: string
    label: string
  }
}

export type Context = {
  currentStep: number
  setCurrentStep: (stepIndex: number) => void
  steps: Step[]
  registerSteps: (steps: Step[]) => void
}

export const MultiStepModalContext = React.createContext<Context>({
  currentStep: 0,
  setCurrentStep: () => {},
  steps: [],
  registerSteps: () => {},
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
