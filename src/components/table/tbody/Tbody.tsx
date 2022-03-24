import cn from 'classnames'
import * as React from 'react'
import InfiniteScroll from 'react-infinite-scroller'

import { cleanChildren } from '../../../utils/jsx'
import { Box, BoxProps } from '../../box'
import { CapUIIconSize } from '../../icon'
import { Spinner } from '../../spinner'
import { useTable } from '../Table.context'
import { TrProps } from '../tr/Tr'

export interface TbodyProps extends BoxProps {
  readonly children: React.ReactNode
  readonly onScrollToBottom?: () => void
  readonly useInfiniteScroll?: boolean
  readonly hasMore?: boolean
  readonly loader?: React.ReactElement
  readonly scrollParentRef?: { current: null | HTMLElement }
}

const TableLoader = (): React.ReactElement => (
  <Box as="tr">
    <Box as="td" colSpan={100} textAlign="center" py={3}>
      <Spinner size={CapUIIconSize.Md} margin="auto" />
    </Box>
  </Box>
)

const TableBody: React.FC<TbodyProps> = React.forwardRef<
  HTMLTableSectionElement,
  TbodyProps
>(({ children, className, ...rest }, ref) => (
  <Box
    key="table-tbody"
    as="tbody"
    bg="white"
    color="gray.900"
    className={cn('cap-table__tbody', className)}
    ref={ref}
    {...rest}
  >
    {children}
  </Box>
))

const Tbody: React.FC<TbodyProps> = ({
  children,
  useInfiniteScroll = false,
  onScrollToBottom = () => {},
  hasMore = false,
  loader = <TableLoader key="table-loader" />,
  scrollParentRef,
  ...rest
}) => {
  const { rows, selectedRows, dispatch } = useTable()

  React.useEffect(() => {
    if (children) {
      const cleanRows = cleanChildren<TrProps>(children)
      const rowIds = cleanRows
        .filter(c => c.props && c.props.rowId)
        .map(c => (c.props ? String(c.props.rowId) : ''))
      const hasRowsEquals =
        JSON.stringify(rowIds) == JSON.stringify(Object.keys(rows))

      if (!hasRowsEquals) {
        dispatch({ type: 'INITIALIZE_ROWS', payload: { rowIds, selectedRows } })
      }
    }
  }, [children, selectedRows, rows, dispatch])
  return useInfiniteScroll ? (
    <InfiniteScroll
      initialLoad={false}
      loadMore={onScrollToBottom}
      hasMore={hasMore}
      loader={loader}
      element={TableBody as any}
      getScrollParent={
        scrollParentRef?.current ? () => scrollParentRef?.current : undefined
      }
      useWindow={!Boolean(scrollParentRef?.current)}
    >
      {children}
    </InfiniteScroll>
  ) : (
    <TableBody {...rest}>{children}</TableBody>
  )
}

Tbody.displayName = 'Table.Tbody'

export default Tbody
