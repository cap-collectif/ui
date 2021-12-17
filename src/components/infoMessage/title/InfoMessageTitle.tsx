import cn from 'classnames'
import * as React from 'react'

import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { FlexProps, Flex } from '../../layout'
import { Text } from '../../typography'
import { useInfoMessageContext } from '../InfoMessage.context'

type Variant = 'info' | 'infoGray' | 'danger' | 'success' | 'warning'

type VariantIcon = {
  [key in Variant]: {
    name: CapUIIcon
    color: string
  }
}

type InfoMessageTitleProps = FlexProps & {
  readonly children: string
  readonly withIcon?: boolean
}

const getIcon = (variant: Variant) => {
  const variantIcon: VariantIcon = {
    info: {
      name: CapUIIcon.Info,
      color: 'blue.500',
    },
    infoGray: {
      name: CapUIIcon.Info,
      color: 'gray.500',
    },
    danger: {
      name: CapUIIcon.Cross,
      color: 'red.500',
    },
    success: {
      name: CapUIIcon.Check,
      color: 'green.500',
    },
    warning: {
      name: CapUIIcon.Alert,
      color: 'orange.500',
    },
  }

  return <Icon {...variantIcon[variant]} size={CapUIIconSize.Sm} />
}

const getColor = (variant: Variant): string => {
  switch (variant) {
    case 'info':
      return 'blue.900'
    case 'infoGray':
      return 'gray.900'
    case 'danger':
      return 'red.900'
    case 'success':
      return 'green.900'
    case 'warning':
      return 'orange.900'
    default:
      throw new Error('Unknown variant InfoMessage')
  }
}

export const InfoMessageTitle = ({
  children,
  className,
  withIcon,
  fontWeight,
  ...props
}: InfoMessageTitleProps) => {
  const { variant } = useInfoMessageContext()

  return (
    <Flex
      direction="row"
      spacing={2}
      className={cn('cap-info-message__title', className)}
      align="center"
      fontWeight="semibold"
      {...props}
    >
      {withIcon && getIcon(variant)}
      <Text color={getColor(variant)} fontSize={1} lineHeight="sm">
        {children}
      </Text>
    </Flex>
  )
}

InfoMessageTitle.displayName = 'InfoMessage.Title'

export default InfoMessageTitle
