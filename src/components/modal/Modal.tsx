import {
  Dialog,
  DialogDisclosure,
  DialogStoreState,
  useDialogStore,
  useStoreState,
} from '@ariakit/react'
import cn from 'classnames'
import * as React from 'react'
import styled, { IStyledComponent } from 'styled-components'
import { variant as variantStyle } from 'styled-system'

import { useIsMobile } from '../../hooks/useDeviceDetect'
import { Box } from '../box'
import { Flex, FlexProps } from '../layout/Flex'
import type { ModalContextType } from './Modal.context'
import { Provider } from './Modal.context'
import { ModalBody } from './body/ModalBody'
import { CapUIModalSize } from './enums'
import ModalFooter from './footer/ModalFooter'
import ModalHeader from './header/ModalHeader'

export type RenderProps = (props: ModalContextType) => React.ReactNode

export interface ModalProps extends Omit<FlexProps, 'children'> {
  readonly size: CapUIModalSize
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
  readonly ariaLabelledby?: string
  readonly onOpen?: () => void
  readonly onClose?: () => void
  readonly baseId?: string
  readonly alwaysOpenInPortal?: boolean
  readonly forceModalDialogToFalse?: boolean
}

type SubComponents = {
  Header: typeof ModalHeader
  Body: typeof ModalBody
  Footer: typeof ModalFooter
}
type ModalInnerShape = FlexProps & {
  fullSizeOnMobile: boolean
  isMobile: boolean
}

const ModalInner = styled(Flex)
  .withConfig({
    shouldForwardProp: propName => propName !== 'size',
  })
  .attrs<any>(
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
        maxHeight: '92%',
        mt: '4vh',
      },
      sidePanel: {
        width: '50%',
        height: '100%',
        mt: '0',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
      },
      fullscreen: {
        width: '100%',
        height: '100%',
        mt: '0',
        borderRadius: '0',
      },
    },
  }),
) as IStyledComponent<any, any>

export const Modal: React.FC<ModalProps> & SubComponents = ({
  children,
  disclosure,
  ariaLabel,
  ariaLabelledby,
  onOpen,
  onClose,
  show: controlledShow,
  noBackdrop = false,
  scrollBehavior = 'inside',
  hideCloseButton = false,
  hideOnClickOutside = true,
  hideOnEsc = true,
  preventBodyScroll = true,
  className,
  size,
  fullSizeOnMobile = false,
  baseId,
  zIndex,
  alwaysOpenInPortal,
  forceModalDialogToFalse,
  ...props
}: ModalProps) => {
  const isMobile = useIsMobile()
  const isControlled = controlledShow !== undefined

  const dialogStore = isControlled
    ? useDialogStore({ open: controlledShow })
    : useDialogStore()
  const show = useStoreState(
    dialogStore,
    (state: DialogStoreState) => state.open,
  )

  const containerRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (isControlled) {
      if (controlledShow) dialogStore.show()
      else dialogStore.hide()
    }
  }, [isControlled, controlledShow, dialogStore])

  React.useEffect(() => {
    if (show) onOpen?.()
    else onClose?.()
  }, [show])

  const context = React.useMemo<ModalContextType>(
    () => ({
      hide: dialogStore.hide,
      show: dialogStore.show,
      toggle: dialogStore.toggle,
      visible: show,
      fullSizeOnMobile,
      hideCloseButton,
    }),
    [dialogStore, hideCloseButton, fullSizeOnMobile, show],
  )

  return (
    <Provider context={context}>
      {disclosure && (
        <DialogDisclosure
          store={dialogStore}
          {...{ ref: disclosure.ref, ...disclosure.props }}
          render={disclosureProps =>
            React.cloneElement(disclosure, disclosureProps)
          }
        />
      )}
      <Box
        sx={{
          '[data-dialog]': {
            '&[data-enter]': {
              opacity: '1 !important',

              '.cap-modal': {
                transform: 'translateY(0)!important',
              },
            },
          },
        }}
      >
        <Dialog
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          open={forceModalDialogToFalse ? false : alwaysOpenInPortal}
          store={dialogStore}
          portal={false}
          hideOnInteractOutside={hideOnClickOutside}
          hideOnEscape={hideOnEsc}
          preventBodyScroll={preventBodyScroll}
          style={{ opacity: 0, transition: 'all 0.2s' }}
        >
          <Flex
            bg={noBackdrop ? 'transparent' : 'modal.default.overlay'}
            overflow={scrollBehavior === 'outside' ? 'auto' : undefined}
            ref={containerRef}
            onClick={(e: React.MouseEvent) => {
              if (e.target === containerRef.current && hideOnClickOutside) {
                dialogStore.hide()
              }
            }}
            className="cap-modal__overlay"
            zIndex={zIndex || 'overlay'}
            align={
              size === CapUIModalSize.SidePanel ||
              size === CapUIModalSize.Fullscreen
                ? 'end'
                : 'center'
            }
            position="fixed"
            left={0}
            right={0}
            bottom={0}
            top={0}
            direction="column"
          >
            <ModalInner
              direction="column"
              justify="space-between"
              overflow={scrollBehavior === 'inside' ? 'auto' : undefined}
              className={cn('cap-modal', className)}
              size={isMobile ? null : size}
              isMobile={isMobile}
              fullSizeOnMobile={fullSizeOnMobile}
              bg="modal.default.background"
              borderRadius="modal"
              zIndex="modal"
              sx={{
                transition: 'all 0.2s',
                transform: 'translateY(-30px)',
              }}
              {...props}
            >
              {typeof children === 'function' ? children(context) : children}
            </ModalInner>
          </Flex>
        </Dialog>
      </Box>
    </Provider>
  )
}
Modal.displayName = 'Modal'

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
