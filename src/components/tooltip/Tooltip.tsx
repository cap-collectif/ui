import {
  TooltipProvider,
  TooltipAnchor,
  TooltipArrow,
  Tooltip as AriakitTooltip,
} from '@ariakit/react'
import cn from 'classnames'
import * as React from 'react'

import { useTheme } from '../../hooks'
import { CapUIFontSize, CapUILineHeight } from '../../styles'
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

  return (
    <TooltipProvider>
      <TooltipAnchor
        ref={children.ref}
        aria-label={
          typeof label === 'string' ? label : props['aria-label'] ?? undefined
        }
        {...children.props}
      >
        {children}
      </TooltipAnchor>
      <AriakitTooltip
        className={cn('cap-tooltip', className)}
        {...props}
        style={{
          zIndex: zIndex || ZINDEX.tooltip,
        }}
      >
        <TooltipArrow style={{ fill: colors.tooltip.background }} />
        <Box
          textAlign="center"
          lineHeight={CapUILineHeight.S}
          fontSize={CapUIFontSize.Caption}
          p="xxs"
          bg="tooltip.background"
          color="tooltip.text"
          borderRadius="xxs"
          maxWidth="270px"
        >
          {label}
        </Box>
      </AriakitTooltip>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'

export default Tooltip
