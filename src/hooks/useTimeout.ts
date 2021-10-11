// Source: https://github.com/jkomyno/usetimeout-react-hook/blob/fbd793e8a2b8c1101c56157194fb3db685bacc7f/src/useTimeout.ts
import { useEffect, useRef } from 'react'

export interface TimeoutHandler<T> {
  setTimeout: (fn: () => void, timeout: number) => T
  clearTimeout: (timeout: T | undefined) => void
}

export type CancelTimer = () => void

type Callback = () => void

export type UseTimeout = (
  callback: Callback,
  timeout: number,
  deps?: any[],
) => CancelTimer

export const defaultTimeoutHandler: TimeoutHandler<number> = {
  setTimeout: (fn: () => void, timeout: number) =>
    window.setTimeout(fn, timeout),
  clearTimeout: (timeout: number | undefined) => {
    window.clearTimeout(timeout)
  },
}

export const useTimeout: UseTimeout = (callback, timeout, deps = []) => {
  const refCallback = useRef<Callback>()
  const refTimer = useRef<
    typeof defaultTimeoutHandler extends TimeoutHandler<infer R>
      ? R
      : never | undefined
  >()

  useEffect(() => {
    refCallback.current = callback
  }, [callback])

  /**
   * The timer is restarted every time an item in `deps` changes.
   *
   */
  useEffect(() => {
    const timerID = defaultTimeoutHandler.setTimeout(
      refCallback.current!,
      timeout,
    )
    refTimer.current = timerID

    // cleans the timer identified by timerID when the effect is unmounted.
    return () => defaultTimeoutHandler.clearTimeout(timerID)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  /**
   * Returns a function that can be used to cancel the current timeout.
   * It does so using `timeHandler.clearTimeout` without exposing the last
   * reference to the timer to the user.
   */
  function cancelTimer() {
    return defaultTimeoutHandler.clearTimeout(refTimer.current)
  }

  return cancelTimer
}

export default useTimeout
