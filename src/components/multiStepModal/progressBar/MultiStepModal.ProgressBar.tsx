import { motion, AnimatePresence } from 'framer-motion'
import * as React from 'react'

import { ease } from '../../../utils/motion'
import { Box } from '../../box'
import { Flex } from '../../layout'
import { useMultiStepModal } from '../MultiStepModal.context'

const ItemFillProgressBar = motion(Box)

const variants = {
  empty: { width: 0 },
  fill: { width: '100%' },
}

const MultiStepModalProgressBar = () => {
  const { steps, currentStep } = useMultiStepModal()
  if (!steps[currentStep]) return null

  return (
    <Flex direction="row" spacing={1} mt={6}>
      {steps.map((step, idx) => (
        <Box key={step.id} bg="blue.200" height={1} flex={1}>
          <AnimatePresence initial={false}>
            {idx <= currentStep && (
              <ItemFillProgressBar
                key={`item-fill-${step.id}`}
                height="100%"
                bg="blue.500"
                initial="empty"
                animate="fill"
                exit="empty"
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
