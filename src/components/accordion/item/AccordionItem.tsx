import cn from 'classnames'
import * as React from 'react'

import { BoxProps } from '../../box'
import { Box } from '../../box/Box'
import { useAccordion } from '../Accordion.context'
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
  const { updateAccordions, accordions } = useAccordion()
  const isOpen = accordions[id]

  const context = React.useMemo(
    () => ({
      open: isOpen,
      toggleOpen: () => updateAccordions(id),
      id,
    }),
    [isOpen, id, updateAccordions],
  )

  return (
    <AccordionItemContext.Provider value={context}>
      <Box
        id={id}
        bg={isOpen ? 'blue.100' : 'gray.100'}
        className={cn('cap-accordion__item', className)}
        borderRadius="accordion"
        border="normal"
        borderColor={isOpen ? 'blue.500' : 'gray.200'}
        _hover={{
          borderColor: 'gray.300',
        }}
        _disabled={{
          opacity: 0.5,
        }}
        pb={isOpen ? 6 : 0}
        {...props}
      >
        {children}
      </Box>
    </AccordionItemContext.Provider>
  )
}

export default AccordionItem
