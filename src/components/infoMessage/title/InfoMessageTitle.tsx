import cn from 'classnames'
import * as React from 'react'

import { CapUIFontSize, CapUILineHeight } from '../../../styles'
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
  children: string | React.ReactNode
  withIcon?: boolean
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
      spacing="xs"
      className={cn('cap-info-message__title', className)}
      align="center"
      fontWeight="semibold"
      {...props}
    >
      {withIcon && getIcon(variant)}
      {typeof children === 'string' ? (
        <Text fontSize={CapUIFontSize.BodySmall} lineHeight={CapUILineHeight.S}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Flex>
  )
}

InfoMessageTitle.displayName = 'InfoMessage.Title'

export default InfoMessageTitle
