import * as React from 'react'

import {
  CapUIFontSize,
  CapUIFontWeight,
  CapUILineHeight,
} from '../../../styles'
import { TextProps, Text } from '../../typography'

export interface ListCardItemTypeProps extends TextProps {}

const ListCardItemType: React.FC<ListCardItemTypeProps> = ({
  children,
  ...rest
}) => (
  <Text
    color="gray.600"
    fontSize={CapUIFontSize.Caption}
    fontWeight={CapUIFontWeight.Normal}
    lineHeight={CapUILineHeight.S}
    {...rest}
  >
    {children}
  </Text>
)

export default ListCardItemType
