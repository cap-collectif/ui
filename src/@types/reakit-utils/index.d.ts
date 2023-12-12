import * as reakitutils from 'reakit-utils'

declare module 'reakit-utils' {
  export declare function fireKeyboardEvent(
    element: HTMLElement,
    type: string,
    eventInit: any,
  ): boolean
}
