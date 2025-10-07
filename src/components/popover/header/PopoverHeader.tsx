import {
  PopoverHeading as AriakitPopoverHeading,
  PopoverDismiss,
  usePopoverStore,
} from '@ariakit/react'
import cn from 'classnames'
import * as React from 'react'
import styled from 'styled-components'

import { Box, BoxProps } from '../../box'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { Text } from '../../typography'

const StyledDismiss = styled(PopoverDismiss)`
  position: absolute;
  top: 0;
  right: 0;
  color: ${props => props.theme.colors.popover?.icon};
`

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
  const { hide } = usePopoverStore()

  return (
    <AriakitPopoverHeading
      render={
        <Box
          mb="md"
          pr={closeButton ? 8 : undefined}
          className={cn('cap-popover__header', className)}
          position="relative"
          {...props}
        />
      }
    >
      {typeof children === 'string' ? (
        <Text fontWeight="semibold" color="popover.text.title">
          {children}
        </Text>
      ) : (
        children
      )}

      {closeButton && (
        <StyledDismiss type="button" aria-label="close" onClick={hide}>
          <Icon name={CapUIIcon.CrossO} size={CapUIIconSize.Md} />
        </StyledDismiss>
      )}
    </AriakitPopoverHeading>
  )
}

PopoverHeader.displayName = 'Popover.Header'

export default PopoverHeader as React.FC<PopoverHeaderProps>
