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
  const radios = React.Children.map(children, (child: React.ReactElement) => {
    return React.cloneElement(child, {
      isInvalid: false, // We don't want to display the rodios in red
    })
  })
  return (
    <Flex
      width={props.width || '100%'}
      direction="column"
      spacing={1}
      className={cn('cap-radio-group', props.className)}
      {...props}
    >
      {radios}
    </Flex>
  )
}

RadioGroup.displayName = 'RadioGroup'

export default RadioGroup as React.FC<RadioGroupProps>
