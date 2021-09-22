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

import colors from '../../styles/modules/colors'
import { LAYOUT_TRANSITION_SPRING } from '../../styles/modules/variables'
import { Box, BoxProps } from '../box'
import Text from '../typography/Text'

export interface TooltipProps {
  children: React.FunctionComponentElement<any>
  label: React.ReactNode
}

type ContainerAnimate = React.FC<
  AnimationProps & Pick<MotionProps, 'initial'> & BoxProps
>

const ContainerAnimate = motion(Box) as ContainerAnimate

const Arrow = styled(TooltipArrow)`
  svg {
    fill: ${colors.gray['900']};
  }
`

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  label,
  ...props
}) => {
  const tooltip = useTooltipState({ animated: 300, gutter: 4 })

  const showDelayed = () => {
    setTimeout(() => {
      tooltip.show()
    }, 400)
  }

  return (
    <>
      <TooltipReference
        {...tooltip}
        show={showDelayed}
        ref={children.ref}
        {...children.props}
      >
        {referenceProps => React.cloneElement(children, referenceProps)}
      </TooltipReference>

      <ReakitTooltip {...tooltip} className="cap-tooltip">
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
              className="cap-tooltip"
              {...props}
            >
              <Arrow {...tooltip} />
              {typeof label === 'string' && (
                <Text textAlign="center" lineHeight="sm" fontSize={1}>
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
