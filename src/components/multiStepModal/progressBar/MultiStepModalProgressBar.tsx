import { motion, AnimatePresence } from 'framer-motion'
import * as React from 'react'

import { ease } from '../../../utils/motion'
import { Box } from '../../box'
import { Flex } from '../../layout'
import { DIRECTION, useMultiStepModal } from '../MultiStepModal.context'

const ItemFillProgressBar = motion(Box)

const variants = {
  empty: { width: 0 },
  fill: { width: '100%' },
}

const MultiStepModalProgressBar = () => {
  const { totalSteps, currentStep, direction } = useMultiStepModal()

  const steps = React.useMemo(() => Array.from(Array(totalSteps).keys()), [
    totalSteps,
  ])

  return (
    <Flex
      direction="row"
      spacing={1}
      position="absolute"
      width="100%"
      left={0}
      bottom={0}
    >
      {steps.map(step => (
        <Box key={`item-${step}`} bg="blue.200" height={1} flex={1}>
          <AnimatePresence
            initial={step === currentStep && direction !== DIRECTION.LEFT}
          >
            {step <= currentStep && (
              <ItemFillProgressBar
                key={`item-fill-${step}`}
                height="100%"
                bg="blue.500"
                initial="empty"
                animate="fill"
                variants={variants}
                transition={{ duration: 0.3, ease }}
              />
            )}
          </AnimatePresence>
        </Box>
      ))}
    </Flex>
  )
}

export default MultiStepModalProgressBar
