import * as React from 'react'

export type ModalContextType = Readonly<{
  hide: () => void
  show: () => void
  toggle: () => void
  hideCloseButton?: boolean
  fullSizeOnMobile?: boolean
  visible: boolean
}>

export const DEFAULT_VALUE_CONTEXT = {
  hide: () => {},
  show: () => {},
  toggle: () => {},
  visible: false,
  hideCloseButton: false,
  fullSizeOnMobile: false,
}

const ModalContext = React.createContext<ModalContextType>(
  DEFAULT_VALUE_CONTEXT,
)

export const useModal = (): ModalContextType => {
  const context = React.useContext(ModalContext)
  if (!context) {
    throw new Error(
      `You can't use the ModalContext outsides a Modal component.`,
    )
  }
  return context
}

type ProviderProps = {
  readonly children: React.ReactNode
  readonly context: ModalContextType
}

export const Provider = ({ context, children }: ProviderProps) => (
  <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
)
