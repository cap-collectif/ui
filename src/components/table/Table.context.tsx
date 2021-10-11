import * as React from 'react'

import { State, Action, createReducer } from './Table.reducer'

type TableProviderProps = {
  readonly selectable?: boolean
  readonly isLoading?: boolean
  readonly children: React.ReactNode
}

export type Context = Readonly<{
  selectable: boolean
  isLoading: boolean
  rows: State['rows']
  rowsCount: number
  hasAnyRowsChecked: boolean
  hasAllRowsChecked: boolean
  hasIndeterminateState: boolean
  selectedRows: string[]
  isRowChecked: (rowId: string) => boolean
  dispatch: (action: Action) => void
}>

const DEFAULT_STATE: State = {
  rows: {},
}

const TableContext = React.createContext<Context>({
  selectable: false,
  isLoading: false,
  rows: {},
  rowsCount: 0,
  hasAnyRowsChecked: false,
  hasAllRowsChecked: false,
  hasIndeterminateState: false,
  selectedRows: [],
  isRowChecked: () => false,
  dispatch: () => {},
})

const useTable = (): Context => {
  const context = React.useContext(TableContext)
  if (!context) {
    throw new Error(
      `You can't use the TableContext outside a Table.Provider component.`,
    )
  }
  return context
}

const TableProvider = ({
  selectable = false,
  isLoading = false,
  children,
}: TableProviderProps) => {
  const [state, dispatch] = React.useReducer(createReducer, DEFAULT_STATE)

  const context: Context = React.useMemo(() => {
    const rowsEntries = Object.keys(state.rows)

    return {
      hasAnyRowsChecked: rowsEntries.some(rowId => state.rows[rowId] === true),
      hasAllRowsChecked:
        rowsEntries.length > 0 && rowsEntries.every(rowId => state.rows[rowId]),
      hasIndeterminateState:
        context &&
        context.hasAnyRowsChecked &&
        context.selectedRows.length < rowsEntries.length,
      selectedRows: rowsEntries.filter(rowId => state.rows[rowId] === true),
      rowsCount: rowsEntries.length,
      isRowChecked: (rowId: string) => {
        return rowId in state.rows && state.rows[rowId] === true
      },
      rows: state.rows,
      dispatch,
      selectable,
      isLoading,
    }
  }, [state.rows, selectable, isLoading])

  console.log('state', state)

  return (
    <TableContext.Provider value={context}>{children}</TableContext.Provider>
  )
}

export { TableProvider, TableContext, useTable }
