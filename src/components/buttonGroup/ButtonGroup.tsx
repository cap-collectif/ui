import cn from 'classnames'
import * as React from 'react'

import { Flex, FlexProps } from '../layout'

export interface ButtonGroupProps extends FlexProps {}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  ...rest
}) => (
  <Flex
    direction="row"
    spacing="md"
    className={cn('cap-buttonGroup', className)}
    {...rest}
  >
    {children}
  </Flex>
)

ButtonGroup.displayName = 'ButtonGroup'

export default ButtonGroup
