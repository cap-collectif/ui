import cn from 'classnames'
import * as React from 'react'

import { CapUIFontWeight } from '../../../styles'
import { headingStyles, Text, TextProps } from '../../typography'
import { MODAL_TITLE_ARIA_DESCRIBED_BY } from '../shared'

type ModalHeaderLabelProps = TextProps & {
  children: React.ReactNode
}

const ModalHeaderLabel: React.FC<ModalHeaderLabelProps> = ({
  children,
  ...rest
}) => (
  <Text
    as="h2"
    uppercase
    color="neutral-gray.700"
    className={cn('cap-modal__header--label')}
    id={MODAL_TITLE_ARIA_DESCRIBED_BY}
    {...headingStyles.h5}
    fontWeight={CapUIFontWeight.Bold}
    {...rest}
  >
    {children}
  </Text>
)

ModalHeaderLabel.displayName = 'Modal.Header.Label'

export default ModalHeaderLabel
