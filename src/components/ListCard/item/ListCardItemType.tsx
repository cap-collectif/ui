import * as React from 'react'
import { TextProps, Text } from '../../typography'
import { CapUIFontWeight, CapUILineHeight } from '../../../styles'

export interface ListCardItemTypeProps extends TextProps {}

const ListCardItemType: React.FC<ListCardItemTypeProps> = ({
  children,
  ...rest
}) => (
  <Text
    color="gray.500"
    fontSize={1}
    fontWeight={CapUIFontWeight.Normal}
    lineHeight={CapUILineHeight.Sm}
    {...rest}
  >
    {children}
  </Text>
)

export default ListCardItemType
