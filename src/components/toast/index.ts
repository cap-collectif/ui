import EventEmitter from 'events'

import uuid from '../../utils/uuid'
import type { ToastProps } from './Toast'
import { UIEvents } from './enums'

export const Emitter = new EventEmitter()

export const toast = (value: Omit<ToastProps, 'id'>): void => {
  Emitter.emit(UIEvents.ToastShow, {
    ...value,
    position: value.position || 'top',
    id: uuid(),
  })
}

export const clearToasts = (): void => {
  Emitter.emit(UIEvents.ToastClear)
}

export { default as Toast } from './Toast'
export type { ToastProps } from './Toast'
