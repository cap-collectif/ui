import typography, { CapUIFontWeight } from '../../styles/theme/typography'

const styles = (alternative?: boolean) => ({
  common: {
    outline: 'none',
  },
  primary: {
    primary: {
      bg: 'primary.600',
      color: 'primaryLabel',

      '&:hover': {
        bg: 'primaryHover',
        color: 'primaryLabelHover',
      },

      '&:disabled': {
        opacity: 0.4,
      },
    },
    secondary: {
      bg: 'white',
      color: 'primary.600',
      border: 'button',
      borderColor: 'primary.600',

      '&:hover': {
        color: 'primaryHover',
        borderColor: 'primaryHover',
      },

      '&:disabled': {
        opacity: 0.4,
      },
    },
    tertiary: {
      bg: 'transparent',
      color: 'primary.600',
      p: 0,
      textTransform: alternative ? 'uppercase' : 'initial',
      fontSize: alternative ? typography.fontSizes[1] : typography.fontSizes[3],

      '&:hover': {
        color: 'primaryHover',
      },

      '&:disabled': {
        opacity: 0.4,
      },
    },
    link: {
      textDecoration: 'underline',
      color: 'primary.600',
      fontWeight: CapUIFontWeight.Normal,
      p: 0,

      '&:hover': {
        color: 'primaryHover',
      },

      '&:disabled': {
        opacity: 0.4,
      },
    },
  },
  danger: {
    primary: {
      bg: 'red.600',
      color: 'red.100',

      '&:hover': {
        bg: 'red.700',
      },

      '&:disabled': {
        bg: 'red.300',
      },
    },
    secondary: {
      bg: 'white',
      color: 'red.600',
      border: 'button',
      borderColor: 'red.600',

      '&:hover': {
        borderColor: 'red.700',
      },

      '&:disabled': {
        color: 'red.300',
        borderColor: 'red.300',
      },
    },
    tertiary: {
      bg: 'transparent',
      color: 'red.600',
      p: 0,
      textTransform: alternative ? 'uppercase' : 'initial',
      fontSize: alternative ? typography.fontSizes[1] : typography.fontSizes[3],

      '&:hover': {
        color: 'red.700',
      },

      '&:disabled': {
        color: 'red.300',
      },
    },
    link: {
      textDecoration: 'underline',
      color: 'red.600',
      fontWeight: CapUIFontWeight.Normal,
      p: 0,

      '&:hover': {
        color: 'red.700',
      },

      '&:disabled': {
        color: 'red.300',
      },
    },
  },
  hierarchy: {
    primary: {
      bg: 'gray.600',
      color: 'gray.100',

      '&:hover': {
        bg: 'gray.700',
      },

      '&:disabled': {
        bg: 'gray.150',
        color: 'gray.300',
      },
    },
    secondary: {
      bg: 'white',
      color: 'gray.600',
      border: 'button',
      borderColor: 'gray.600',

      '&:hover': {
        color: 'gray.700',
        borderColor: 'gray.700',
      },

      '&:disabled': {
        color: 'gray.300',
        borderColor: 'gray.300',
      },
    },
    tertiary: {
      bg: 'transparent',
      color: 'gray.600',
      p: 0,

      '&:hover': {
        color: 'gray.700',
      },

      '&:disabled': {
        color: 'gray.300',
      },
    },
    link: {
      textDecoration: 'underline',
      color: 'gray.600',
      fontWeight: CapUIFontWeight.Normal,
      p: 0,

      '&:hover': {
        color: 'gray.700',
      },

      '&:disabled': {
        color: 'gray.300',
        cursor: 'default',
      },
    },
  },
})

export default styles
