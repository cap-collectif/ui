import cn from 'classnames'
import {
  motion,
  AnimatePresence,
  AnimationProps,
  MotionProps,
} from 'framer-motion'
import * as React from 'react'
import {
  Tooltip as ReakitTooltip,
  TooltipReference,
  TooltipArrow,
  useTooltipState,
} from 'reakit/Tooltip'
import styled from 'styled-components'

import { CapUIFontSize, CapUILineHeight } from '../../styles'
import colors from '../../styles/modules/colors'
import { LAYOUT_TRANSITION_SPRING } from '../../styles/modules/variables'
import { ZINDEX } from '../../styles/theme'
import { Box, BoxProps } from '../box'
import Text from '../typography/Text'

export interface TooltipProps extends BoxProps {
  children: React.FunctionComponentElement<any>
  visible?: boolean
  label: React.ReactNode
  baseId?: string
  zIndex?: number
}

type ContainerAnimateType = React.FC<
  AnimationProps & Pick<MotionProps, 'initial'> & BoxProps
>

const ContainerAnimate = motion(Box) as ContainerAnimateType

const Arrow = styled(TooltipArrow)`
  svg {
    transform: rotateZ(180deg) scale(1.1) !important;
  }
  .stroke {
    fill: transparent;
  }

  .fill {
    fill: ${colors.gray['900']};
  }
`

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  label,
  visible,
  className,
  baseId,
  zIndex,
  ...props
}) => {
  const tooltip = useTooltipState({
    visible,
    animated: 300,
    gutter: 8,
    baseId,
    unstable_timeout: 400,
  })

  return (
    <>
      <TooltipReference {...tooltip} ref={children.ref} {...children.props}>
        {({ tabIndex, ...referenceProps }) =>
          React.cloneElement(children, {
            ...referenceProps,
            tabIndex:
              referenceProps.type === 'button' || children.props.as
                ? undefined
                : tabIndex,
          })
        }
      </TooltipReference>

      <ReakitTooltip
        {...tooltip}
        className="cap-tooltip-container"
        unstable_popoverStyles={{
          ...tooltip.unstable_popoverStyles,
          zIndex: zIndex || ZINDEX.tooltip,
        }}
      >
        <AnimatePresence>
          {tooltip.visible && (
            <ContainerAnimate
              p={1}
              bg="gray.900"
              color="white"
              borderRadius="tooltip"
              maxWidth="270px"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={LAYOUT_TRANSITION_SPRING}
              className={cn('cap-tooltip', className)}
              {...props}
            >
              <Arrow {...tooltip} />
              {typeof label === 'string' && (
                <Text
                  textAlign="center"
                  lineHeight={CapUILineHeight.S}
                  fontSize={CapUIFontSize.Caption}
                >
                  {label}
                </Text>
              )}
              {typeof label !== 'string' && label}
            </ContainerAnimate>
          )}
        </AnimatePresence>
      </ReakitTooltip>
    </>
  )
}

Tooltip.displayName = 'Tooltip'

export default Tooltip
