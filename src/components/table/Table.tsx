import * as React from 'react'

import { Box, BoxPropsOf } from '../box'
import { Flex } from '../layout/Flex'
import { TableProvider, TableContext } from './Table.context'
import ActionBar from './actionBar/ActionBar'
import Menu from './menu/Menu'
import Tbody from './tbody/Tbody'
import Td from './td/Td'
import Th from './th/Th'
import Thead from './thead/Thead'
import Tr from './tr/Tr'

type RenderChildren = ({
  selectedRows,
}: {
  selectedRows: string[]
}) => React.ReactNode

export interface TableProps extends BoxPropsOf<'table'> {
  readonly emptyMessage: React.ReactNode
  readonly actionBar?: React.ReactNode | RenderChildren
  readonly selectable?: boolean
  readonly isLoading?: boolean
}

export const Table = ({
  children,
  actionBar,
  selectable,
  isLoading,
  emptyMessage,
  ...rest
}: TableProps) => (
  <TableProvider selectable={selectable} isLoading={isLoading}>
    <TableContext.Consumer>
      {context =>
        selectable ? (
          <Flex
            direction="column"
            width="100%"
            borderRadius="normal"
            overflow="hidden"
            fontFamily="openSans"
          >
            <ActionBar>{actionBar}</ActionBar>

            <Box width="100%">
              <Box as="table" width="100%" {...rest}>
                {children}
              </Box>

              {context.rowsCount === 0 && emptyMessage}
            </Box>
          </Flex>
        ) : (
          <Box width="100%" fontFamily="openSans">
            <Box
              as="table"
              borderTopLeftRadius="normal"
              borderTopRightRadius="normal"
              overflow="hidden"
              width="100%"
              {...rest}
            >
              {children}
            </Box>

            {context.rowsCount === 0 && emptyMessage}
          </Box>
        )
      }
    </TableContext.Consumer>
  </TableProvider>
)

Table.Thead = Thead
Table.Tbody = Tbody
Table.Tr = Tr
Table.Th = Th
Table.Menu = Menu
Table.Td = Td

Table.displayName = 'Table'

export default Table
