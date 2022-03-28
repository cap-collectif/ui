import * as React from 'react'
import styled, { keyframes } from 'styled-components'

import type { IconProps } from '../icon'
import { CapUIIcon, CapUIIconSize, Icon } from '../icon'

export type SpinnerProps = Omit<IconProps, 'name'>

const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SpinnerInner = styled(Icon)`
  transform-origin: center center;
  animation: ${spinning} 1.7s linear infinite;
`

export const Spinner: React.FC<SpinnerProps> = React.forwardRef<
  HTMLOrSVGElement,
  SpinnerProps
>(({ size = CapUIIconSize.Md, ...props }, ref) => {
  return (
    <SpinnerInner size={size} ref={ref} {...props} name={CapUIIcon.Spinner} />
  )
})

export default Spinner
