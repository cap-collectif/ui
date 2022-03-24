import cn from 'classnames'
import * as React from 'react'

import { Box, PolymorphicBoxProps } from '../../box/Box'
import { useTable } from '../Table.context'
import { styles, VerticalAlign } from './Tr.style'
import TrCheckbox from './TrCheckbox'

export interface TrProps
  extends Omit<PolymorphicBoxProps<'tr'>, 'vertical-align'> {
  children: React.ReactNode
  rowId?: string
  selectable?: boolean
  inHead?: boolean
  checkboxLabel?: string
  verticalAlign?: VerticalAlign
}

export const Tr: React.FC<TrProps> = React.forwardRef<
  HTMLTableRowElement,
  TrProps
>(
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
        borderBottom={inHead ? 'none' : 'normal'}
        borderColor="gray.150"
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
