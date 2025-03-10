import cn from 'classnames'
import * as React from 'react'

import formatSpacingNumber from '../../../utils/formatSpacingNumber'
import { Box, BoxPropsOf } from '../../box'
import { SkeletonText } from '../../skeleton'
import { useTable } from '../Table.context'

export interface TdProps extends BoxPropsOf<'td'> {
  isNumeric?: boolean
  visibleOnHover?: boolean
  noPlaceholder?: boolean
  children: React.ReactNode
}

const styles = {
  a: {
    '&:hover': {
      color: 'primary.base',
    },
  },
}

export const Td: React.FC<TdProps> = ({
  isNumeric,
  visibleOnHover,
  children,
  noPlaceholder,
  ...props
}) => {
  const { isLoading } = useTable()
  const isEmpty: boolean = !children && children !== 0 && !isLoading

  return (
    <Box
      as="td"
      py={visibleOnHover ? 2 : 3}
      px={4}
      textAlign={isNumeric ? 'right' : 'left'}
      style={{ whiteSpace: isNumeric ? 'nowrap' : 'initial' }}
      className={cn('cap-table__td', { 'visible-on-hover': visibleOnHover })}
      sx={styles}
      lineHeight="base"
      color="gray.900"
      {...props}
    >
      {isEmpty && !visibleOnHover && '-'}
      {isLoading && !noPlaceholder ? (
        <SkeletonText size="md" width="100%" />
      ) : isNumeric && typeof children === 'string' ? (
        formatSpacingNumber(children)
      ) : (
        children
      )}
    </Box>
  )
}

Td.displayName = 'Table.Td'

export default Td
