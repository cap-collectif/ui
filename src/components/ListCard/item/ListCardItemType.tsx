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
    color="text.tertiary"
    fontSize={CapUIFontSize.Caption}
    fontWeight={CapUIFontWeight.Semibold}
    lineHeight={CapUILineHeight.S}
    {...rest}
  >
    {children}
  </Text>
)

export default ListCardItemType
