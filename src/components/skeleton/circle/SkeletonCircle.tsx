import { motion } from 'framer-motion'
import * as React from 'react'

import colors from '../../../styles/modules/colors'
import { Box, BoxProps } from '../../box'

const SkeletonCircleInner = motion(Box)

export interface SkeletonCircleProps extends BoxProps {
  animate?: boolean
  size: number | string
}

export const SkeletonCircle: React.FC<SkeletonCircleProps> = ({
  size,
  animate = true,
  ...rest
}) => (
  <SkeletonCircleInner
    animate={
      animate
        ? {
            backgroundColor: [
              colors.gray['100'],
              colors.gray['150'],
              colors.gray['150'],
            ],
          }
        : {}
    }
    transition={{
      duration: 1,
      repeatType: 'reverse',
      repeat: Infinity,
      ease: 'linear',
    }}
    bg="gray.150"
    width={size}
    height={size}
    borderRadius="100%"
    {...rest}
  />
)

SkeletonCircle.displayName = 'SkeletonCircle'

export default SkeletonCircle
