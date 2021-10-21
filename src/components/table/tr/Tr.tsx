import cn from 'classnames'
import * as React from 'react'

import { Box, BoxPropsOf } from '../../box'
import { useTable } from '../Table.context'
import { styles, VerticalAlign } from './Tr.style'
import TrCheckbox from './TrCheckbox'

export interface TrProps extends Omit<BoxPropsOf<'tr'>, 'vertical-align'> {
  children: React.ReactNode
  rowId?: string
  selectable?: boolean
  inHead?: boolean
  checkboxLabel?: string
  verticalAlign?: VerticalAlign
}

export const Tr = React.forwardRef<HTMLTableRowElement, TrProps>(
  (
    {
      selectable,
      rowId,
      children,
      inHead = false,
      checkboxLabel,
      verticalAlign = 'top',
      className,
      ...rest
    },
    ref,
  ) => {
    const { selectable: tableSelectable, isLoading } = useTable()
    const rowSelectable: boolean =
      typeof selectable === 'boolean' ? selectable : tableSelectable

    return (
      <Box
        as="tr"
        id={rowId}
        sx={styles(isLoading, verticalAlign)}
        className={cn('cap-table__tr', className)}
        ref={ref}
        {...rest}
      >
        {rowSelectable && (
          <TrCheckbox
            inHead={inHead}
            rowId={rowId}
            checkboxLabel={checkboxLabel}
          />
        )}

        {children}
      </Box>
    )
  },
)

Tr.displayName = 'Table.Tr'

export default Tr
