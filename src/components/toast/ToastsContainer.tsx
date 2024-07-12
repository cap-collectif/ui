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

const ToastContainer = () => {
  const [toast, setToast] = useState<ToastProps | null>(null)
  const visible = toast !== null
  const clearToast = () => {
    setToast(null)
  }
  useEffect(() => {
    Emitter.on(UIEvents.ToastShow, (newToast: ToastProps) => {
      setToast(newToast)
    })
    Emitter.on(UIEvents.ToastClear, () => {
      setToast(null)
    })

    return () => {
      Emitter.removeAllListeners(UIEvents.ToastShow)
      Emitter.removeAllListeners(UIEvents.ToastClear)
    }
  }, [])

  return (
    <Box
      className={`toasts-container toasts-container--${toast?.position}`}
      display={visible ? 'flex' : 'none'}
      top={toast?.position?.includes('top') ? 2 : 0}
      left={toast?.position?.includes('left') ? 2 : 0}
      right={toast?.position?.includes('right') ? 2 : 0}
      bottom={toast?.position?.includes('bottom') ? 2 : 0}
      sx={{
        ...common,
        alignItems: toast?.position?.includes('left')
          ? 'flex-start'
          : toast?.position?.includes('right')
          ? 'flex-end'
          : 'center',
        flexDirection: toast?.position?.includes('bottom')
          ? 'column-reverse'
          : 'column',
      }}
    >
      {toast && (
        <ToastWrapper
          key={toast.id}
          layout
          transition={LAYOUT_TRANSITION_SPRING}
        >
          <Toast {...toast} onHide={clearToast} />
        </ToastWrapper>
      )}
    </Box>
  )
}

export default ToastContainer
