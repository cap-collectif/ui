import cn from 'classnames'
import * as React from 'react'

import { pxToRem } from '../../styles/modules/mixins'
import { Box } from '../box'
import { PolymorphicComponentProps } from '../box/Box'
import { CapUIIcon, CapUIIconSize, Icon } from '../icon'
import { Flex } from '../layout/Flex'
import { styles } from './CircularStep.style'

export type CircularStepProps<T extends React.ElementType = React.ElementType> =
  PolymorphicComponentProps<
    T,
    Readonly<{
      variantSize?: 'small' | 'medium'
      step?: number
      defaultIcon?: boolean
      icon?: CapUIIcon
      progress?: number
    }>
  >

const CircularStep: React.FC<CircularStepProps> = React.forwardRef<
  HTMLDivElement,
  CircularStepProps
>(
  (
    {
      variantSize = 'small',
      defaultIcon = true,
      icon,
      className,
      progress = 0,
    },
    ref,
  ) => {
    const CIRCLE_DASHARRAY = variantSize == 'small' ? 264 : 283
    const CIRCLE_RADIUS = variantSize == 'small' ? '42' : '45'
    const CIRCLE_STROKE_WIDTH =
      variantSize == 'small' ? pxToRem(16) : pxToRem(10)
    const SIZE = variantSize == 'small' ? 'xxl' : '4xl'

    /* Calculate the percentage */
    const dashOffset = React.useCallback(
      () => CIRCLE_DASHARRAY - (progress * CIRCLE_DASHARRAY) / 100,
      [progress],
    )

    return (
      <Flex
        ref={ref}
        justify="center"
        align="center"
        width={SIZE}
        height={SIZE}
        position="relative"
        sx={styles()}
        className={cn(className)}
      >
        {(!!defaultIcon || !!icon) && (
          <Icon
            className="cap-circular-step-icon"
            name={defaultIcon ? CapUIIcon.ThumbUp : icon!}
            size={variantSize == 'small' ? CapUIIconSize.Md : CapUIIconSize.Lg}
          />
        )}
        <Box
          as="svg"
          position="absolute"
          top={0}
          left={0}
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle
            cx="50"
            cy="50"
            r={CIRCLE_RADIUS}
            id="background-circle"
            strokeWidth={CIRCLE_STROKE_WIDTH}
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={CIRCLE_RADIUS}
            id="progress-circle"
            strokeWidth={CIRCLE_STROKE_WIDTH}
            fill="none"
            strokeDasharray={CIRCLE_DASHARRAY}
            strokeDashoffset={dashOffset()}
            transform="rotate(-90 50 50)"
          />
        </Box>
      </Flex>
    )
  },
)

CircularStep.displayName = 'CircularStep'

export default CircularStep
