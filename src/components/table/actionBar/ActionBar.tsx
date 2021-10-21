import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import * as React from 'react'

import { Box } from '../../box'
import { FlexProps } from '../../layout'
import { Flex } from '../../layout/Flex'
import { useTable } from '../Table.context'

type RenderChildren = ({
  selectedRows,
}: {
  selectedRows: string[]
}) => React.ReactNode

export interface ActionBarProps extends FlexProps {
  children: React.ReactNode | RenderChildren
}

// Need wrapper for animation 'cause of https://github.com/framer/motion/issues/368#issuecomment-782098174
const ActionBarWrapper = motion(Box)

const ActionBar = ({
  children,
  className,
  ...rest
}: ActionBarProps): React.ReactElement<ActionBarProps> | null => {
  const { selectedRows, isLoading } = useTable()

  if (isLoading) return null

  return (
    <AnimatePresence>
      {selectedRows.length > 0 && (
        <ActionBarWrapper
          width="100%"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] }}
          exit={{ opacity: 0, height: 0 }}
          className={cn('cap-table__actionBar', className)}
        >
          <Flex
            key="action-bar"
            direction="row"
            justify="space-between"
            align="center"
            p={4}
            bg="gray.100"
            borderBottom="normal"
            borderColor="gray.150"
            color="gray.900"
            {...rest}
          >
            {typeof children === 'function'
              ? children({ selectedRows })
              : children}
          </Flex>
        </ActionBarWrapper>
      )}
    </AnimatePresence>
  )
}

export default ActionBar
