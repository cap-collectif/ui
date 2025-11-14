import * as React from 'react'

import type { Accordions } from './Accordion.context'
import { AccordionItemProps } from './item/AccordionItem'

export const getDefaultAccordion = (
  children: React.ReactNode | React.ReactNode[],
  defaultAccordion?: string | string[],
) =>
  React.Children.toArray(children).reduce<Accordions>((acc, child) => {
    const accordionItem = child as React.ReactElement<
      React.PropsWithChildren<AccordionItemProps>
    >

    acc[accordionItem.props.id] = defaultAccordion
      ? Array.isArray(defaultAccordion)
        ? defaultAccordion.includes(accordionItem.props.id)
        : defaultAccordion === accordionItem.props.id
      : false

    return acc
  }, {})

export const getAccordion = (
  id: string,
  accordions: Accordions,
  allowMultiple?: boolean,
) =>
  Object.entries(accordions).reduce<Accordions>((acc, [key, value]) => {
    if (!allowMultiple) {
      return {
        ...acc,
        [key]: id !== key ? false : !value,
      }
    }

    return {
      ...acc,
      [key]: id === key ? !value : value,
    }
  }, accordions)
