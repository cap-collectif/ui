import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

import colors from '../../../styles/modules/colors'
import { Box, BoxProps } from '../../box'

export interface SkeletonTextProps extends BoxProps {
  animate?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const SkeletonTextInner = styled(motion(Box))(
  variant({
    variants: {
      sm: {
        height: 4,
      },
      md: {
        height: 5,
      },
      lg: {
        height: 6,
      },
    },
  }),
)

export const SkeletonText: React.FC<SkeletonTextProps> = ({
  size,
  animate = true,
  ...rest
}) => (
  <SkeletonTextInner
    position="relative"
    bg="gray.150"
    borderRadius="normal"
    variant={size}
    transition={{
      duration: 1,
      repeatType: 'reverse',
      repeat: Infinity,
      ease: 'linear',
    }}
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
    {...rest}
  />
)

SkeletonText.displayName = 'SkeletonText'

export default SkeletonText
