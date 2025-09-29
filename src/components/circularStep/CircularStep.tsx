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
      icon?: CapUIIcon | null
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
      icon = CapUIIcon.ThumbUp,
      className,
      progress = 0,
    },
    ref,
  ) => {
    const config = {
      CIRCLE_DASHARRAY: {
        small: 264,
        medium: 283,
      },
      CIRCLE_RADIUS: {
        small: '42',
        medium: '45',
      },
      CIRCLE_STROKE_WIDTH: {
        small: pxToRem(16),
        medium: pxToRem(10),
      },
      SIZE: {
        small: 'xxl',
        medium: '4xl',
      },
      ICON_SIZE: {
        small: CapUIIconSize.Md,
        medium: CapUIIconSize.Lg,
      },
    }

    /* Calculate the percentage */
    const dashOffset = React.useCallback(
      () =>
        config.CIRCLE_DASHARRAY[variantSize] -
        (progress * config.CIRCLE_DASHARRAY[variantSize]) / 100,
      [progress],
    )

    return (
      <Flex
        ref={ref}
        justify="center"
        align="center"
        width={config.SIZE[variantSize]}
        height={config.SIZE[variantSize]}
        position="relative"
        sx={styles()}
        className={cn(className)}
      >
        {!!icon && (
          <Icon
            className="cap-circular-step-icon"
            name={icon}
            size={config.ICON_SIZE[variantSize]}
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
            r={config.CIRCLE_RADIUS[variantSize]}
            id="background-circle"
            strokeWidth={config.CIRCLE_STROKE_WIDTH[variantSize]}
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={config.CIRCLE_RADIUS[variantSize]}
            id="progress-circle"
            strokeWidth={config.CIRCLE_STROKE_WIDTH[variantSize]}
            fill="none"
            strokeDasharray={config.CIRCLE_DASHARRAY[variantSize]}
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
