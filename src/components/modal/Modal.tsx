import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import * as React from 'react'
import { Dialog, DialogDisclosure, useDialogState } from 'reakit/Dialog'
import styled from 'styled-components'
import { variant as variantStyle } from 'styled-system'

import useDeviceDetect from '../../hooks/useDeviceDetect'
import { LAYOUT_TRANSITION_SPRING } from '../../styles/modules/variables'
import { BoxProps } from '../box'
import { Box } from '../box/Box'
import { Flex } from '../layout/Flex'
import type { Context } from './Modal.context'
import { Provider } from './Modal.context'
import { ModalBody } from './body/ModalBody'
import { CapUIModalSize } from './enums'
import ModalFooter from './footer/ModalFooter'
import ModalHeader from './header/ModalHeader'

type RenderProps = (props: Context) => React.ReactNode

export interface ModalProps extends BoxProps {
  readonly size: CapUIModalSize
  readonly hideOnClickOutside?: boolean
  readonly noBackdrop?: boolean
  readonly hideCloseButton?: boolean
  readonly scrollBehavior?: 'inside' | 'outside'
  readonly hideOnEsc?: boolean
  readonly preventBodyScroll?: boolean
  readonly disclosure?: any
  readonly show?: boolean
  readonly children: RenderProps | React.ReactNode
  readonly ariaLabel: string
  readonly onOpen?: () => void
  readonly onClose?: () => void
}

type SubComponents = {
  Header: typeof ModalHeader
  Body: typeof ModalBody
  Footer: typeof ModalFooter
}

const TRANSITION_DURATION = 0.2

const Overlay = styled(motion(Box)).attrs({
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  zIndex: 1030,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})`` as any

const ModalInner = styled(motion(Flex))(
  variantStyle({
    prop: 'size',
    variants: {
      sm: {
        width: '25%',
      },
      md: {
        width: '40%',
      },
      lg: {
        width: '50%',
      },
      xl: {
        width: '50%',
      },
    },
  }),
) as any

export const Modal: React.FC<ModalProps> & SubComponents = ({
  children,
  disclosure,
  ariaLabel,
  onOpen,
  onClose,
  show,
  noBackdrop = false,
  scrollBehavior = 'inside',
  hideCloseButton = false,
  hideOnClickOutside = true,
  hideOnEsc = true,
  preventBodyScroll = true,
  className,
  size,
  ...props
}: ModalProps) => {
  const dialog = useDialogState({
    animated: TRANSITION_DURATION * 1000,
    visible: show,
  })
  const containerRef = React.useRef<HTMLElement>(null)

  const { isMobile } = useDeviceDetect()

  const context = React.useMemo(
    () => ({
      hide: dialog.hide,
      show: dialog.show,
      toggle: dialog.toggle,
      visible: dialog.visible,
      hideCloseButton,
    }),
    [dialog, hideCloseButton],
  )

  return (
    <Provider context={context}>
      {disclosure && (
        <DialogDisclosure
          {...dialog}
          {...(disclosure ? { ref: disclosure.ref, ...disclosure.props } : {})}
        >
          {disclosureProps => React.cloneElement(disclosure, disclosureProps)}
        </DialogDisclosure>
      )}

      <Dialog
        {...dialog}
        hideOnClickOutside={hideOnClickOutside}
        hideOnEsc={hideOnEsc}
        preventBodyScroll={preventBodyScroll}
      >
        <AnimatePresence>
          {dialog.visible && (
            <Overlay
              bg={noBackdrop ? 'transparent' : 'rgba(43,43,43,0.32)'}
              overflow={scrollBehavior === 'outside' ? 'auto' : undefined}
              ref={containerRef}
              onClick={(e: MouseEvent) => {
                if (e.target === containerRef.current && hideOnClickOutside) {
                  dialog.hide()
                }
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: TRANSITION_DURATION,
                ease: [0.48, 0.15, 0.25, 0.96],
              }}
              exit={{ opacity: 0 }}
              className="cap-modal__overlay"
            >
              <ModalInner
                direction="column"
                overflow={scrollBehavior === 'inside' ? 'overlay' : undefined}
                initial={{ opacity: 0, y: isMobile ? 20 : -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  opacity: {
                    duration: TRANSITION_DURATION,
                    ease: [0.48, 0.15, 0.25, 0.96],
                  },
                  y: LAYOUT_TRANSITION_SPRING,
                }}
                exit={{ opacity: 0, y: isMobile ? 20 : -20 }}
                className={cn('cap-modal', className)}
                size={size}
                maxHeight="68%"
                mt="16vh"
                bg="white"
                borderRadius="modal"
                {...props}
              >
                {typeof children === 'function' ? children(context) : children}
              </ModalInner>
            </Overlay>
          )}
        </AnimatePresence>
      </Dialog>
    </Provider>
  )
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
