import * as React from 'react'

import { jsxInnerText } from '../../utils/jsx'
import { Box } from '../box/Box'
import { CapUIIcon, CapUIIconSize } from '../icon'
import Icon from '../icon/Icon'
import { Tooltip, TooltipProps } from '../tooltip'
import S from './ButtonQuickAction.style'

type VariantColor = 'primary' | 'danger'

export type ButtonQuickActionProps = {
  readonly size?: CapUIIconSize
  readonly variantColor: VariantColor
  readonly icon: CapUIIcon
  readonly label: TooltipProps['label']
}

const PADDING: { [key in CapUIIconSize]: number } = {
  [CapUIIconSize.Xs]: 1,
  [CapUIIconSize.Sm]: 1,
  [CapUIIconSize.Md]: 1,
  [CapUIIconSize.Lg]: 2,
  [CapUIIconSize.Xl]: 2,
  [CapUIIconSize.Xxl]: 3,
}

export const ButtonQuickAction = React.forwardRef<
  HTMLButtonElement,
  ButtonQuickActionProps
>(({ variantColor, icon, label, size = CapUIIconSize.Md, ...rest }, ref) => {
  return (
    <Tooltip label={label}>
      <Box
        as="button"
        bg="transparent"
        ref={ref}
        borderRadius="50px"
        sx={S[variantColor]}
        p={PADDING[size]}
        aria-label={jsxInnerText(label)}
        {...rest}
      >
        <Icon name={icon} size={size} color="gray.500" />
      </Box>
    </Tooltip>
  )
})

ButtonQuickAction.displayName = 'ButtonQuickAction'

export default ButtonQuickAction
