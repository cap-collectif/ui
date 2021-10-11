import cn from 'classnames'
import * as React from 'react'

import { CapUIFontWeight } from '../../../styles'
import { Box, BoxPropsOf } from '../../box'
import { SkeletonText } from '../../skeleton'
import { headingStyles } from '../../typography/Heading'
import { useTable } from '../Table.context'

type DefaultStyles = {
  fontWeight: string
  fontSize: string
  color: string
  uppercase: boolean
}

type RenderChildren = ({ styles }: { styles: DefaultStyles }) => React.ReactNode

export interface ThProps extends BoxPropsOf<'th'> {
  isNumeric?: boolean
  noPlaceholder?: boolean
  children?: React.ReactNode | RenderChildren
}

export const thStyles: DefaultStyles = {
  fontWeight: 'inherit',
  fontSize: 'inherit',
  color: 'inherit',
  uppercase: true,
}

export const Th = ({
  isNumeric,
  children,
  className,
  noPlaceholder,
  ...rest
}: ThProps): React.ReactElement<ThProps> => {
  const { isLoading } = useTable()

  return (
    <Box
      as="th"
      py={4}
      px={4}
      {...headingStyles.h5}
      textAlign={isNumeric ? 'right' : 'left'}
      className={cn('cap-table__th', className)}
      color="gray.500"
      fontWeight={CapUIFontWeight.Bold}
      uppercase
      {...rest}
    >
      {isLoading && !noPlaceholder ? (
        <SkeletonText size="md" width="100%" />
      ) : typeof children === 'function' ? (
        children({ styles: thStyles })
      ) : (
        children
      )}
    </Box>
  )
}

Th.displayName = 'Table.Th'

export default Th
