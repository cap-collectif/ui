export const CapUIAccordionSize = {
  sm: 'sm',
  md: 'md',
} as const
export type CapUIAccordionSizeType = keyof typeof CapUIAccordionSize

export const CapUIAccordionColor = {
  default: 'default',
  white: 'white',
} as const
export type CapUIAccordionColorType = keyof typeof CapUIAccordionColor

export const CapUIAccordionIconPosition = {
  left: 'left',
  right: 'right',
} as const
export type CapUIAccordionIconPositionType =
  keyof typeof CapUIAccordionIconPosition
