import cn from 'classnames'
import { motion } from 'framer-motion'
import * as React from 'react'
import { forwardRef } from 'react'
import { Menu as ReakitMenu, MenuOptions } from 'reakit/Menu'
import styled from 'styled-components'

import { LAYOUT_TRANSITION_SPRING } from '../../../styles/modules/variables'
import { Flex, FlexProps } from '../../layout/Flex'
import { useMenu } from '../Menu.context'

export interface MenuListProps
  extends Omit<FlexProps, keyof Omit<MenuOptions, 'as'>> {}

const MenuItems = styled(motion(Flex)).attrs(props => ({
  direction: 'column',
  minWidth: '200px',
  maxWidth: '300px',
  maxHeight: '200px',
  overflow: 'auto',
  bg: 'white',
  boxShadow: 'medium',
  border: 'normal',
  borderColor: 'gray.200',
  borderRadius: 'normal',
  ...props,
}))``

const MenuList = forwardRef<HTMLElement, MenuListProps>(
  ({ children, className, ...rest }, ref) => {
    const { menu, hideOnClickOutside } = useMenu()

    return (
      <ReakitMenu
        as={MenuItems}
        {...menu}
        hideOnClickOutside={hideOnClickOutside}
        ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={menu.visible ? 'visible' : 'hidden'}
        transition={LAYOUT_TRANSITION_SPRING}
        {...rest}
        className={cn('cap-menu__list', className)}
      >
        {children}
      </ReakitMenu>
    )
  },
)

MenuList.displayName = 'Menu.List'

export default MenuList
