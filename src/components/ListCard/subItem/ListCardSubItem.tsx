import * as React from 'react'

import { Flex, FlexProps } from '../../layout'
import { ListCardItemVariant } from '../item/ListCardItem'
import { styleListCardItem } from '../item/ListCardItemStyle'

export interface ListCardSubItemProps extends FlexProps {
  readonly variantColor?: ListCardItemVariant
}

const ListCardSubItem: React.FC<ListCardSubItemProps> = ({
  children,
  sx,
  variantColor = 'default',
  ...rest
}) => (
  <Flex
    direction="row"
    align="center"
    backgroundColor="listCard.default.background.hover"
    sx={{ ...styleListCardItem(variantColor), ...sx }}
    {...rest}
  >
    {children}
  </Flex>
)

export default ListCardSubItem
