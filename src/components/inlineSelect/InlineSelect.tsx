import * as React from 'react'

import { Flex, FlexProps } from '../layout/Flex'
import { InlineSelectContext } from './InlineSelect.context'
import { InlineSelectChoice } from './choice/InlineSelectChoice'

type SubComponents = {
  Choice: typeof InlineSelectChoice
}

export interface InlineSelectProps
  extends Omit<FlexProps, 'value' | 'onChange'> {
  readonly value: string
  readonly onChange: (value: string) => void
}

export const InlineSelect: React.FC<InlineSelectProps> & SubComponents = ({
  children,
  value,
  onChange,
  ...props
}) => {
  const contextValue = React.useMemo(() => ({ value, onChange }), [
    value,
    onChange,
  ])

  return (
    <InlineSelectContext.Provider value={contextValue}>
      <Flex
        as="ul"
        direction="row"
        align="flex-start"
        spacing={6}
        sx={{ listStyle: 'none' }}
        {...props}
      >
        {children}
      </Flex>
    </InlineSelectContext.Provider>
  )
}

InlineSelect.Choice = InlineSelectChoice

InlineSelect.displayName = 'InlineSelect'

export default InlineSelect
