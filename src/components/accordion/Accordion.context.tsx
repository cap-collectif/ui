import * as React from 'react'

import { CapUIAccordionSize, CapUIAccordionColor } from './enums'

export type Accordions = {
  [key: string]: boolean
}

export type AccordionContextType = {
  defaultAccordion?: string | string[]
  allowMultiple?: boolean
  accordions: Accordions
  updateAccordions: (id: string) => void
  size: CapUIAccordionSize
  color: CapUIAccordionColor
}

export const AccordionContext = React.createContext<AccordionContextType>({
  defaultAccordion: '',
  allowMultiple: false,
  accordions: {},
  updateAccordions: () => {},
  size: CapUIAccordionSize.Md,
  color: CapUIAccordionColor.White,
})

export const useAccordion = (): AccordionContextType => {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error(
      `You can't use the AccordionContext outside an Accordion component.`,
    )
  }
  return context
}
