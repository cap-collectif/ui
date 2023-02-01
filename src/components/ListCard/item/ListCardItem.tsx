import * as React from 'react'
import { Flex, FlexProps } from '../../layout'
import ListCardItemLabel from './ListCardItemLabel'
import ListCardItemType from './ListCardItemType'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'

export interface ListCardItemProps extends FlexProps {
  readonly htmlFor?: string
  readonly draggable?: boolean
}

type SubComponents = {
  Label: typeof ListCardItemLabel
  Type: typeof ListCardItemType
}

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
      >
        <Icon name={CapUIIcon.Drag} size={CapUIIconSize.Sm} color="gray.300" />
        <Flex
          position="relative"
          direction="row"
          align="center"
          justify="space-between"
          px={4}
          py={3}
          bg="gray.100"
          borderBottom="normal"
          borderColor="gray.200"
          width="100%"
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
      </Flex>
    )
  }
  return (
    <Flex
      position="relative"
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
}

ListCardItem.Label = ListCardItemLabel
ListCardItem.Type = ListCardItemType

export default ListCardItem
