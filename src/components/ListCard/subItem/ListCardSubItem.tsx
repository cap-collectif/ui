import * as React from 'react'
import { Flex, FlexProps } from '../../layout'

export interface ListCardSubItemProps extends FlexProps {}

const ListCardSubItem: React.FC<ListCardSubItemProps> = ({
  children,
  ...rest
}) => (
  <Flex
    direction="row"
    align="center"
    px={4}
    py={3}
    bg="white"
    borderBottom="normal"
    borderColor="gray.200"
    {...rest}
  >
    {children}
  </Flex>
)

export default ListCardSubItem
