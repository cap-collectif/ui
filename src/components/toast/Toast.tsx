import { motion } from 'framer-motion'
import * as React from 'react'
import { useRef, useState } from 'react'
import styled from 'styled-components'

import {
  fadeOut,
  slideInDown,
  slideInLeftToRight,
  slideInRightToLeft,
  slideInUp,
} from '../../styles/modules/keyframes'
import { SHADOWS } from '../../styles/theme'
import { Box } from '../box/Box'
import { CapUIIcon, CapUIIconSize, Icon } from '../icon'
import { Flex } from '../layout/Flex'
import { Spinner } from '../spinner'
import Text from '../typography/Text'

export interface ToastProps {
  position?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
  id: string
  variant: 'info' | 'success' | 'danger' | 'warning' | 'loading'
  content: React.ReactNode
  onClose?: () => void
  setToast?: (value: null) => void
}

type StyledProps = {
  animation: string
  variant: ToastProps['variant']
}

const ToastInner = styled(motion(Box)).attrs<StyledProps>(({ variant }) => ({
  m: 'xs',
  p: 'md',
  borderRadius: 'toast',
  color: `toast.text.${variant}`,
  bg: `toast.background.${variant}`,
  boxShadow: SHADOWS.medium,
  borderTop: '2px solid',
  borderTopColor: `toast.border.${variant}`,
}))<StyledProps>`
  animation: ${props => props.animation} 0.23s forwards ease-in-out;
  pointer-events: all;
  position: relative;
  width: fit-content;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  & > p {
    margin: 0;
  }

  & a {
    color: inherit;
    text-decoration: underline;
  }
`

const getAnimation = (position: ToastProps['position']) => {
  switch (position) {
    case 'top':
    default:
      return slideInUp
    case 'bottom':
      return slideInDown
    case 'top-left':
    case 'bottom-left':
      return slideInRightToLeft
    case 'top-right':
    case 'bottom-right':
      return slideInLeftToRight
  }
}

export const Toast: React.FC<ToastProps> = ({
  content,
  id,
  onClose,
  setToast,
  position,
  ...props
}) => {
  const [show, setShow] = useState(true)
  const container = useRef<HTMLDivElement>(null)

  const handleClose = () => {
    setShow(false)
    if (setToast) {
      setToast(null)
    }
    if (onClose) {
      onClose()
    }
  }

  const { variant } = props

  return (
    <ToastInner
      {...props}
      variant={variant === 'loading' ? 'info' : variant}
      id={id}
      ref={container}
      animation={show ? getAnimation(position) : fadeOut}
      className="cap-toast"
      zIndex="toast"
    >
      <Flex align="center" gap="xs" css={{ '& > *:last-child': { flex: 1 } }}>
        {variant === 'loading' && (
          <Spinner mr="xs" aria-hidden={true} focusable={false} />
        )}
        {typeof content === 'string' ? (
          <Text dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          content
        )}
        <Icon
          color={`toast.text.${variant}`}
          className="cap-toast-icon"
          name={CapUIIcon.CrossO}
          size={CapUIIconSize.Md}
          tabIndex={0}
          onKeyDown={event => {
            if (event.key === 'Enter' || event.key === ' ') {
              handleClose()
            }
          }}
          onClick={() => {
            handleClose()
          }}
          aria-label="Close"
        />
      </Flex>
    </ToastInner>
  )
}

export default Toast
