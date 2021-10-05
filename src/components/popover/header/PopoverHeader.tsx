import cn from 'classnames'
import * as React from 'react'

import { Box, BoxProps } from '../../box'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { Text } from '../../typography'
import { usePopover } from '../Popover.context'

type PopoverHeaderProps = BoxProps & {
  children: React.ReactNode
  closeButton?: boolean
}

const PopoverHeader = ({
  children,
  className,
  closeButton = true,
  ...props
}: PopoverHeaderProps) => {
  const { hide } = usePopover()

  return (
    <Box
      mb={6}
      pr={closeButton ? 8 : undefined}
      className={cn('cap-popover__header', className)}
      position="relative"
      {...props}
    >
      {typeof children === 'string' ? (
        <Text fontWeight="semibold" color="blue.900">
          {children}
        </Text>
      ) : (
        children
      )}

      {closeButton && (
        <Box
          as="button"
          type="button"
          position="absolute"
          top={0}
          right={0}
          aria-label="close"
          color="gray.500"
          onClick={hide}
        >
          <Icon name={CapUIIcon.Cross} size={CapUIIconSize.Md} />
        </Box>
      )}
    </Box>
  )
}

PopoverHeader.displayName = 'Popover.Header'

export default PopoverHeader as React.FC<PopoverHeaderProps>
