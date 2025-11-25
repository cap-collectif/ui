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
      {icon ? (
        <Flex
          justify="center"
          align="center"
          backgroundColor={color}
          width="100%"
          height="100%"
        >
          <Icon
            color="white"
            name={icon}
            size={CapUIIconSize.Xxl}
            sx={{ scale }}
          />
        </Flex>
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
