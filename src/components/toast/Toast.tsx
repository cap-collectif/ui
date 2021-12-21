import { motion } from 'framer-motion'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import styled, { Keyframes } from 'styled-components'
import { variant as styledVariant } from 'styled-system'

import useTimeout from '../../hooks/useTimeout'
import colors from '../../styles/modules/colors'
import {
  fadeOut,
  slideInDown,
  slideInLeftToRight,
  slideInRightToLeft,
  slideInUp,
} from '../../styles/modules/keyframes'
import { SHADOWS } from '../../styles/theme'
import { jsxInnerText } from '../../utils/jsx'
import { Box } from '../box/Box'
import { CapUIIcon, CapUIIconSize, Icon, IconProps } from '../icon'
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
  readonly closable?: boolean
  readonly duration?: number
  readonly content: React.ReactNode
  readonly onClose?: () => void
  readonly onHide?: (id: string) => void
}

type StyledProps = {
  readonly animation: Keyframes
}

const MIN_TIMEOUT = 1500

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

const getIcon = (
  variant: ToastProps['variant'],
  props?: Omit<IconProps, 'name' | 'color'>,
): React.ReactNode => {
  const common: { size: IconProps['size'] } = {
    size: CapUIIconSize.Md,
  }

  switch (variant) {
    case 'info':
      return (
        <Icon name={CapUIIcon.Info} color="blue.500" {...common} {...props} />
      )
    case 'success':
      return (
        <Icon name={CapUIIcon.Check} color="green.500" {...common} {...props} />
      )
    case 'danger':
      return (
        <Icon name={CapUIIcon.Cross} color="red.500" {...common} {...props} />
      )
    case 'warning':
      return (
        <Icon
          name={CapUIIcon.Alert}
          color="yellow.500"
          {...common}
          {...props}
        />
      )
    default:
      throw new Error('Unsupported icon variant!')
  }
}

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
  onHide,
  onClose,
  duration = jsxInnerText(content) !== ''
    ? jsxInnerText(content).length * 100
    : MIN_TIMEOUT,
  closable = false,
  position,
  ...props
}) => {
  const [show, setShow] = useState(true)
  const container = useRef<HTMLDivElement>(null)
  const clearTimeout = useTimeout(
    () => {
      if (duration && duration > 0) {
        setShow(false)
      }
    },
    duration < MIN_TIMEOUT ? MIN_TIMEOUT : duration,
    [],
  )

  useEffect(() => {
    const $container = container.current
    const endHandler = (evt: AnimationEvent) => {
      if (evt.animationName === fadeOut.getName()) {
        if (onClose) {
          onClose()
        }
        if (onHide) {
          onHide(id)
        }
      }
    }

    if ($container) {
      $container.addEventListener('animationend', endHandler)
    }

    return () => {
      if ($container) {
        $container.removeEventListener('animationend', endHandler)
      }
    }
  }, [onClose, onHide, id])
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
      <Flex align="center" css={{ '& > *:last-child': { flex: 1 } }}>
        {variant === 'loading' ? (
          <Spinner mr={2} />
        ) : (
          getIcon(variant, { mr: 2 })
        )}
        {typeof content === 'string' ? (
          <Text dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          content
        )}
      </Flex>
      {closable && (
        <Icon
          name={CapUIIcon.CrossO}
          position="absolute"
          size={CapUIIconSize.Sm}
          top={0}
          right={0}
          onClick={() => {
            clearTimeout()
            setShow(false)
          }}
        />
      )}
    </ToastInner>
  )
}

export default Toast
