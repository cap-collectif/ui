import { TagVariantColor } from './Tag'

export const getTagStyle = (variant: TagVariantColor) => ({
  bg: `tag.background.${variant}`,
  color: `tag.text.${variant}`,
  '--current-shadow-color': `tag.shadowColor.${variant}`,
})
