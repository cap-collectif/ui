import * as React from 'react'

import {
  CapUIAccordionSizeType,
  CapUIAccordionColorType,
  CapUIAccordionIconPositionType,
} from './types'

export type Accordions = {
  [key: string]: boolean
}

export type AccordionContextType = {
  defaultAccordion?: string | string[]
  allowMultiple?: boolean
  accordions: Accordions
  updateAccordions: (id: string) => void
  size: CapUIAccordionSizeType
  color: CapUIAccordionColorType
  disabled: boolean
  accordionId: string
  iconPosition: CapUIAccordionIconPositionType
}

export const AccordionContext = React.createContext<AccordionContextType>({
  defaultAccordion: '',
  allowMultiple: false,
  accordions: {},
  updateAccordions: () => {},
  size: 'md',
  color: 'default',
  disabled: false,
  accordionId: '',
  iconPosition: 'left',
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
