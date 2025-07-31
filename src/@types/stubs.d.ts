declare module '*.svg' {
  import * as React from 'react'

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>

  export default ReactComponent
}

// See https://www.reddit.com/r/typescript/comments/13vsld5/reexport_and_override_type_in_typesreact/
// We do this to have correct types with libs using React16/17 types with our current React18 version
// TODO : remove this with React19 - it will become useless anyway since forwardRef will be deprecated
declare module 'react' {
  import * as ReactTypings from '@types/react'
  export = ReactTypings
  type PropsWithoutRef<P> = P extends any
    ? 'ref' extends keyof P
      ? Omit<P, 'ref'>
      : P
    : P
  export function forwardRef<T, P = {}>(
    render: ReactTypings.ForwardRefRenderFunction<T, P>,
  ): ReactTypings.ForwardRefExoticComponent<
    PropsWithoutRef<P> & ReactTypings.RefAttributes<T>
  >
}

declare module 'framer-motion' {
  import * as FM from 'framer-motion/types'

  export = FM
  export function AnimatePresence(
    props: FM.AnimatePresenceProps & { children: React.ReactNode },
  ): React.ReactNode
}
