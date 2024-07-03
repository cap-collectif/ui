import cn from 'classnames'
import * as React from 'react'

import { CapUIFontWeight } from '../../../styles'
import { headingStyles, Text, TextProps } from '../../typography'

type ModalHeaderLabelProps = TextProps & {
  children: React.ReactNode
}

const ModalHeaderLabel: React.FC<ModalHeaderLabelProps> = ({
  children,
  ...rest
}) => (
  <Text
    {...headingStyles.h5}
    uppercase
    color="neutral-gray.600"
    className={cn('cap-modal__header--label')}
    fontWeight={CapUIFontWeight.Bold}
    {...rest}
  >
    {children}
  </Text>
)

ModalHeaderLabel.displayName = 'Modal.Header.Label'

export default ModalHeaderLabel
