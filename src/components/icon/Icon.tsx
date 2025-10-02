import cn from 'classnames'
import * as React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

import * as Icons from '../../assets/icons'
import { Box, BoxProps, BoxPropsOf } from '../box'
import { CapUIIcon, CapUIIconSize } from './enums'

export interface IconProps extends Omit<BoxPropsOf<'svg'>, 'size' | 'ref'> {
  name: CapUIIcon
  size?: CapUIIconSize
  ref?: React.ForwardedRef<SVGSVGElement>
}

const getSize = (size: IconProps['size'] = CapUIIconSize.Md): number => {
  switch (size) {
    case CapUIIconSize.Xs:
      return 3
    case CapUIIconSize.Sm:
      return 4
    case CapUIIconSize.Md:
    default:
      return 6
    case CapUIIconSize.Lg:
      return 8
    case CapUIIconSize.Xl:
      return 10
    case CapUIIconSize.Xxl:
      return 12
  }
}

const IconInner = styled(Box).attrs<BoxProps & { variant: IconProps['size'] }>(
  props => ({
    minSize: getSize(props.variant),
    maxSize: getSize(props.variant),
  }),
)(
  variant({
    variants: {
      xs: {
        size: 3,
        p: '2px',
      },
      sm: {
        size: 4,
        p: '2px',
      },
      md: {
        size: 6,
        p: '5px',
      },
      lg: {
        size: 8,
        p: '4px',
      },
      xl: {
        size: 10,
        p: '8px',
      },
      xxl: {
        size: 12,
        p: '11px',
      },
    },
  }),
)

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    { name, size = CapUIIconSize.Md, color = 'inherit', className, ...props },
    ref,
  ) => {
    const IconSvg = Icons[name]

    return (
      <IconInner
        as={IconSvg}
        aria-hidden="true"
        variant={size}
        className={cn('cap-icon', className)}
        color={color}
        ref={ref}
        {...props}
      />
    )
  },
)

Icon.displayName = 'Icon'

export default Icon
