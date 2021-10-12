import cn from 'classnames'
import * as React from 'react'

import { CapUIFontWeight } from '../../../styles'
import { Box, BoxProps } from '../../box'
import { Text } from '../../typography'
import { Context, MenuOptionGroupContext } from './MenuOptionGroup.context'

export type MenuOptionGroupProps = Omit<BoxProps, 'onChange'> & {
  readonly title: React.ReactNode
} & (
    | {
        readonly type: 'checkbox'
        readonly onChange: (newValue: string[]) => void
        readonly value: string[]
      }
    | {
        readonly type: 'radio'
        readonly onChange: (newValue: string) => void
        readonly value: string
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
        {title && (
          <Text
            className="cap-menu__optionGroup--title"
            color="gray.900"
            lineHeight="sm"
            fontSize={1}
            fontWeight={CapUIFontWeight.Semibold}
            px={3}
            py={2}
            bg="gray.100"
            borderTop="normal"
            borderBottom="normal"
            borderColor="gray.300"
          >
            {title}
          </Text>
        )}
        {children}
      </Box>
    </MenuOptionGroupContext.Provider>
  )
}

MenuOptionGroup.displayName = 'Menu.OptionGroup'

export default MenuOptionGroup
