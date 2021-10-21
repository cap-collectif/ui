import * as React from 'react'

import { Box } from '../../box'
import { VisuallyHidden } from '../../visuallyHidden'
import { useTable } from '../Table.context'
import { Td } from '../td/Td'
import { Th } from '../th/Th'

export interface TrCheckboxProps {
  readonly rowId?: string
  readonly checkboxLabel?: string
  readonly inHead: boolean
}

const TrCheckbox: React.FC<TrCheckboxProps> = ({
  rowId,
  inHead,
  checkboxLabel,
}) => {
  const {
    dispatch,
    isRowChecked,
    hasIndeterminateState,
    hasAllRowsChecked,
  } = useTable()
  const checkbox = React.useRef<HTMLInputElement | null>(null)

  React.useEffect(() => {
    if (checkbox.current) {
      checkbox.current.indeterminate = hasIndeterminateState
      checkbox.current.checked = hasAllRowsChecked
    }
  }, [hasIndeterminateState, hasAllRowsChecked])

  return inHead ? (
    <Th width="45px" noPlaceholder>
      <VisuallyHidden>
        <label htmlFor="allRows" aria-label="Select all lines" />
      </VisuallyHidden>

      <input
        type="checkbox"
        id="allRows"
        className="all-rows-checkbox"
        ref={checkbox}
        onChange={e => {
          if (e.target.checked) {
            dispatch({ type: 'SELECT_ALL_ROWS' })
          } else {
            dispatch({ type: 'DESELECT_ALL_ROWS' })
          }
        }}
      />
    </Th>
  ) : (
    <Td noPlaceholder>
      {checkboxLabel && (
        <VisuallyHidden>
          <label
            htmlFor={`checkbox-${String(rowId)}`}
            aria-label={`Select ${checkboxLabel}`}
          />
        </VisuallyHidden>
      )}

      <Box
        as="input"
        type="checkbox"
        checked={isRowChecked(String(rowId))}
        id={`checkbox-${String(rowId)}`}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.checked) {
            dispatch({ type: 'SELECT_ROW', payload: String(rowId) })
          } else {
            dispatch({ type: 'DESELECT_ROW', payload: String(rowId) })
          }
        }}
      />
    </Td>
  )
}

export default TrCheckbox
