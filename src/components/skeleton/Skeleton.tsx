import { AnimatePresence, motion } from 'framer-motion'
import * as React from 'react'

import { LAYOUT_TRANSITION_SPRING } from '../../styles/modules/variables'
import { Box, BoxProps } from '../box'
import { SkeletonCircle } from './circle/SkeletonCircle'
import { SkeletonText } from './text/SkeletonText'

export interface SkeletonProps extends Omit<BoxProps, 'placeholder'> {
  isLoaded: boolean
  children: React.ReactNode
  placeholder: React.ReactNode
}

type SubComponents = {
  Text: typeof SkeletonText
  Circle: typeof SkeletonCircle
}

const SkeletonInner = motion(Box)

export const Skeleton: React.FC<SkeletonProps> & SubComponents = ({
  isLoaded = false,
  children,
  placeholder,
  ...rest
}) => (
  <AnimatePresence>
    {isLoaded ? (
      <SkeletonInner
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={LAYOUT_TRANSITION_SPRING}
        exit={{ opacity: 0 }}
        {...rest}
      >
        {children}
      </SkeletonInner>
    ) : (
      placeholder
    )}
  </AnimatePresence>
)

Skeleton.Text = SkeletonText
Skeleton.Circle = SkeletonCircle

Skeleton.displayName = 'Skeleton'

export default Skeleton
