import { useEffect, useState } from 'react'

import { breakpoints } from '../styles/theme'
import { useMatchMedia } from './useMatchMedia'

const useDeviceDetect = () => {
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i,
      ),
    )
    setMobile(mobile)
  }, [])

  return { isMobile }
}

export default useDeviceDetect

export const useIsMobile = (): boolean =>
  useMatchMedia(`screen and (max-width: ${breakpoints.tablet})`)
export const useIsTablet = (): boolean =>
  useMatchMedia(
    `screen and (max-width: ${breakpoints.desktop}) and (min-width: ${breakpoints.tablet})`,
  )
export const useIsDesktop = (): boolean =>
  useMatchMedia(
    `screen and (max-width: ${breakpoints.medium}) and (min-width: ${breakpoints.desktop})`,
  )
export const useIsMedium = (): boolean =>
  useMatchMedia(
    `screen and (max-width: ${breakpoints.wide}) and (min-width: ${breakpoints.medium})`,
  )
export const useIsDesktopWide = (): boolean =>
  useMatchMedia(
    `screen and (max-width: ${breakpoints.ultraWide}) and (min-width: ${breakpoints.wide})`,
  )
