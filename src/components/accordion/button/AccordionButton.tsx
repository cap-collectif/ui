import cn from 'classnames'
import * as React from 'react'

import { CapUIFontSize, CapUIFontWeight } from '../../../styles'
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

  const variants: Record<
    CapUIAccordionColor,
    { fontWeight: CapUIFontWeight; color: string; px: number; pb: number }
  > = {
    white: {
      fontWeight: CapUIFontWeight.Bold,
      color: 'primary.darker',
      px: 6,
      pb: 6,
    },
    gray: {
      fontWeight: CapUIFontWeight.Normal,
      color: 'gray.900',
      px: 6,
      pb: 6,
    },
    transparent: {
      fontWeight: CapUIFontWeight.Normal,
      color: 'gray.900',
      px: 0,
      pb: 4,
    },
  }

  return (
    <Flex
      as="button"
      type="button"
      ref={buttonRef}
      disabled={disabled}
      onClick={toggle}
      align="center"
      px={variants[color].px}
      py={variants[color].pb}
      pb={open && size === CapUIAccordionSize.Sm ? 4 : variants[color].pb}
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
        color={open ? 'primary.base' : 'gray.500'}
      />

      {typeof children === 'string' ? (
        <Text
          color={variants[color].color}
          {...(size === CapUIAccordionSize.Sm
            ? { fontSize: CapUIFontSize.BodyRegular }
            : headingStyles.h4)}
          fontWeight={variants[color].fontWeight}
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
