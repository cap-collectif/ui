import * as React from 'react'

import { Flex, FlexProps } from '../layout/Flex'
import { AccordionContext } from './Accordion.context'
import { getAccordion, getDefaultAccordion } from './Accordion.utils'
import AccordionButton from './button/AccordionButton'
import AccordionItem from './item/AccordionItem'
import AccordionPanel from './panel/AccordionPanel'

type SubComponents = {
  Item: typeof AccordionItem
  Button: typeof AccordionButton
  Panel: typeof AccordionPanel
}

export interface AccordionProps extends FlexProps {
  readonly children: React.ReactNodeArray
  readonly allowMultiple?: boolean
  readonly defaultAccordion?: string | string[]
}

export const Accordion: React.FC<AccordionProps> & SubComponents = ({
  children,
  allowMultiple,
  defaultAccordion,
  ...props
}) => {
  const [accordions, updateAccordions] = React.useState(
    getDefaultAccordion(children, defaultAccordion),
  )

  const context = React.useMemo(
    () => ({
      defaultAccordion,
      allowMultiple,
      accordions,
      updateAccordions: (id: string) =>
        updateAccordions(getAccordion(id, accordions, allowMultiple)),
    }),
    [defaultAccordion, allowMultiple, accordions, updateAccordions],
  )

  return (
    <AccordionContext.Provider value={context}>
      <Flex direction="column" spacing={4} {...props}>
        {children}
      </Flex>
    </AccordionContext.Provider>
  )
}

Accordion.Item = AccordionItem
Accordion.Button = AccordionButton
Accordion.Panel = AccordionPanel

export default Accordion
