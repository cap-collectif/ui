import cn from 'classnames'
import * as React from 'react'

import { jsxInnerText } from '../../utils/jsx'
import { Box, PolymorphicComponentProps } from '../box/Box'
import { CapUIIcon, CapUIIconSize } from '../icon'
import Icon from '../icon/Icon'
import { Tooltip, TooltipProps } from '../tooltip'
import S from './ButtonQuickAction.style'
import { CapUIButtonQuickActionSize } from './enums'

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

const BUTTON_QUICK_ACTION_SIZE: Record<
  CapUIButtonQuickActionSize,
  CapUIIconSize
> = {
  [CapUIButtonQuickActionSize.S]: CapUIIconSize.Sm,
  [CapUIButtonQuickActionSize.M]: CapUIIconSize.Md,
  [CapUIButtonQuickActionSize.L]: CapUIIconSize.Lg,
}

const PADDING: Record<CapUIButtonQuickActionSize, number> = {
  [CapUIButtonQuickActionSize.S]: 2,
  [CapUIButtonQuickActionSize.M]: 2,
  [CapUIButtonQuickActionSize.L]: 4,
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
      size = CapUIButtonQuickActionSize.S,
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
          height="fit-content"
          sx={S(variantColor)}
          p={PADDING[size as CapUIButtonQuickActionSize]}
          aria-label={jsxInnerText(label)}
          className={cn('cap-buttonQuickAction', className)}
          {...rest}
        >
          <Icon
            className="cap-buttonQuickAction-icon"
            name={icon}
            size={BUTTON_QUICK_ACTION_SIZE[size]}
          />
        </Box>
      </Tooltip>
    )
  },
)

ButtonQuickAction.displayName = 'ButtonQuickAction'

export default ButtonQuickAction
