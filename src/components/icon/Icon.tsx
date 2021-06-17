import cn from 'classnames'
import * as React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

import * as Icons from '../../assets/icons'
import { Box, BoxProps, BoxPropsOf } from '../box'
import { IconName, IconSize } from './enums'

export interface IconProps extends Omit<BoxPropsOf<'svg'>, 'size' | 'ref'> {
  name: IconName
  size?: IconSize
}

const getSize = (size: IconProps['size'] = IconSize.Md): number => {
  switch (size) {
    case IconSize.Xs:
      return 3
    case IconSize.Sm:
      return 4
    case IconSize.Md:
    default:
      return 6
    case IconSize.Lg:
      return 8
    case IconSize.Xl:
      return 10
    case IconSize.Xxl:
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

const Icon = React.forwardRef<HTMLOrSVGElement, IconProps>(
  (
    { name, size = IconSize.Md, color = 'inherit', className, ...props },
    ref,
  ) => {
    const IconSvg = Icons[name]

    return (
      <IconInner
        as={IconSvg}
        variant={size}
        className={cn('icon', className)}
        color={color}
        ref={ref}
        css={{ overflow: 'visible !important' }}
        {...props}
      />
    )
  },
)

Icon.displayName = 'Icon'

export default Icon
