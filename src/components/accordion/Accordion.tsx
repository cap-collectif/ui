import * as React from 'react'

import { Flex, FlexProps } from '../layout/Flex'
import { AccordionContext, AccordionContextType } from './Accordion.context'
import { getAccordion, getDefaultAccordion } from './Accordion.utils'
import AccordionButton from './button/AccordionButton'
import AccordionItem from './item/AccordionItem'
import AccordionPanel from './panel/AccordionPanel'
import { CapUIAccordionColorType } from './types'

type SubComponents = {
  Item: typeof AccordionItem
  Button: typeof AccordionButton
  Panel: typeof AccordionPanel
}

export interface AccordionProps extends FlexProps {
  readonly children: React.ReactNode | React.ReactNode[]
  readonly allowMultiple?: AccordionContextType['allowMultiple']
  readonly defaultAccordion?: AccordionContextType['defaultAccordion']
  readonly size?: AccordionContextType['size']
  readonly color?: AccordionContextType['color']
  readonly disabled?: AccordionContextType['disabled']
}

export const Accordion: React.FC<AccordionProps> & SubComponents = ({
  children,
  allowMultiple,
  defaultAccordion,
  size = 'md',
  color = 'default',
  disabled = false,
  ...props
}) => {
  const [accordions, updateAccordions] = React.useState(
    getDefaultAccordion(children, defaultAccordion),
  )

  const accordionId = React.useId()

  const context = React.useMemo(
    () => ({
      defaultAccordion,
      allowMultiple,
      accordions,
      updateAccordions: (id: string) =>
        updateAccordions(getAccordion(id, accordions, allowMultiple)),
      size,
      color,
      disabled,
      accordionId,
    }),
    [
      defaultAccordion,
      allowMultiple,
      accordions,
      updateAccordions,
      size,
      color,
      disabled,
    ],
  )

  const variants: Record<CapUIAccordionColorType, { spacing: string }> = {
    default: {
      spacing: 'md',
    },
    white: {
      spacing: 'md',
    },
  }

  return (
    <AccordionContext.Provider value={context}>
      <Flex direction="column" spacing={variants[color].spacing} {...props}>
        {children}
      </Flex>
    </AccordionContext.Provider>
  )
}

Accordion.Item = AccordionItem
Accordion.Button = AccordionButton
Accordion.Panel = AccordionPanel

export default Accordion
