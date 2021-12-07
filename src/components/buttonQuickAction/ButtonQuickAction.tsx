import cn from 'classnames'
import * as React from 'react'

import colors, { BaseColorsName } from '../../styles/modules/colors'
import { jsxInnerText } from '../../utils/jsx'
import { Box, BoxProps } from '../box/Box'
import { CapUIIcon, CapUIIconSize } from '../icon'
import Icon from '../icon/Icon'
import { Tooltip, TooltipProps } from '../tooltip'
import S from './ButtonQuickAction.style'

export type ButtonQuickActionProps = BoxProps & {
  readonly size?: CapUIIconSize
  readonly variantColor: BaseColorsName
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
>(
  (
    { variantColor, icon, label, size = CapUIIconSize.Md, className, ...rest },
    ref,
  ) => {
    return (
      <Tooltip label={label}>
        <Box
          as="button"
          bg="transparent"
          ref={ref}
          borderRadius="50px"
          sx={S(variantColor)}
          _focus={{
            boxShadow: `0 0 2px 2px ${colors.gray['300']}`,
          }}
          p={PADDING[size as CapUIIconSize]}
          aria-label={jsxInnerText(label)}
          className={cn('cap-buttonQuickAction', className)}
          {...rest}
        >
          <Icon name={icon} size={size} color="gray.500" />
        </Box>
      </Tooltip>
    )
  },
)

ButtonQuickAction.displayName = 'ButtonQuickAction'

export default ButtonQuickAction
