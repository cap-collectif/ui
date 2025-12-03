import * as React from 'react'

import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { Flex, FlexProps } from '../../layout'
import ListCardItemLabel from './ListCardItemLabel'
import { styleListCardItem } from './ListCardItemStyle'
import ListCardItemType from './ListCardItemType'

export type ListCardItemVariant = 'default' | 'hierarchy'

export interface ListCardItemProps extends FlexProps {
  readonly htmlFor?: string
  readonly draggable?: boolean
  readonly variantColor?: ListCardItemVariant
}

type SubComponents = {
  Label: typeof ListCardItemLabel
  Type: typeof ListCardItemType
}

const ListCardItemInner: React.FC<ListCardItemProps> = ({
  children,
  sx,
  variantColor = 'default',
  ...rest
}) => (
  <Flex
    position="relative"
    direction="row"
    align="center"
    justify="space-between"
    width="100%"
    sx={{ ...styleListCardItem(variantColor), ...sx }}
    {...rest}
  >
    {children}
  </Flex>
)

const ListCardItem: React.FC<ListCardItemProps> & SubComponents = ({
  children,
  draggable = false,
  variantColor,
  sx,
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
        <ListCardItemInner sx={sx} variantColor={variantColor}>
          {children}
        </ListCardItemInner>
      </Flex>
    )
  }
  return (
    <ListCardItemInner sx={sx} variantColor={variantColor} {...rest}>
      {children}
    </ListCardItemInner>
  )
}

ListCardItem.Label = ListCardItemLabel
ListCardItem.Type = ListCardItemType

export default ListCardItem
