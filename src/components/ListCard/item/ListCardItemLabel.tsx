import * as React from 'react'
import { TextProps, Text } from '../../typography'
import { CapUIFontWeight } from '../../../styles'

export interface ListCardItemLabelProps extends TextProps {}

const ListCardItemLabel: React.FC<ListCardItemLabelProps> = ({
  children,
  ...rest
}) => (
  <Text color="gray.900" fontWeight={CapUIFontWeight.Semibold} {...rest}>
    {children}
  </Text>
)

export default ListCardItemLabel
