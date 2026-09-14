import cn from 'classnames'
import * as React from 'react'

import { useIsMobile } from '../../../hooks/useDeviceDetect'
import { CapUIRadius } from '../../../styles'
import { Button } from '../../button'
import { CapUIIcon } from '../../icon'
import { FlexProps, Flex } from '../../layout'
import { useModal } from '../Modal.context'

export type ModalFooterProps = FlexProps & {
  readonly children: React.ReactNode
  readonly info?: {
    url: string
    label: string
  }
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className,
  info,
  ...rest
}) => {
  const { fullSizeOnMobile } = useModal()
  const isMobile = useIsMobile()

  return (
    <Flex
      as="footer"
      position="relative"
      px={isMobile ? 'md' : 'lg'}
      py="md"
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
      borderTop={isMobile ? 'none' : 'normal'}
      borderColor="modal.default.border"
      boxShadow={isMobile && fullSizeOnMobile ? 'small' : 'none'}
      borderTopLeftRadius={
        isMobile && fullSizeOnMobile ? CapUIRadius.Popover : 'unset'
      }
      borderTopRightRadius={
        isMobile && fullSizeOnMobile ? CapUIRadius.Popover : 'unset'
      }
      spacing="lg"
      flexShrink={0}
      className={cn('cap-modal__footer', className)}
      {...rest}
    >
      {!isMobile && info && (
        <Button
          position="absolute"
          left="lg"
          as="a"
          target="_blank"
          href={info.url}
          variantSize="small"
          variant="link"
          leftIcon={CapUIIcon.Info}
        >
          {info.label}
        </Button>
      )}
      {children}
    </Flex>
  )
}

ModalFooter.displayName = 'Modal.Footer'

export default ModalFooter
