import cn from 'classnames'
import * as React from 'react'

import { Flex, FlexProps } from '../../layout/Flex'

export interface CheckboxGroupProps extends FlexProps {
  readonly children: React.ReactElement[]
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  children,
  onChange,
  ...props
}) => {
  const checkboxes = React.Children.map(
    children,
    (child: React.ReactElement) => {
      return React.cloneElement(child, {
        isInvalid: false, // We don't want to display the checkboxes in red
      })
    },
  )
  return (
    <Flex
      width={props.width || '100%'}
      direction="column"
      spacing={1}
      className={cn('cap-checkbox-group', props.className)}
      {...props}
    >
      {checkboxes}
    </Flex>
  )
}

CheckboxGroup.displayName = 'CheckboxGroup'

export default CheckboxGroup as React.FC<CheckboxGroupProps>
