import { CapUIBorder } from '../../styles'
import { ButtonQuickActionVariantColor } from './ButtonQuickAction'

const styles = (
  variantColor: ButtonQuickActionVariantColor,
) => ({
  bg: `action.${variantColor}.background.default`,
  borderRadius: CapUIBorder.Button,

  '.cap-icon.cap-buttonQuickAction-icon': {
    color: `action.${variantColor}.icon.default`,
  },

  '&:disabled': {
    cursor: 'not-allowed',
    '&:hover': {
      bg: `action.${variantColor}.background.default`,
    },
    '.cap-icon.cap-buttonQuickAction-icon, .cap-icon.cap-buttonQuickAction-icon:hover': {
      color: `action.${variantColor}.icon.disabled`,
    },
  },

  '&:hover': {
    bg: `action.${variantColor}.background.hover`,
    '.cap-icon.cap-buttonQuickAction-icon': {
      color: `action.${variantColor}.icon.hover`,
    },
  },
})

export default styles
