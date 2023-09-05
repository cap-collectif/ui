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
  const {
    totalSteps,
    currentStep,
    direction,
    smoothWorkflow,
  } = useMultiStepModal()

  const total = smoothWorkflow ? totalSteps * 2 : totalSteps

  const steps = React.useMemo(() => Array.from(Array(total).keys()), [total])

  const fillIndex = smoothWorkflow ? totalSteps : 0

  return (
    <Flex
      direction="row"
      spacing={smoothWorkflow ? 0 : 1}
      position="absolute"
      width="100%"
      left={0}
      bottom={0}
    >
      {steps.map(step => (
        <Box
          key={`item-${step}`}
          bg="blue.200"
          height={smoothWorkflow ? 0.5 : 1}
          flex={1}
        >
          <AnimatePresence
            initial={
              step === currentStep + fillIndex && direction !== DIRECTION.LEFT
            }
          >
            {step <= currentStep + fillIndex && (
              <ItemFillProgressBar
                key={`item-fill-${step}`}
                height="100%"
                bg="primary"
                initial="empty"
                animate="fill"
                variants={variants}
                transition={{ duration: 0.3, ease }}
                borderTopRightRadius={
                  smoothWorkflow && step === currentStep + fillIndex ? 1 : 0
                }
                borderBottomRightRadius={
                  smoothWorkflow && step === currentStep + fillIndex ? 1 : 0
                }
              />
            )}
          </AnimatePresence>
        </Box>
      ))}
    </Flex>
  )
}

export default MultiStepModalProgressBar
