import { AnimatePresence, motion } from 'framer-motion'
import * as React from 'react'
import { ResponsiveValue } from 'styled-system'

import { ThemeColorsValues } from '../../styles/modules/colors'
import { ease } from '../../utils/motion'
import { Box } from '../box'
import { Flex } from '../layout'

const ItemFillProgressBar = motion(Box)

const variants = {
  empty: { width: 0 },
  fill: { width: '100%' },
}
export interface ProgressBarProps {
  totalSteps: number
  currentStep: number
  color?: ResponsiveValue<ThemeColorsValues> | string
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalSteps,
  currentStep,
  color,
}) => {
  const steps = React.useMemo(() => Array.from(Array(totalSteps).keys()), [
    totalSteps,
  ])
  return (
    <Flex direction="row" spacing={1} width="100%">
      {steps.map(step => (
        <Box key={`item-${step}`} bg="blue.200" height={1} flex={1}>
          <AnimatePresence initial={step === currentStep}>
            {step <= currentStep && (
              <ItemFillProgressBar
                key={`item-fill-${step}`}
                height="100%"
                bg={color ? color : 'primary'}
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

export default ProgressBar
