import cn from 'classnames'
import * as React from 'react'

import { CapUIFontWeight } from '../../styles'
import { pxToRem } from '../../styles/modules/mixins'
import Box, { BoxProps } from '../box/Box'
import { Flex } from '../layout'

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
  <Flex
    className={cn('cap-divider', className)}
    position={'relative'}
    height={'auto'}
    maxWidth={'100%'}
    {...props}
  >
    <Flex
      position={'absolute'}
      top={'50%'}
      left={'50%'}
      border={`${pxToRem(1)} solid`}
      borderColor={'neutral-gray.150'}
      width={'100%'}
      flex={1}
      sx={{
        transform: 'translate(-50%, -50%)',
      }}
    />

    <Flex
      position={'relative'}
      mx={'auto'}
      px={4}
      alignItems={'center'}
      textAlign={'center'}
      justifyContent={'center'}
      backgroundColor={backgroundColor ?? '#fff'}
      height={'fit-content'}
    >
      {typeof children === 'string' ? (
        <Box fontWeight={CapUIFontWeight.Bold} color={'neutral-gray.600'}>
          {children}
        </Box>
      ) : (
        <Box>{children}</Box>
      )}
    </Flex>
  </Flex>
)

Divider.displayName = 'Divider'

export default Divider
