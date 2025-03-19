import cn from 'classnames'
import * as React from 'react'
import styled from 'styled-components'

import { PolymorphicComponent } from '../box'
import { Flex, FlexProps } from '../layout/Flex'
import { InfoMessageContext, Variant } from './InfoMessage.context'
import { InfoMessageContent } from './content/InfoMessageContent'
import { InfoMessageTitle } from './title/InfoMessageTitle'

export type InfoMessageProps = FlexProps & {
  variant: Variant
}

type InfoMessageComponent = React.FC<InfoMessageProps> & {
  Title: typeof InfoMessageTitle
  Content: typeof InfoMessageContent
}

const InfoMessageInner = styled(Flex).attrs<InfoMessageProps>(
  ({ variant }) => ({
    p: 'md',
    borderRadius: 'xxs',
    color: `infoMessage.text.${variant}`,
    bg: `infoMessage.background.${variant}`,
    border: '1px solid',
    borderColor: `infoMessage.border.${variant}`,
  }),
)`` as PolymorphicComponent<InfoMessageProps>

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
        border="normal"
        borderRadius="normal"
        gap="xxs"
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

InfoMessage.displayName = 'InfoMessage'

export default InfoMessage
