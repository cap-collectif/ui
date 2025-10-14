import cn from 'classnames'
import * as React from 'react'

import { CapUIFontSize } from '../../../styles'
import { PolymorphicBoxProps } from '../../box/Box'
import { CapUIIcon, CapUIIconSize, Icon } from '../../icon'
import { Flex } from '../../layout'
import Text from '../../typography/Text'
import { useAccordion } from '../Accordion.context'
import { useAccordionItem } from '../item/AccordionItem.context'
import { CapUIAccordionSizeType } from '../types'

type AccordionButtonProps = PolymorphicBoxProps<'button'> & {
  children: React.ReactNode
}

const AccordionButton: React.FC<AccordionButtonProps> = ({
  children,
  className,
  ...props
}) => {
  const { toggleOpen, open, id, styleState } = useAccordionItem()
  const { color, size, disabled } = useAccordion()

  const buttonRef = React.useRef<HTMLButtonElement | null>(null)

  const toggle = React.useCallback(() => {
    if (disabled) return

    toggleOpen()
  }, [disabled, toggleOpen])

  const sizes: Record<
    CapUIAccordionSizeType,
    { padding: string; fontSize: CapUIFontSize }
  > = {
    sm: {
      padding: 'xs',
      fontSize: CapUIFontSize.BodyRegular,
    },
    md: {
      padding: 'lg',
      fontSize: CapUIFontSize.Headline,
    },
  }

  return (
    <Flex
      as="summary"
      ref={buttonRef}
      disabled={disabled}
      onClick={toggle}
      align="center"
      width="100%"
      className={cn('cap-accordion__button', className)}
      id={`accordion-button-${id}`}
      color={`accordion.${color}.text.${styleState}`}
      aria-expanded={open}
      aria-disabled={disabled}
      aria-controls={`accordion-panel-${id}`}
      role="button"
      {...sizes[size]}
      sx={{ cursor: 'pointer' }}
      {...props}
    >
      <Icon
        name={open ? CapUIIcon.ArrowDown : CapUIIcon.ArrowRight}
        size={CapUIIconSize.Md}
        mr={2}
        color={`accordion.${color}.icon.${styleState}`}
      />

      {typeof children === 'string' ? <Text>{children}</Text> : <>{children}</>}
    </Flex>
  )
}

export default AccordionButton
