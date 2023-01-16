import * as React from 'react'
import { Flex, FlexProps } from '../../layout'
import ListCardItemLabel from './ListCardItemLabel'
import ListCardItemType from './ListCardItemType'

export interface ListCardItemProps extends FlexProps {
  readonly htmlFor?: string
}

type SubComponents = {
  Label: typeof ListCardItemLabel
  Type: typeof ListCardItemType
}

const ListCardItem: React.FC<ListCardItemProps> & SubComponents = ({
  children,
  ...rest
}) => (
  <Flex
    direction="row"
    align="center"
    justify="space-between"
    px={4}
    py={3}
    bg="gray.100"
    borderBottom="normal"
    borderColor="gray.200"
    _hover={{
      bg: 'white',
    }}
    sx={{
      '&:last-child': {
        border: 'none',
      },
    }}
    {...rest}
  >
    {children}
  </Flex>
)

ListCardItem.Label = ListCardItemLabel
ListCardItem.Type = ListCardItemType

export default ListCardItem
