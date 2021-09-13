import * as React from 'react'

export type Variant = 'info' | 'infoGray' | 'danger' | 'success' | 'warning'

export type Context = {
  readonly variant: Variant
}

export const InfoMessageContext: React.Context<Context> = React.createContext<Context>(
  {
    variant: 'info',
  },
)

export const useInfoMessageContext = (): Context => {
  const context = React.useContext(InfoMessageContext)
  if (!context) {
    throw new Error(
      `You can't use the InfoMessageContext outside a InfoMessage.Provider component.`,
    )
  }
  return context
}
