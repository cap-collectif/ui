import { AnimatePresence, motion } from 'framer-motion'
import * as React from 'react'

import { Box } from '../../box'
import type { ModalBodyProps } from '../../modal/body/ModalBody'
import { ModalBody } from '../../modal/body/ModalBody'
import type { Step } from '../MultiStepModal.context'
import { useMultiStepModal } from '../MultiStepModal.context'

type Direction = 'LEFT' | 'RIGHT'

export type Props = ModalBodyProps & {
  children: React.ReactElement<Step, any>[]
}

const variants = {
  enter: (direction: Direction) => ({
    x: direction === 'LEFT' ? '-50%' : '50%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: Direction) => ({
    x: direction === 'LEFT' ? '20%' : '-20%',
    opacity: 0,
  }),
}

const Content = motion(Box)

const MultiStepModalBody = ({ children, ...rest }: Props) => {
  const { currentStep, steps, registerSteps } = useMultiStepModal()
  const previousModalIndex = React.useRef(currentStep)

  React.useEffect(() => {
    const stepsToRegister: Step[] = React.Children.toArray(children)
      .filter((child => React.isValidElement(child)))
      .map(child => {
        const modalStep = child as React.ReactElement<Step, any>;

        return {
          id: modalStep.props.id,
          label: modalStep.props.label,
          validationLabel: modalStep.props.validationLabel,
          info: modalStep.props.info ? {
            url: modalStep.props.info.url,
            label: modalStep.props.info.label,
          } : undefined,
        }
      })

    const allStepRegistered = stepsToRegister.length === steps.length;

    if(!allStepRegistered) registerSteps(stepsToRegister)
  }, [children, registerSteps, steps])

  React.useEffect(() => {
    previousModalIndex.current = currentStep
  }, [currentStep])

  const direction: Direction =
    previousModalIndex.current > currentStep ? 'LEFT' : 'RIGHT'
  return (
    <ModalBody overflowX="hidden" {...rest}>
      <AnimatePresence exitBeforeEnter initial={false} custom={direction}>
        <Content
          key={steps[currentStep]?.id}
          variants={variants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ ease: 'easeOut', duration: 0.2 }}
        >
          {React.Children.toArray(children)[currentStep]}
        </Content>
      </AnimatePresence>
    </ModalBody>
  )
}

MultiStepModalBody.displayName = 'MultiStepModal.Body'

export default MultiStepModalBody
