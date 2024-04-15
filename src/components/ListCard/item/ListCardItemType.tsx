import * as React from 'react'

import { CapUIFontWeight, CapUILineHeight } from '../../../styles'
import { TextProps, Text } from '../../typography'

export interface ListCardItemTypeProps extends TextProps {}

const ListCardItemType: React.FC<ListCardItemTypeProps> = ({
  children,
  ...rest
}) => (
  <Text
    color="gray.600"
    fontSize={1}
    fontWeight={CapUIFontWeight.Normal}
    lineHeight={CapUILineHeight.Sm}
    {...rest}
  >
    {children}
  </Text>
)

export default ListCardItemType
