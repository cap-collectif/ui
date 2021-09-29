import cn from 'classnames'
import * as React from 'react'

import { CapUIFontWeight } from '../../../styles'
import { Box, PolymorphicBoxProps } from '../../box/Box'
import { Icon } from '../../icon'
import { CapUIIcon, CapUIIconSize } from '../../icon'
import Text from '../../typography/Text'
import { useAccordionItem } from '../item/AccordionItem.context'

type AccordionButtonProps = PolymorphicBoxProps<'button'> & {
  children: React.ReactNode
}

const AccordionButton: React.FC<AccordionButtonProps> = ({
  children,
  disabled,
  className,
  ...props
}) => {
  const { toggleOpen, open, id } = useAccordionItem()
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)

  const toggle = React.useCallback(() => {
    if (disabled) return

    toggleOpen()
  }, [disabled, toggleOpen])

  return (
    <Box
      as="button"
      ref={buttonRef}
      disabled={disabled}
      onClick={toggle}
      display="flex"
      alignItems="center"
      p={6}
      width="100%"
      fontWeight={CapUIFontWeight.Normal}
      className={cn('cap-accordion__button', className)}
      id={`accordion-button-${id}`}
      aria-expanded={open}
      aria-disabled={disabled}
      aria-controls={`accordion-panel-${id}`}
      {...props}
    >
      <Icon
        name={open ? CapUIIcon.ArrowDown : CapUIIcon.ArrowRight}
        size={CapUIIconSize.Md}
        mr={1}
        color={open ? 'blue.500' : 'gray.500'}
      />

      {typeof children === 'string' ? (
        <Text color="gray.900">{children}</Text>
      ) : (
        <>{children}</>
      )}
    </Box>
  )
}

export default AccordionButton
