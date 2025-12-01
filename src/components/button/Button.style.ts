import {
  CapUIFontSize,
  CapUIFontWeight,
  CapUILineHeight,
} from '../../styles/theme/typography'

export const SIZE = {
  small: {
    px: 'xs',
    py: 'xxs',
  },
  medium: {
    px: 'md',
    py: 'sm',
  },
  big: {
    px: 'xl',
    py: 'sm',
  },
}

const styles = (alternative: boolean) => ({
  common: {
    outline: 'none',
    '&:disabled': {
      cursor: 'not-allowed',
    },
    '&[data-loading="true"]': { cursor: 'wait' },
  },
  primary: {
    primary: {
      bg: 'button.primary.default.background.default',
      color: 'button.primary.default.text.default',
      '.cap-icon.cap-button-icon': {
        color: 'button.primary.default.icon.default',
      },

      '&:hover': {
        bg: 'button.primary.default.background.hover',
        color: 'button.primary.default.text.hover',
        '.cap-icon.cap-button-icon': {
          color: 'button.primary.default.icon.hover',
        },
      },

      '&:disabled': {
        bg: 'button.primary.default.background.disable',
        color: 'button.primary.default.text.disable',
        '.cap-icon.cap-button-icon': {
          color: 'button.primary.default.icon.disable',
        },
      },

      '&[data-loading="true"]': {
        bg: 'button.primary.default.background.loading',
        color: 'button.primary.default.text.loading',
        '.cap-icon.cap-button-icon': {
          color: 'button.primary.default.icon.loading',
        },
      },
    },
    secondary: {
      bg: 'button.secondary.default.background.default',
      color: 'button.secondary.default.text.default',
      border: 'button',
      borderColor: 'button.secondary.default.border.default',
      '.cap-icon.cap-button-icon': {
        color: 'button.secondary.default.icon.default',
      },

      '&:hover': {
        bg: 'button.secondary.default.background.hover',
        color: 'button.secondary.default.text.hover',
        borderColor: 'button.secondary.default.border.hover',
        '.cap-icon.cap-button-icon': {
          color: 'button.secondary.default.icon.hover',
        },
      },

      '&:disabled': {
        bg: 'button.secondary.default.background.disable',
        color: 'button.secondary.default.text.disable',
        borderColor: 'button.secondary.default.border.disable',
        '.cap-icon.cap-button-icon': {
          color: 'button.secondary.default.icon.disable',
        },
      },

      '&[data-loading="true"]': {
        bg: 'button.secondary.default.background.loading',
        color: 'button.secondary.default.text.loading',
        borderColor: 'button.secondary.default.border.loading',
        '.cap-icon.cap-button-icon': {
          color: 'button.secondary.default.icon.loading',
        },
      },
    },
    tertiary: {
      bg: 'button.tertiary.default.background.default',
      color: 'button.tertiary.default.text.default',
      '.cap-icon.cap-button-icon': {
        color: 'button.tertiary.default.icon.default',
      },
      textTransform: alternative ? 'uppercase' : 'initial',
      fontSize: alternative ? CapUIFontSize.Caption : CapUIFontSize.BodyRegular,
      fontWeight: alternative ? CapUIFontWeight.Bold : CapUIFontWeight.Semibold,
      lineHeight: alternative ? CapUILineHeight.S : CapUILineHeight.M,

      '&:hover': {
        color: 'button.tertiary.default.text.hover',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.default.icon.hover',
        },
      },

      '&:disabled': {
        color: 'button.tertiary.default.text.disable',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.default.icon.disable',
        },
      },

      '&[data-loading="true"]': {
        color: 'button.tertiary.default.text.loading',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.default.icon.loading',
        },
      },
    },
    link: {
      textDecoration: 'underline',
      color: 'button.tertiary.default.text.default',
      '.cap-icon.cap-button-icon': {
        color: 'button.tertiary.default.icon.default',
      },

      '&:hover': {
        color: 'button.tertiary.default.text.hover',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.default.icon.hover',
        },
      },

      '&:disabled': {
        textDecoration: 'none',
        color: 'button.tertiary.default.text.disable',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.default.icon.disable',
        },
      },

      '&[data-loading="true"]': {
        textDecoration: 'underline',
        color: 'button.tertiary.default.text.loading',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.default.icon.loading',
        },
      },
    },
  },
  danger: {
    primary: {
      bg: 'button.primary.danger.background.default',
      color: 'button.primary.danger.text.default',

      '.cap-icon.cap-button-icon': {
        color: 'button.primary.danger.icon.default',
      },

      '&:hover': {
        bg: 'button.primary.danger.background.hover',
        color: 'button.primary.danger.text.hover',
        '.cap-icon.cap-button-icon': {
          color: 'button.primary.danger.icon.hover',
        },
      },

      '&:disabled': {
        bg: 'button.primary.danger.background.disable',
        color: 'button.primary.danger.text.disable',
        '.cap-icon.cap-button-icon': {
          color: 'button.primary.danger.icon.disable',
        },
      },

      '&[data-loading="true"]': {
        bg: 'button.primary.danger.background.loading',
        color: 'button.primary.danger.text.loading',
        '.cap-icon.cap-button-icon': {
          color: 'button.primary.danger.icon.loading',
        },
      },
    },
    secondary: {
      bg: 'button.secondary.danger.background.default',
      color: 'button.secondary.danger.text.default',
      border: 'button',
      borderColor: 'button.secondary.danger.border.default',
      '.cap-icon.cap-button-icon': {
        color: 'button.secondary.danger.icon.default',
      },

      '&:hover': {
        bg: 'button.secondary.danger.background.hover',
        color: 'button.secondary.danger.text.hover',
        borderColor: 'button.secondary.danger.border.hover',
        '.cap-icon.cap-button-icon': {
          color: 'button.secondary.danger.icon.hover',
        },
      },

      '&:disabled': {
        bg: 'button.secondary.danger.background.disable',
        color: 'button.secondary.danger.text.disable',
        borderColor: 'button.secondary.danger.border.disable',
        '.cap-icon.cap-button-icon': {
          color: 'button.secondary.danger.icon.disable',
        },
      },

      '&[data-loading="true"]': {
        bg: 'button.secondary.danger.background.loading',
        color: 'button.secondary.danger.text.loading',
        borderColor: 'button.secondary.danger.border.loading',
        '.cap-icon.cap-button-icon': {
          color: 'button.secondary.danger.icon.loading',
        },
      },
    },
    tertiary: {
      bg: 'button.tertiary.danger.background.default',
      color: 'button.tertiary.danger.text.default',
      '.cap-icon.cap-button-icon': {
        color: 'button.tertiary.danger.icon.default',
      },
      textTransform: alternative ? 'uppercase' : 'initial',
      fontSize: alternative ? CapUIFontSize.Caption : CapUIFontSize.BodyRegular,
      fontWeight: alternative ? CapUIFontWeight.Bold : CapUIFontWeight.Semibold,
      lineHeight: alternative ? CapUILineHeight.S : CapUILineHeight.M,

      '&:hover': {
        color: 'button.tertiary.danger.text.hover',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.danger.icon.hover',
        },
      },

      '&:disabled': {
        color: 'button.tertiary.danger.text.disable',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.danger.icon.disable',
        },
      },

      '&[data-loading="true"]': {
        color: 'button.tertiary.danger.text.loading',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.danger.icon.loading',
        },
      },
    },
    link: {
      textDecoration: 'underline',
      color: 'button.tertiary.danger.text.default',
      '.cap-icon.cap-button-icon': {
        color: 'button.tertiary.danger.icon.default',
      },

      '&:hover': {
        color: 'button.tertiary.danger.text.hover',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.danger.icon.hover',
        },
      },

      '&:disabled': {
        textDecoration: 'none',
        color: 'button.tertiary.danger.text.disable',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.danger.icon.disable',
        },
      },

      '&[data-loading="true"]': {
        textDecoration: 'underline',
        color: 'button.tertiary.danger.text.loading',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.danger.icon.loading',
        },
      },
    },
  },
  hierarchy: {
    primary: {
      bg: 'button.primary.hierarchy.background.default',
      color: 'button.primary.hierarchy.text.default',
      '.cap-icon.cap-button-icon': {
        color: 'button.primary.hierarchy.icon.default',
      },

      '&:hover': {
        bg: 'button.primary.hierarchy.background.hover',
        color: 'button.primary.hierarchy.text.hover',
        '.cap-icon.cap-button-icon': {
          color: 'button.primary.hierarchy.icon.hover',
        },
      },

      '&:disabled': {
        bg: 'button.primary.hierarchy.background.disable',
        color: 'button.primary.hierarchy.text.disable',
        '.cap-icon.cap-button-icon': {
          color: 'button.primary.hierarchy.icon.disable',
        },
      },

      '&[data-loading="true"]': {
        bg: 'button.primary.hierarchy.background.loading',
        color: 'button.primary.hierarchy.text.loading',
        '.cap-icon.cap-button-icon': {
          color: 'button.primary.hierarchy.icon.loading',
        },
      },
    },
    secondary: {
      bg: 'button.secondary.hierarchy.background.default',
      color: 'button.secondary.hierarchy.text.default',
      border: 'button',
      borderColor: 'button.secondary.hierarchy.border.default',
      '.cap-icon.cap-button-icon': {
        color: 'button.secondary.hierarchy.icon.default',
      },

      '&:hover': {
        bg: 'button.secondary.hierarchy.background.hover',
        color: 'button.secondary.hierarchy.text.hover',
        borderColor: 'button.secondary.hierarchy.border.hover',
        '.cap-icon.cap-button-icon': {
          color: 'button.secondary.hierarchy.icon.hover',
        },
      },

      '&:disabled': {
        bg: 'button.secondary.hierarchy.background.disable',
        color: 'button.secondary.hierarchy.text.disable',
        borderColor: 'button.secondary.hierarchy.border.disable',
        '.cap-icon.cap-button-icon': {
          color: 'button.secondary.hierarchy.icon.disable',
        },
      },

      '&[data-loading="true"]': {
        bg: 'button.secondary.hierarchy.background.loading',
        color: 'button.secondary.hierarchy.text.loading',
        borderColor: 'button.secondary.hierarchy.border.loading',
        '.cap-icon.cap-button-icon': {
          color: 'button.secondary.hierarchy.icon.loading',
        },
      },
    },
    tertiary: {
      bg: 'button.tertiary.hierarchy.background.default',
      color: 'button.tertiary.hierarchy.text.default',
      '.cap-icon.cap-button-icon': {
        color: 'button.tertiary.hierarchy.icon.default',
      },
      textTransform: alternative ? 'uppercase' : 'initial',
      fontSize: alternative ? CapUIFontSize.Caption : CapUIFontSize.BodyRegular,
      fontWeight: alternative ? CapUIFontWeight.Bold : CapUIFontWeight.Semibold,
      lineHeight: alternative ? CapUILineHeight.S : CapUILineHeight.M,

      '&:hover': {
        color: 'button.tertiary.hierarchy.text.hover',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.hierarchy.icon.hover',
        },
      },

      '&:disabled': {
        color: 'button.tertiary.hierarchy.text.disable',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.hierarchy.icon.disable',
        },
      },

      '&[data-loading="true"]': {
        color: 'button.tertiary.hierarchy.text.loading',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.hierarchy.icon.loading',
        },
      },
    },
    link: {
      textDecoration: 'underline',
      color: 'button.tertiary.hierarchy.text.default',
      '.cap-icon.cap-button-icon': {
        color: 'button.tertiary.hierarchy.icon.default',
      },

      '&:hover': {
        color: 'button.tertiary.hierarchy.text.hover',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.hierarchy.icon.hover',
        },
      },

      '&:disabled': {
        textDecoration: 'none',
        color: 'button.tertiary.hierarchy.text.disable',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.hierarchy.icon.disable',
        },
      },

      '&[data-loading="true"]': {
        textDecoration: 'underline',
        color: 'button.tertiary.hierarchy.text.loading',
        '.cap-icon.cap-button-icon': {
          color: 'button.tertiary.hierarchy.icon.loading',
        },
      },
    },
  },
})

export default styles
