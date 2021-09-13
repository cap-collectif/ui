import cn from 'classnames'
import * as React from 'react'
import styled from 'styled-components'
import { variant as variantStyle } from 'styled-system'

import { PolymorphicComponent } from '../box'
import { Flex, FlexProps } from '../layout/Flex'
import { InfoMessageContext, Variant } from './InfoMessage.context'
import { InfoMessageContent } from './content/InfoMessageContent'
import { InfoMessageTitle } from './title/InfoMessageTitle'

export type InfoMessageProps = FlexProps & {
  readonly variant: Variant
}

type InfoMessageComponent = React.FC<InfoMessageProps> & {
  Title: typeof InfoMessageTitle
  Content: typeof InfoMessageContent
}

const InfoMessageInner = styled(Flex)(
  variantStyle({
    variants: {
      info: {
        borderColor: 'blue.200',
        bg: 'blue.100',

        '& .info-message-title, & .info-message-content': {
          color: 'blue.900',
        },
      },
      infoGray: {
        borderColor: 'gray.200',
        bg: 'gray.100',

        '& .info-message-title, & .info-message-content': {
          color: 'gray.900',
        },
      },
      danger: {
        borderColor: 'red.200',
        bg: 'red.100',

        '& .info-message-title, & .info-message-content': {
          color: 'red.900',
        },
      },
      success: {
        borderColor: 'green.200',
        bg: 'green.100',

        '& .info-message-title, & .info-message-content': {
          color: 'green.900',
        },
      },
      warning: {
        borderColor: 'orange.200',
        bg: 'orange.100',

        '& .info-message-title, & .info-message-content': {
          color: 'orange.900',
        },
      },
    },
  }),
) as PolymorphicComponent<InfoMessageProps>

export const InfoMessage: InfoMessageComponent = ({
  children,
  variant,
  className,
  ...props
}: InfoMessageProps) => {
  return (
    <InfoMessageContext.Provider value={{ variant }}>
      <InfoMessageInner
        direction="column"
        p={4}
        border="normal"
        borderRadius="normal"
        variant={variant}
        className={cn('cap-info-message', className)}
        {...props}
      >
        {children}
      </InfoMessageInner>
    </InfoMessageContext.Provider>
  )
}

InfoMessage.Title = InfoMessageTitle
InfoMessage.Content = InfoMessageContent

export default InfoMessage
