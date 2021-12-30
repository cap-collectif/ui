import cn from 'classnames'
import * as React from 'react'

import { CapUIFontWeight } from '../../../styles'
import { PolymorphicBoxProps } from '../../box/Box'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { Flex } from '../../layout'
import { headingStyles } from '../../typography'
import Text from '../../typography/Text'
import { useAccordion } from '../Accordion.context'
import { CapUIAccordionColor, CapUIAccordionSize } from '../enums'
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
  const { color, size } = useAccordion()

  const buttonRef = React.useRef<HTMLButtonElement | null>(null)

  const toggle = React.useCallback(() => {
    if (disabled) return

    toggleOpen()
  }, [disabled, toggleOpen])

  return (
    <Flex
      as="button"
      ref={buttonRef}
      disabled={disabled}
      onClick={toggle}
      align="center"
      p={6}
      pb={open && size === CapUIAccordionSize.Sm ? 4 : 6}
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
        mr={2}
        color={open ? 'blue.500' : 'gray.500'}
      />

      {typeof children === 'string' ? (
        <Text
          color={color === CapUIAccordionColor.Gray ? 'gray.900' : 'blue.800'}
          fontSize={3}
          {...(size === CapUIAccordionSize.Sm ? {} : headingStyles.h4)}
          fontWeight={
            color === CapUIAccordionColor.White
              ? CapUIFontWeight.Bold
              : CapUIFontWeight.Normal
          }
        >
          {children}
        </Text>
      ) : (
        <>{children}</>
      )}
    </Flex>
  )
}

export default AccordionButton
