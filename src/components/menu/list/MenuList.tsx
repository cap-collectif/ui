import * as Ariakit from '@ariakit/react'
import cn from 'classnames'
import * as React from 'react'

import { pxToRem } from '../../../styles/modules/mixins'
import { Flex, FlexProps } from '../../layout/Flex'
import { useMenu } from '../Menu.context'

export type MenuListProps = FlexProps & Ariakit.MenuListProps

const MenuList: React.FC<MenuListProps> = ({
  children,
  className,
  ...rest
}) => {
  const { hideOnClickOutside } = useMenu()

  return (
    <Ariakit.Menu
      render={
        <Flex
          zIndex="dropdown"
          direction="column"
          bg="white"
          minWidth={pxToRem(200)}
          maxWidth={pxToRem(300)}
          maxHeight={pxToRem(200)}
          overflow="auto"
          boxShadow="small"
          border="normal"
          borderColor="dropdown.border"
          borderRadius="normal"
          sx={{ '&:focus-visible': { outline: 'none' } }}
          {...rest}
        />
      }
      portal
      gutter={8}
      hideOnInteractOutside={hideOnClickOutside}
      className={cn('cap-menu__list', className)}
    >
      {children}
    </Ariakit.Menu>
  )
}

MenuList.displayName = 'Menu.List'

export default MenuList
