import * as React from 'react'

import { CapUIFontWeight } from '../../../styles'
import { TextProps, Text } from '../../typography'

export interface ListCardItemLabelProps extends TextProps {}

const ListCardItemLabel: React.FC<ListCardItemLabelProps> = ({
  children,
  ...rest
}) => (
  <Text color="text.primary" fontWeight={CapUIFontWeight.Semibold} {...rest}>
    {children}
  </Text>
)

export default ListCardItemLabel
