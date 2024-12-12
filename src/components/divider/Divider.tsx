import cn from 'classnames'
import * as React from 'react'

import { CapUIFontWeight } from '../../styles'
import { pxToRem } from '../../styles/modules/mixins'
import { BoxProps } from '../box/Box'
import { Flex } from '../layout'
import { Text } from '../typography'

export type DividerProps = BoxProps & {
  children: string
}

export const Divider: React.FC<DividerProps> = ({
  children,
  className,
  ...props
}) => (
  <Flex
    direction={'column'}
    alignItems={'center'}
    justifyContent={'center'}
    position="relative"
    width={'100%'}
    className={cn('cap-divider', className)}
    {...props}
  >
    <Flex
      position={'absolute'}
      border={`${pxToRem(1)} solid`}
      borderColor={'gray.150'}
      sx={{ boxSizing: 'border-box' }}
      width={'100%'}
      flex={1}
    ></Flex>

    <Flex
      position={'absolute'}
      top={'50%'}
      left={'50%'}
      alignItems={'center'}
      textAlign={'center'}
      pl={4}
      pr={4}
      backgroundColor={'#fff'}
      sx={{
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Text fontWeight={CapUIFontWeight.Bold} color={'gray.600'}>
        {children.toUpperCase()}
      </Text>
    </Flex>
  </Flex>
)

Divider.displayName = 'Divider'

export default Divider
