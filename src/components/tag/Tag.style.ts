import { SPACING } from '../../styles/theme'
import { TagVariantColor } from './Tag'

export const getTagStyle = (variant: TagVariantColor) => ({
  bg: `tag.background.${variant}`,
  color: `tag.text.${variant}`,
  '--current-shadow-color': `tag.shadowColor.${variant}`,
  '&:hover': {
    '.cap-tag__closeButton': {
      opacity: 1,
      right: SPACING['1'],
      mr: SPACING['1'],
    },
  },
})
