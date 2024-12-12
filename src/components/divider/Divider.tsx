import cn from 'classnames'
import * as React from 'react'

import { pxToRem } from '../../styles/modules/mixins'
import { BoxProps } from '../box/Box'
import { Flex } from '../layout'
import { Text } from '../typography'

export type DividerProps = BoxProps & {
  children: React.ReactNode
  className?: string
  backgroundColor?: string
}

export const Divider: React.FC<DividerProps> = ({
  children,
  className,
  backgroundColor,
  ...props
}) => (
  <Flex className={cn('cap-divider', className)} {...props}>
    <Flex
      position={'absolute'}
      border={`${pxToRem(1)} solid`}
      borderColor={'neutral-gray.150'}
      sx={{ boxSizing: 'border-box' }}
      width={'100%'}
      flex={1}
    />

    <Flex
      position={'absolute'}
      top={'50%'}
      left={'50%'}
      alignItems={'center'}
      textAlign={'center'}
      pl={4}
      pr={4}
      backgroundColor={backgroundColor ?? '#fff'}
      sx={{
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Text>{children}</Text>
    </Flex>
  </Flex>
)

Divider.displayName = 'Divider'

export default Divider
