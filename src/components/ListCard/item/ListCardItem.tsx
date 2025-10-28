import * as React from 'react'

import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { Flex, FlexProps } from '../../layout'
import ListCardItemLabel from './ListCardItemLabel'
import { styleListCardItem } from './ListCardItemStyle'
import ListCardItemType from './ListCardItemType'

export interface ListCardItemProps extends FlexProps {
  readonly htmlFor?: string
  readonly draggable?: boolean
}

type SubComponents = {
  Label: typeof ListCardItemLabel
  Type: typeof ListCardItemType
}

const ListCardItemInner: React.FC<ListCardItemProps> = ({
  children,
  sx,
  ...rest
}) => (
  <Flex
    position="relative"
    direction="row"
    align="center"
    justify="space-between"
    width="100%"
    sx={{ ...styleListCardItem(), ...sx }}
    {...rest}
  >
    {children}
  </Flex>
)

const ListCardItem: React.FC<ListCardItemProps> & SubComponents = ({
  children,
  draggable = false,
  ...rest
}) => {
  if (draggable) {
    return (
      <Flex
        direction="row"
        position="relative"
        align="center"
        justify="flex-start"
        width="100%"
        overflow="hidden"
        gap="sm"
        {...rest}
      >
        <Icon
          name={CapUIIcon.Drag}
          size={CapUIIconSize.Sm}
          color="listCard.default.icon"
          className="list-card-item-drag-handle"
        />
        <ListCardItemInner>{children}</ListCardItemInner>
      </Flex>
    )
  }
  return <ListCardItemInner {...rest}>{children}</ListCardItemInner>
}

ListCardItem.Label = ListCardItemLabel
ListCardItem.Type = ListCardItemType

export default ListCardItem
