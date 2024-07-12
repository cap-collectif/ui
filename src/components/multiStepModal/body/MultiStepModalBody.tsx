import { motion } from 'framer-motion'
import * as React from 'react'

import { Box } from '../../box'
import type { ModalBodyProps } from '../../modal/body/ModalBody'
import { ModalBody } from '../../modal/body/ModalBody'
import { DIRECTION } from '../MultiStepModal.context'
import { useMultiStepModal } from '../MultiStepModal.context'

export type MultiStepModalBodyProps = ModalBodyProps

const variants = {
  enter: (direction: DIRECTION) => ({
    x: direction === DIRECTION.LEFT ? '-40%' : '40%', // we set 40% because for some reason 50% is shifting the layout in chrome
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: DIRECTION) => ({
    x: direction === DIRECTION.LEFT ? '20%' : '-20%',
    opacity: 0,
  }),
}

const Content = motion(Box)

const MultiStepModalBody: React.FC<MultiStepModalBodyProps> = ({
  children,
  ...rest
}) => {
  const { currentStep, direction } = useMultiStepModal()

  return (
    <ModalBody overflowX="hidden" {...rest}>
      <Content
        key={currentStep}
        variants={variants}
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ ease: 'easeOut', duration: 0.2 }}
      >
        {children}
      </Content>
    </ModalBody>
  )
}

MultiStepModalBody.displayName = 'MultiStepModal.Body'

export default MultiStepModalBody
