import * as React from 'react'

import useLoadingMachine from '../../../hooks/useLoadingMachine'
import isAsync from '../../../utils/isAsync'
import { ButtonProps } from '../../button'
import Button from '../../button/Button'
import Heading from '../../typography/Heading'
import { RenderProps } from '../Modal'
import { Modal, ModalProps } from '../index'

export interface ConfirmModalProps
  extends Omit<ModalProps, 'children' | 'title'> {
  readonly children?: RenderProps | React.ReactNode
  readonly options: {
    confirmButton: {
      content: string
      props?: ButtonProps
    }
    cancelButton: {
      content: string
      props?: ButtonProps
    }
  }
  readonly title: React.ReactNode
  readonly body?: React.ReactNode
  readonly onConfirm?: () => void | Promise<void>
  readonly onCancel?: () => void | Promise<void>
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  children,
  title,
  body,
  onConfirm,
  onCancel,
  options,
  ...props
}: ConfirmModalProps) => {
  const { isLoading, startLoading, stopLoading } = useLoadingMachine()
  return (
    <Modal
      hideOnClickOutside={false}
      hideOnEsc={false}
      hideCloseButton
      {...props}
    >
      {({ hide }) => (
        <>
          <Modal.Header p={4} className="confirm-modal-header">
            <Heading>{title}</Heading>
          </Modal.Header>
          {body && (
            <Modal.Body className="confirm-modal-body" px={4}>
              {body}
            </Modal.Body>
          )}
          <Modal.Footer
            className="confirm-modal-footer"
            spacing={4}
            p={4}
            pt={4}
            align={['stretch', 'center']}
            direction={['column', 'row']}
          >
            <Button
              disabled={isLoading}
              variant="secondary"
              variantColor="primary"
              variantSize="medium"
              justifyContent={['center', 'flex-start']}
              {...options.cancelButton.props}
              onClick={async () => {
                if (onCancel) {
                  if (isAsync(onCancel)) {
                    try {
                      startLoading()
                      await onCancel()
                      stopLoading()
                    } catch (e) {
                      stopLoading()
                      console.error(e)
                    }
                  }
                }
                hide()
              }}
            >
              {options.cancelButton.content}
            </Button>
            <Button
              disabled={isLoading}
              isLoading={isLoading}
              justifyContent={['center', 'flex-start']}
              variant="primary"
              variantColor="danger"
              variantSize="medium"
              {...options.confirmButton.props}
              onClick={async () => {
                if (onConfirm) {
                  if (isAsync(onConfirm)) {
                    try {
                      startLoading()
                      await onConfirm()
                      stopLoading()
                    } catch (e) {
                      stopLoading()
                      console.error(e)
                    }
                  }
                }
                hide()
              }}
            >
              {options.confirmButton.content}
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  )
}

export default ConfirmModal
