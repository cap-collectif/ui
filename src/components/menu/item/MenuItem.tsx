import cn from 'classnames'
import * as React from 'react'
import { forwardRef, useCallback } from 'react'
import { MenuItem as ReakitMenuItem } from 'reakit/Menu'

import { jsxInnerText } from '../../../utils/jsx'
import { Box, BoxPropsOf } from '../../box'
import { Text } from '../../typography'
import { MenuValue, useMenu } from '../Menu.context'

export interface MenuItemProps extends Omit<BoxPropsOf<'button'>, 'value'> {
  readonly children: React.ReactNode
  readonly closeOnSelect?: boolean
  readonly value?: MenuValue
}

const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ children, onClick, closeOnSelect, value, ...props }, ref) => {
    const { menu, closeOnSelect: menuCloseOnSelect, onChange } = useMenu()
    const textRef = React.useRef<HTMLElement>(null)

    const hasTruncateItem = React.useMemo(() => {
      if (textRef && textRef.current && menu.unstable_popoverRef.current) {
        return (
          textRef.current.scrollWidth >
          menu.unstable_popoverRef.current.offsetWidth
        )
      }

      return false
    }, [textRef.current, menu.unstable_popoverRef.current])

    const onClickHandler = useCallback(
      e => {
        if (onClick) onClick(e)
        if (onChange && value) onChange(value)

        const shouldHide = (() => {
          if (closeOnSelect !== undefined && closeOnSelect) {
            return true
          }
          if (closeOnSelect !== undefined && !closeOnSelect) {
            return false
          }

          return menuCloseOnSelect && !closeOnSelect
        })()

        if (shouldHide) menu.hide()
      },
      [closeOnSelect, menuCloseOnSelect, onClick, menu, onChange, value],
    )

    return (
      <Box
        as={ReakitMenuItem}
        type="button"
        ref={ref}
        onClick={onClickHandler}
        px={3}
        py={2}
        color="gray.900"
        _hover={{ bg: 'gray.100' }}
        _focus={{ bg: 'gray.100' }}
        _disabled={{ bg: 'white', color: 'gray.400' }}
        textAlign="left"
        display="flex"
        width="100%"
        alignItems="center"
        borderBottom="normal"
        borderColor="gray.200"
        {...menu}
        {...props}
        className={cn('cap-menu__item', props.className)}
        sx={{
          ...props.sx,
          '&:last-child': {
            borderBottom: 'none',
          },
        }}
      >
        {typeof children === 'string' ? (
          <Text
            fontSize={3}
            lineHeight="base"
            ref={textRef}
            title={hasTruncateItem ? jsxInnerText(children) : undefined}
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
      </Box>
    )
  },
)

MenuItem.displayName = 'Menu.Item'

export default MenuItem
