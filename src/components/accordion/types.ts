export const CapUIAccordionSize = {
  sm: 'sm',
  md: 'md',
} as const
export type CapUIAccordionSizeType = keyof typeof CapUIAccordionSize

const CapUIAccordionColor = {
  default: 'default',
  white: 'white',
} as const
export type CapUIAccordionColorType = keyof typeof CapUIAccordionColor
