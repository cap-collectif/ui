import * as React from 'react'

export type Context = {
  open: boolean
  toggleOpen: () => void
  id: string
}

export const AccordionItemContext = React.createContext<Context>({
  open: false,
  toggleOpen: () => undefined,
  id: '',
})

export const useAccordionItem = (): Context => {
  const context = React.useContext(AccordionItemContext)
  if (!context) {
    throw new Error(
      `You can't use the AccordionItemContext outsides an AccordionItem component.`,
    )
  }
  return context
}
