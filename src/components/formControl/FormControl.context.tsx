import * as React from 'react'

export interface CreateContextOptions {
  strict?: boolean
  name?: string
}

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>]

export function createContext<ContextType>(options: CreateContextOptions = {}) {
  const { strict = true, name } = options

  const Context = React.createContext<ContextType | undefined>(undefined)

  Context.displayName = name

  function useContext() {
    const context = React.useContext(Context)

    if (!context && strict) {
      const error = new Error(
        `You can't use 'useContext' outside the Provider component.`,
      )
      error.name = 'ContextError'
      Error.captureStackTrace?.(error, useContext)
      throw error
    }
    return context
  }

  return [
    Context.Provider,
    useContext,
    Context,
  ] as CreateContextReturn<ContextType>
}
