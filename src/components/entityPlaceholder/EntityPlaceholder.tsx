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
      backgroundColor={color}
      width="100%"
      height="100%"
      className={cn('cap-card-cover-placeholder', className)}
      {...props}
    >
      {icon ? (
        <Icon
          color="white"
          name={icon}
          size={CapUIIconSize.Xl}
          sx={{ scale }}
        />
      ) : (
        <PlaceholderBackground
          color={color}
          width="100%"
          height="auto"
          position="absolute"
        />
      )}
    </Flex>
  )
}
