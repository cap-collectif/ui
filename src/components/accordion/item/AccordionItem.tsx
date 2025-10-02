import cn from 'classnames'
import * as React from 'react'

import { BoxProps } from '../../box'
import { Box } from '../../box/Box'
import { useAccordion } from '../Accordion.context'
import { CapUIAccordionColorType, CapUIAccordionSizeType } from '../types'
import { AccordionItemContext } from './AccordionItem.context'

export type AccordionItemProps = BoxProps & {
  readonly children: React.ReactNode
  readonly id: string
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  id,
  className,
  ...props
}) => {
  const { updateAccordions, accordions, color, size, disabled, allowMultiple } =
    useAccordion()
  const isOpen = accordions[id]

  const styleState = disabled ? 'disable' : isOpen ? 'active' : 'default'

  const context = React.useMemo(
    () => ({
      open: isOpen,
      toggleOpen: () => updateAccordions(id),
      id,
      styleState,
    }),
    [isOpen, id, updateAccordions, styleState],
  )

  const borders: Record<CapUIAccordionColorType, { border: string }> = {
    white: {
      border: 'none',
    },
    default: {
      border: 'normal',
    },
  }

  const sizes: Record<CapUIAccordionSizeType, { padding: string }> = {
    md: {
      padding: 'lg',
    },
    sm: {
      padding: 'xs',
    },
  }

  return (
    <AccordionItemContext.Provider value={context}>
      <Box
        id={id}
        name={!allowMultiple ? `accordion-${color}-${size}` : id}
        as={'details'}
        bg={`accordion.${color}.background.${styleState}`}
        className={cn('cap-accordion__item', className)}
        borderRadius="accordion"
        border={borders[color].border}
        borderColor={`accordion.${color}.border.${styleState}`}
        _hover={{
          borderColor: `accordion.${color}.border.active`,
        }}
        // {...sizes[size]}
        sx={{ pointerEvents: disabled ? 'none' : 'initial' }}
        {...props}
      >
        {children}
      </Box>
    </AccordionItemContext.Provider>
  )
}

export default AccordionItem
