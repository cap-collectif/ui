import cn from 'classnames'
import * as React from 'react'

import { CapUIIcon, CapUIIconSize, Icon } from '../icon'
import { Flex, FlexProps } from '../layout'
import { PlaceholderBackground } from './PlaceholderBackground'

export type EntityPlaceholderProps = FlexProps & {
  color?: string
  icon?: CapUIIcon
  scale?: string
}

export const EntityPlaceholder: React.FC<EntityPlaceholderProps> = ({
  className,
  color = 'neutral-gray.base',
  icon,
  scale = '1',
  ...props
}) => {
  return (
    <Flex
      position="relative"
      borderRadius="xxs"
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
      className={cn('cap-card-cover-placeholder', className)}
      width="100%"
      style={{ aspectRatio: '3 / 2' }}
      {...props}
    >
      <PlaceholderBackground color={color} position="absolute" />
      {icon ? (
        <Icon
          color="white"
          name={icon}
          size={CapUIIconSize.Xxl}
          sx={{ scale }}
        />
      ) : null}
    </Flex>
  )
}
