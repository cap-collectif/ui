import cn from 'classnames'
import * as React from 'react'

import { useIsMobile } from '../../../hooks/useDeviceDetect'
import { CapUIRadius } from '../../../styles'
import { FlexProps, Flex } from '../../layout'
import { useModal } from '../Modal.context'

type ModalFooterProps = FlexProps & {
  readonly children: React.ReactNode
  readonly infoUrl?: string
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className,
  infoUrl,
  ...rest
}) => {
  const { fullSizeOnMobile } = useModal()
  const isMobile = useIsMobile()

  return (
    <Flex
      as="footer"
      px={isMobile ? 4 : 6}
      py={4}
      sx={
        isMobile
          ? {
              button: {
                flexBasis: '100%',
                justifyContent: 'center',
              },
            }
          : null
      }
      align="center"
      justify={isMobile ? 'space-around' : 'flex-end'}
      borderTop="normal"
      borderColor={isMobile ? 'transparent' : 'gray.200'}
      boxShadow={isMobile && fullSizeOnMobile ? 'small' : 'none'}
      borderTopLeftRadius={
        isMobile && fullSizeOnMobile ? CapUIRadius.Popover : 'unset'
      }
      borderTopRightRadius={
        isMobile && fullSizeOnMobile ? CapUIRadius.Popover : 'unset'
      }
      spacing={6}
      className={cn('cap-modal__footer', className)}
      {...rest}
    >
      {children}
    </Flex>
  )
}

ModalFooter.displayName = 'Modal.Footer'

export default ModalFooter
