import * as Ariakit from '@ariakit/react'
import cn from 'classnames'
import * as React from 'react'
import { MenuOptions } from 'reakit/Menu'

import { pxToRem } from '../../../styles/modules/mixins'
import { Flex, FlexProps } from '../../layout/Flex'
import { useMenu } from '../Menu.context'

export interface MenuListProps
  extends Omit<FlexProps, keyof Omit<MenuOptions, 'as'>> {}

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
          boxShadow="medium"
          border="normal"
          borderColor="gray.200"
          borderRadius="normal"
          sx={{ '&:focus-visible': { outline: 'none' } }}
          {...rest}
        />
      }
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
