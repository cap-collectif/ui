import {
  TooltipProvider,
  TooltipAnchor,
  TooltipArrow,
  Tooltip as AriakitTooltip,
} from '@ariakit/react'
import cn from 'classnames'
import * as React from 'react'
import { useId } from 'react'

import { useTheme } from '../../hooks'
import { CapUIFontSize, CapUILineHeight } from '../../styles'
import { pxToRem } from '../../styles/modules/mixins'
import { ZINDEX } from '../../styles/theme'
import { Box, BoxProps } from '../box'

export interface TooltipProps extends BoxProps {
  children: React.FunctionComponentElement<any>
  visible?: boolean
  label: React.ReactNode
  baseId?: string
  zIndex?: number
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  label,
  visible,
  className,
  baseId,
  zIndex,
  ...props
}) => {
  const { colors } = useTheme()
  const id = useId()

  return (
    <TooltipProvider>
      <TooltipAnchor aria-describedby={id} render={children} />
      <AriakitTooltip
        className={cn('cap-tooltip', className)}
        {...props}
        style={{
          zIndex: zIndex || ZINDEX.tooltip,
        }}
        id={id}
      >
        <TooltipArrow style={{ fill: colors?.tooltip?.background }} />
        <Box
          textAlign="center"
          lineHeight={CapUILineHeight.S}
          fontSize={CapUIFontSize.Caption}
          p="xxs"
          bg="tooltip.background"
          color="tooltip.text"
          borderRadius="xxs"
          maxWidth={pxToRem(270)}
        >
          {label}
        </Box>
      </AriakitTooltip>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'

export default Tooltip
