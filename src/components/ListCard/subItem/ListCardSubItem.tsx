import * as React from 'react'

import { Flex, FlexProps } from '../../layout'
import { styleListCardItem } from '../item/ListCardItemStyle'

export interface ListCardSubItemProps extends FlexProps {}

const ListCardSubItem: React.FC<ListCardSubItemProps> = ({
  children,
  sx,
  ...rest
}) => (
  <Flex
    direction="row"
    align="center"
    backgroundColor="listCard.default.background.hover"
    sx={{ ...styleListCardItem(), ...sx }}
    {...rest}
  >
    {children}
  </Flex>
)

export default ListCardSubItem
