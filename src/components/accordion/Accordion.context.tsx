import * as React from 'react'

export type Accordions = {
  [key: string]: boolean
}

export type Context = {
  defaultAccordion?: string | string[]
  allowMultiple?: boolean
  accordions: Accordions
  updateAccordions: (id: string) => void
}

export const AccordionContext = React.createContext<Context>({
  defaultAccordion: '',
  allowMultiple: false,
  accordions: {},
  updateAccordions: () => {},
})

export const useAccordion = (): Context => {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error(
      `You can't use the AccordionContext outsides an Accordion component.`,
    )
  }
  return context
}
