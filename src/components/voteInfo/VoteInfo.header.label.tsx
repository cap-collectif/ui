import cn from 'classnames'
import * as React from 'react'

import { CapUIFontWeight } from '../../styles'
import { headingStyles, Text, TextProps } from '../typography'

export interface VoteInfoHeaderLabelProps extends TextProps {
  children: React.ReactNode
}

const VoteInfoHeaderLabel: React.FC<VoteInfoHeaderLabelProps> = ({
  children,
  ...rest
}) => {
  return (
    <Text
      {...headingStyles.h5}
      uppercase
      color="gray.500"
      className={cn('vote_info__header--label')}
      fontWeight={CapUIFontWeight.Bold}
      {...rest}
    >
      {children}
    </Text>
  )
}
VoteInfoHeaderLabel.displayName = 'VoteInfo.Header.Label'

export default VoteInfoHeaderLabel
