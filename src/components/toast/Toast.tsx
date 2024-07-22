import { motion } from 'framer-motion'
import * as React from 'react'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import { variant as styledVariant } from 'styled-system'

import colors from '../../styles/modules/colors'
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
  readonly position?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
  readonly id: string
  readonly variant: 'info' | 'success' | 'danger' | 'warning' | 'loading'
  readonly content: React.ReactNode
  readonly onClose?: () => void
  readonly setToast?: (value: null) => void
}

type StyledProps = {
  readonly animation: string
}

const ToastInner = styled(motion(Box)).attrs({
  m: 2,
  p: 4,
  pr: 5,
  borderRadius: 'toast',
  bg: 'white',
})<StyledProps>`
  animation: ${props => props.animation} 0.23s forwards ease-in-out;
  pointer-events: all;
  position: relative;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;

  & > p {
    margin: 0;
  }

  & a {
    color: inherit;
    text-decoration: underline;
  }

  ${styledVariant({
    variants: {
      danger: {
        color: 'red.900',
        bg: 'red.100',
        boxShadow: `0 -5px 0 ${colors.red[300]}, ${SHADOWS.medium}`,
      },
      info: {
        color: 'blue.900',
        bg: 'blue.100',
        boxShadow: `0 -5px 0 ${colors.blue[300]}, ${SHADOWS.medium}`,
      },
      loading: {
        color: 'blue.800',
        bg: 'blue.100',
        boxShadow: `0 -5px 0 ${colors.blue[300]}, ${SHADOWS.medium}`,
      },
      success: {
        color: 'green.900',
        bg: 'green.100',
        boxShadow: `0 -5px 0 ${colors.green[300]}, ${SHADOWS.medium}`,
      },
      warning: {
        color: 'yellow.900',
        bg: 'yellow.100',
        boxShadow: `0 -5px 0 ${colors.yellow[300]}, ${SHADOWS.medium}`,
      },
    },
  })};
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
      id={id}
      ref={container}
      animation={show ? getAnimation(position) : fadeOut}
      className="cap-toast"
      zIndex="toast"
    >
      <Flex align="center" gap={2} css={{ '& > *:last-child': { flex: 1 } }}>
        {variant === 'loading' && (
          <Spinner mr={2} aria-hidden={true} focusable={false} />
        )}
        {typeof content === 'string' ? (
          <Text dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          content
        )}
        <Icon
          name={CapUIIcon.CrossO}
          size={CapUIIconSize.Md}
          tabIndex={0}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              handleClose()
            }
          }}
          onClick={() => {
            handleClose()
          }}
        />
      </Flex>
    </ToastInner>
  )
}

export default Toast
