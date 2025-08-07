import * as Ariakit from '@ariakit/react'
import cn from 'classnames'
import * as React from 'react'

import { useTheme } from '../../../hooks'
import { CapUIFontSize, CapUILineHeight } from '../../../styles'
import { Box } from '../../box'
import { PolymorphicBoxProps } from '../../box/Box'
import { Text } from '../../typography'
import { MenuValue, useMenu } from '../Menu.context'

export interface MenuItemProps
  extends Omit<PolymorphicBoxProps<'button'>, 'value'> {
  children: React.ReactNode
  closeOnSelect?: boolean
  value?: MenuValue
  _internal_isSelectable?: boolean
}

const MenuItem: React.FC<MenuItemProps> = React.forwardRef<
  HTMLButtonElement,
  MenuItemProps
>(
  (
    {
      children,
      onClick,
      closeOnSelect,
      value,
      sx,
      _internal_isSelectable,
      ...props
    },
    ref,
  ) => {
    const { colors } = useTheme()
    const { closeOnSelect: menuCloseOnSelect, onChange } = useMenu()
    const menu = Ariakit.useMenuContext()
    const textRef = React.useRef<HTMLElement>(null)

    const onClickHandler = React.useCallback(
      e => {
        if (onClick) onClick(e)
        if (onChange && value) onChange(value)

        const shouldHide = (() => {
          if (closeOnSelect) return true
          if (closeOnSelect !== undefined && !closeOnSelect) return false
          return menuCloseOnSelect && !closeOnSelect
        })()

        if (shouldHide) menu?.hide()
      },
      [closeOnSelect, menuCloseOnSelect, onClick, menu, onChange, value],
    )

    return (
      <Ariakit.MenuItem
        render={
          <Box
            px="sm"
            py="xs"
            color="text.primary"
            bg="dropdown.listItem.background.default"
            _hover={{
              bg: 'dropdown.listItem.background.hover',
              cursor: 'pointer',
            }}
            _focus={{ bg: 'dropdown.listItem.background.hover' }}
            _disabled={{
              color: 'text.disable',
            }}
            textAlign="left"
            display="flex"
            width="100%"
            alignItems="center"
            borderBottom="normal"
            borderColor="dropdown.listItem.border.hover"
            className={cn('cap-menu__item', props.className)}
            sx={{
              '&:focus-visible': {
                outline: 'none',
                border: `2px ${colors?.primary?.dark || '#000'} solid`,
              },
              '&:last-child:not(:focus-visible)': {
                borderBottom: 'none',
              },
              ...sx,
            }}
          />
        }
        as={_internal_isSelectable ? 'div' : 'button'}
        type={_internal_isSelectable ? null : 'button'}
        ref={ref}
        onClick={onClickHandler}
        {...props}
      >
        {typeof children === 'string' ? (
          <Text
            fontSize={CapUIFontSize.BodyRegular}
            lineHeight={CapUILineHeight.M}
            ref={textRef}
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'pre',
            }}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </Ariakit.MenuItem>
    )
  },
)

MenuItem.displayName = 'Menu.Item'

export default MenuItem
