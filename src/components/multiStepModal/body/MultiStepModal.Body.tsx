import { AnimatePresence, motion } from 'framer-motion'
import * as React from 'react'

import { Box } from '../../box'
import type { ModalBodyProps } from '../../modal/body/ModalBody'
import { ModalBody } from '../../modal/body/ModalBody'
import type { Step } from '../MultiStepModal.context'
import { useMultiStepModal } from '../MultiStepModal.context'

type Direction = 'LEFT' | 'RIGHT'

export type Props = ModalBodyProps

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
    if (steps.length === 0) {
      const stepsRegistered: Step[] = React.Children.toArray(children)
        .filter(modal => typeof modal !== 'string')
        .map(modal => {
          // Typescript has a problem here where it says that modal can be a string even if I filter those out
          // @ts-ignore
          const { label, validationLabel, id, info } = modal.props
          return {
            id: id,
            label: label,
            validationLabel: validationLabel,
            info: info && {
              url: info.url,
              label: info.label,
            },
          }
        })
      registerSteps(stepsRegistered)
    }
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
