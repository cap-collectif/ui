import * as React from 'react'

export type Context = {
  readonly value?: string | null
  readonly onChange?: (value: string) => void
}

export const InlineSelectContext = React.createContext<Context>({
  value: null,
})

export const useInlineSelect = (): Context => {
  const context = React.useContext(InlineSelectContext)
  if (!context) {
    throw new Error(
      `You can't use the InlineSelectContext outside a InlineSelect component.`,
    )
  }
  return context
}
