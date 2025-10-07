import * as React from 'react'

import { Flex, FlexProps } from '../layout'
import { styleListCard, styleListCardGrouped } from './ListCardStyle'
import ListCardItem from './item/ListCardItem'
import ListCardSubItem from './subItem/ListCardSubItem'

export interface ListCardProps extends FlexProps {
  grouped?: boolean
}

type SubComponents = {
  Item: typeof ListCardItem
  SubItem: typeof ListCardSubItem
}

export const ListCard: React.FC<ListCardProps> & SubComponents = ({
  children,
  grouped = false,
  ...rest
}) => (
  <Flex
    direction="column"
    sx={grouped ? styleListCardGrouped() : styleListCard()}
    {...rest}
  >
    {children}
  </Flex>
)

ListCard.Item = ListCardItem
ListCard.SubItem = ListCardSubItem

export default ListCard
