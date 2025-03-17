import cn from 'classnames'
import * as React from 'react'

import { BoxProps } from '../../box'
import { Box } from '../../box/Box'
import { useAccordion } from '../Accordion.context'
import { CapUIAccordionColor } from '../enums'
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
  const { updateAccordions, accordions, color } = useAccordion()
  const isOpen = accordions[id]

  const context = React.useMemo(
    () => ({
      open: isOpen,
      toggleOpen: () => updateAccordions(id),
      id,
    }),
    [isOpen, id, updateAccordions],
  )

  const variants: Record<
    CapUIAccordionColor,
    { bg: string; bgOpen: string; border: string; pbOpen: number }
  > = {
    white: {
      bg: 'white',
      bgOpen: 'white',
      border: 'none',
      pbOpen: 6,
    },
    gray: {
      bg: 'gray.100',
      bgOpen: 'primary.background',
      border: 'normal',
      pbOpen: 6,
    },
    transparent: {
      bg: 'transparent',
      bgOpen: 'transparent',
      border: 'none',
      pbOpen: 4,
    },
  }

  return (
    <AccordionItemContext.Provider value={context}>
      <Box
        id={id}
        bg={isOpen ? variants[color].bgOpen : variants[color].bg}
        className={cn('cap-accordion__item', className)}
        borderRadius="accordion"
        border={variants[color].border}
        borderColor={isOpen ? 'primary.base' : 'gray.200'}
        _hover={{
          borderColor: 'gray.300',
        }}
        _disabled={{
          opacity: 0.5,
        }}
        pb={isOpen ? variants[color].pbOpen : 0}
        {...props}
      >
        {children}
      </Box>
    </AccordionItemContext.Provider>
  )
}

export default AccordionItem
