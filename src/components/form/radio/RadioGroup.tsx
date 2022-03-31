import cn from 'classnames'
import * as React from 'react'

import { Flex, FlexProps } from '../../layout/Flex'

export interface RadioGroupProps extends FlexProps {
  readonly children: React.ReactElement[]
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
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

RadioGroup.displayName = 'RadioGroup'

export default RadioGroup as React.FC<RadioGroupProps>
