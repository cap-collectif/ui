import * as React from 'react'
import { Flex, FlexProps } from '../layout'
import ListCardItem from './item/ListCardItem'
import ListCardSubItem from './subItem/ListCardSubItem'

export interface ListCardProps extends FlexProps {}

type SubComponents = {
  Item: typeof ListCardItem
  SubItem: typeof ListCardSubItem
}

export const ListCard: React.FC<ListCardProps> & SubComponents = ({
  children,
  ...rest
}) => (
  <Flex
    direction="column"
    borderRadius="8px"
    overflow="hidden"
    border="normal"
    borderColor="gray.200"
    {...rest}
  >
    {children}
  </Flex>
)

ListCard.Item = ListCardItem
ListCard.SubItem = ListCardSubItem

export default ListCard
