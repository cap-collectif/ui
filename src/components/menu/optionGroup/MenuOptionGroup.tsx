import cn from 'classnames'
import * as React from 'react'

import {
  CapUIFontSize,
  CapUIFontWeight,
  CapUILineHeight,
} from '../../../styles'
import { Box, BoxProps } from '../../box'
import { Text } from '../../typography'
import { Context, MenuOptionGroupContext } from './MenuOptionGroup.context'

export type MenuOptionGroupProps = Omit<BoxProps, 'onChange'> & {
  title: React.ReactNode
} & (
    | {
        type: 'checkbox'
        onChange: (newValue: string[]) => void
        value: string[]
      }
    | {
        type: 'radio'
        onChange: (newValue: string) => void
        value: string
      }
  )

export const MenuOptionGroup: React.FC<MenuOptionGroupProps> = ({
  children,
  title,
  value,
  onChange,
  type,
  ...props
}) => {
  const context = React.useMemo(
    () =>
      ({
        onChange,
        value,
        type,
      } as Context),
    [onChange, value, type],
  )

  return (
    <MenuOptionGroupContext.Provider value={context}>
      <Box
        role="group"
        {...props}
        className={cn('cap-menu__optionGroup', props.className)}
        sx={{
          '&:first-child .cap-menu__optionGroup--title': {
            borderTop: 'none',
          },
          ...props.sx,
        }}
      >
        {title ? (
          <Text
            as="span"
            display="block"
            uppercase
            className="cap-menu__optionGroup--title"
            color="text.primary"
            lineHeight={CapUILineHeight.S}
            fontSize={CapUIFontSize.Caption}
            fontWeight={CapUIFontWeight.Semibold}
            px="sm"
            py="xs"
            bg="dropdown.listItem.background.hover"
            borderTop="normal"
            borderBottom="normal"
            borderColor="dropdown.listItem.border.hover"
          >
            {title}
          </Text>
        ) : null}
        {children}
      </Box>
    </MenuOptionGroupContext.Provider>
  )
}

MenuOptionGroup.displayName = 'Menu.OptionGroup'

export default MenuOptionGroup
