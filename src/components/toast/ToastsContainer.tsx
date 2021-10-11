import { SystemCssProperties } from '@styled-system/css'
import { motion } from 'framer-motion'
import * as React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { LAYOUT_TRANSITION_SPRING } from '../../styles/modules/variables'
import { Box } from '../box/Box'
import { UIEvents } from './enums'
import { Emitter, ToastProps, Toast } from './index'

const ToastWrapper = styled(motion(Box)).attrs({
  width: ['100%', 'auto'],
})``

const common: SystemCssProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  flexDirection: 'column',
  zIndex: 10000,
  alignItems: 'center',
}

const ToastsContainer = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([])
  const visible = toasts.length > 0
  const clearToast = (id: string) => {
    setToasts(v => v.filter(toast => toast.id !== id))
  }
  useEffect(() => {
    Emitter.on(UIEvents.ToastShow, (toast: ToastProps) => {
      setToasts(n => [...n, toast])
    })
    Emitter.on(UIEvents.ToastClear, () => {
      setToasts([])
    })

    return () => {
      Emitter.removeAllListeners(UIEvents.ToastShow)
      Emitter.removeAllListeners(UIEvents.ToastClear)
    }
  }, [])

  return (
    <>
      <Box
        className="toasts-container toasts-container--top"
        display={visible ? 'flex' : 'none'}
        top={2}
        left={0}
        right={0}
        bottom={0}
        sx={common}
      >
        {toasts
          .filter(n => n.position === 'top')
          .map(n => (
            <ToastWrapper
              key={n.id}
              layout
              transition={LAYOUT_TRANSITION_SPRING}
            >
              <Toast {...n} onHide={clearToast} />
            </ToastWrapper>
          ))}
      </Box>
      <Box
        className="toasts-container toasts-container--top-left"
        display={visible ? 'flex' : 'none'}
        top={2}
        left={2}
        right={0}
        bottom={0}
        sx={{
          ...common,
          alignItems: 'flex-start',
        }}
      >
        {toasts
          .filter(n => n.position === 'top-left')
          .map(n => (
            <ToastWrapper
              key={n.id}
              layout
              transition={LAYOUT_TRANSITION_SPRING}
            >
              <Toast {...n} onHide={clearToast} />
            </ToastWrapper>
          ))}
      </Box>
      <Box
        className="toasts-container toasts-container--top-right"
        display={visible ? 'flex' : 'none'}
        top={2}
        left={0}
        right={2}
        bottom={0}
        sx={{ ...common, alignItems: 'flex-end' }}
      >
        {toasts
          .filter(n => n.position === 'top-right')
          .map(n => (
            <ToastWrapper
              key={n.id}
              layout
              transition={LAYOUT_TRANSITION_SPRING}
            >
              <Toast {...n} onHide={clearToast} />
            </ToastWrapper>
          ))}
      </Box>
      <Box
        className="toasts-container toasts-container--bottom"
        display={visible ? 'flex' : 'none'}
        top={0}
        left={0}
        right={0}
        bottom={2}
        sx={{ ...common, flexDirection: 'column-reverse' }}
      >
        {toasts
          .filter(n => n.position === 'bottom')
          .reverse()
          .map(n => (
            <ToastWrapper
              key={n.id}
              layout
              transition={LAYOUT_TRANSITION_SPRING}
            >
              <Toast {...n} onHide={clearToast} />
            </ToastWrapper>
          ))}
      </Box>
      <Box
        className="toasts-container toasts-container--bottom-left"
        display={visible ? 'flex' : 'none'}
        top={0}
        left={2}
        right={0}
        bottom={2}
        sx={{
          ...common,
          alignItems: 'flex-start',
          flexDirection: 'column-reverse',
        }}
      >
        {toasts
          .filter(n => n.position === 'bottom-left')
          .reverse()
          .map(n => (
            <ToastWrapper
              key={n.id}
              layout
              transition={LAYOUT_TRANSITION_SPRING}
            >
              <Toast {...n} onHide={clearToast} />
            </ToastWrapper>
          ))}
      </Box>
      <Box
        className="toasts-container toasts-container--bottom-right"
        display={visible ? 'flex' : 'none'}
        top={0}
        left={0}
        right={2}
        bottom={2}
        sx={{
          ...common,
          flexDirection: 'column-reverse',
          alignItems: 'flex-end',
        }}
      >
        {toasts
          .filter(n => n.position === 'bottom-right')
          .reverse()
          .map(n => (
            <ToastWrapper
              key={n.id}
              layout
              transition={LAYOUT_TRANSITION_SPRING}
            >
              <Toast {...n} onHide={clearToast} />
            </ToastWrapper>
          ))}
      </Box>
    </>
  )
}

export default ToastsContainer
