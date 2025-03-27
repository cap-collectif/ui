import cn from 'classnames'
import * as React from 'react'

import { jsxInnerText } from '../../utils/jsx'
import { Box, PolymorphicComponentProps } from '../box/Box'
import { CapUIIcon, CapUIIconSize } from '../icon'
import Icon from '../icon/Icon'
import { Tooltip, TooltipProps } from '../tooltip'
import S from './ButtonQuickAction.style'

export type ButtonQuickActionVariantColor = 'primary' | 'danger' | 'hierarchy'

export type ButtonQuickActionProps<
  T extends React.ElementType = React.ElementType
> = PolymorphicComponentProps<
  T,
  Readonly<{
    readonly size?: CapUIIconSize
    readonly variantColor: ButtonQuickActionVariantColor
    readonly icon: CapUIIcon
    readonly label: TooltipProps['label']
    readonly tooltipZIndex?: number
  }>
>

const PADDING: { [key in CapUIIconSize]: number } = {
  [CapUIIconSize.Xs]: 1,
  [CapUIIconSize.Sm]: 1,
  [CapUIIconSize.Md]: 1,
  [CapUIIconSize.Lg]: 2,
  [CapUIIconSize.Xl]: 2,
  [CapUIIconSize.Xxl]: 3,
}

export const ButtonQuickAction: React.FC<ButtonQuickActionProps> = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonQuickActionProps
>(
  (
    {
      variantColor,
      icon,
      label,
      size = CapUIIconSize.Md,
      className,
      as = 'button',
      tooltipZIndex,
      ...rest
    },
    ref,
  ) => {
    return (
      <Tooltip label={label} zIndex={tooltipZIndex}>
        <Box
          as={as}
          ref={ref}
          display="inline-block"
          sx={S(variantColor)}
          p={PADDING[size as CapUIIconSize]}
          aria-label={jsxInnerText(label)}
          className={cn('cap-buttonQuickAction', className)}
          {...rest}
        >
          <Icon
            className="cap-buttonQuickAction-icon"
            name={icon}
            size={size}
          />
        </Box>
      </Tooltip>
    )
  },
)

ButtonQuickAction.displayName = 'ButtonQuickAction'

export default ButtonQuickAction
