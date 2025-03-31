import cn from 'classnames'
import * as React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'

import * as SpotIcons from '../../assets/spotIcons'
import { Box, BoxProps, BoxPropsOf } from '../box'
import { CapUISpotIcon, CapUISpotIconSize } from './enums'

export interface SpotIconProps extends Omit<BoxPropsOf<'svg'>, 'size' | 'ref'> {
  name: CapUISpotIcon
  size?: CapUISpotIconSize
}

const getSize = (
  size: SpotIconProps['size'] = CapUISpotIconSize.Md,
): string | number => {
  switch (size) {
    case CapUISpotIconSize.Sm:
      return 11
    case CapUISpotIconSize.Md:
    default:
      return 12
    case CapUISpotIconSize.Lg:
      return '124px'
  }
}

const IconInner = styled(Box).attrs<
  BoxProps & { variant: SpotIconProps['size'] }
>(props => ({
  minSize: getSize(props.variant),
  maxSize: getSize(props.variant),
}))(
  variant({
    variants: {
      sm: {
        size: 11,
        p: 2,
      },
      md: {
        size: 12,
        p: '10px',
      },
      lg: {
        size: '124px',
        p: 4,
      },
    },
  }),
)

const SpotIcon: React.FC<SpotIconProps> = React.forwardRef<
  SVGSVGElement,
  SpotIconProps
>(({ name, size = CapUISpotIconSize.Md, className, ...props }, ref) => {
  const SpotIconSvg = SpotIcons[name]

  return (
    <IconInner
      as={SpotIconSvg}
      aria-hidden
      focusable="false"
      variant={size}
      className={cn('cap-spotIcon', className)}
      ref={ref}
      sx={{
        'path[stroke="primary.darker"]': { stroke: 'primary.darker' },
        'path[fill="primary.darker"]': { fill: 'primary.darker' },
        'path[stroke="primary.light"]': { stroke: 'primary.light' },
        'path[fill="primary.light"]': { fill: 'primary.light' },
        'path[stroke="primary.lighter"]': { stroke: 'primary.lighter' },
        'path[fill="primary.lighter"]': { fill: 'primary.lighter' },
        'rect[stroke="primary.darker"]': { stroke: 'primary.darker' },
        'rect[fill="primary.darker"]': { fill: 'primary.darker' },
        'rect[stroke="primary.light"]': { stroke: 'primary.light' },
        'rect[fill="primary.light"]': { fill: 'primary.light' },
        'rect[stroke="primary.lighter"]': { stroke: 'primary.lighter' },
        'rect[fill="primary.lighter"]': { fill: 'primary.lighter' },
      }}
      {...props}
    />
  )
})

SpotIcon.displayName = 'SpotIcon'

export default SpotIcon
