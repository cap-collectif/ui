import cn from 'classnames'
import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import * as React from 'react'
import { Dialog, DialogDisclosure, useDialogState } from 'reakit/Dialog'
import styled, { StyledComponent } from 'styled-components'
import { variant as variantStyle } from 'styled-system'

import { useIsMobile } from '../../hooks/useDeviceDetect'
import { LAYOUT_TRANSITION_SPRING } from '../../styles/modules/variables'
import { Flex, FlexProps } from '../layout/Flex'
import type { Context } from './Modal.context'
import { Provider } from './Modal.context'
import { ModalBody } from './body/ModalBody'
import { CapUIModalSize } from './enums'
import ModalFooter from './footer/ModalFooter'
import ModalHeader from './header/ModalHeader'

export type RenderProps = (props: Context) => React.ReactNode

export interface ModalProps extends FlexProps {
  readonly size?: CapUIModalSize
  readonly hideOnClickOutside?: boolean
  readonly noBackdrop?: boolean
  readonly hideCloseButton?: boolean
  readonly scrollBehavior?: 'inside' | 'outside'
  readonly hideOnEsc?: boolean
  readonly preventBodyScroll?: boolean
  readonly fullSizeOnMobile?: boolean
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
type ModalInnerShape = FlexProps &
  MotionProps & { fullSizeOnMobile: boolean; isMobile: boolean }

const TRANSITION_DURATION = 0.35

const Overlay = styled(motion(Flex)).attrs({
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  zIndex: 1030,
  flexDirection: 'column',
  alignItems: 'center',
})`` as StyledComponent<any, any>

const ModalInner = styled(motion(Flex)).attrs(
  ({ fullSizeOnMobile, isMobile, ...rest }: ModalInnerShape) =>
    isMobile && {
      position: 'absolute',
      bottom: 0,
      height: fullSizeOnMobile ? '100% ' : 'auto',
      width: '100% ',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: fullSizeOnMobile && 0,
      borderTopRightRadius: fullSizeOnMobile && 0,
      boxShadow: 'medium',
      maxHeight: fullSizeOnMobile ? '100% ' : '55% ',
      ...rest,
    },
)(
  variantStyle({
    prop: 'size',
    variants: {
      sm: {
        width: '25%',
        maxHeight: '68%',
        mt: '16vh',
      },
      md: {
        width: '40%',
        maxHeight: '68%',
        mt: '16vh',
      },
      lg: {
        width: '50%',
        maxHeight: '68%',
        mt: '16vh',
      },
      xl: {
        width: '50%',
        height: '92%',
        maxHeight: '92%',
        mt: '4vh',
      },
    },
  }),
) as StyledComponent<any, any>

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
  fullSizeOnMobile = false,
  ...props
}: ModalProps) => {
  const dialog = useDialogState({
    animated: TRANSITION_DURATION * 1000,
    visible: show,
  })
  const containerRef = React.useRef<HTMLElement>(null)

  const isMobile = useIsMobile()
  const context = React.useMemo(
    () => ({
      hide: dialog.hide,
      show: dialog.show,
      toggle: dialog.toggle,
      visible: dialog.visible,
      fullSizeOnMobile,
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
        aria-label={ariaLabel}
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
                justify="space-between"
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
                size={isMobile ? null : size}
                isMobile={isMobile}
                fullSizeOnMobile={fullSizeOnMobile}
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
Modal.displayName = 'Modal'

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal