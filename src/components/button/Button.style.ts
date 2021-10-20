import colors from '../../styles/modules/colors'
import typography, { CapUIFontWeight } from '../../styles/theme/typography'

const styles = (alternative?: boolean) => ({
  common: {
    outline: 'none',
  },
  primary: {
    primary: {
      bg: 'blue.500',
      color: 'blue.100',

      '&:focus': {
        boxShadow: `0 0 2px 2px ${colors.blue['300']}`,
      },

      '&:hover': {
        bg: 'blue.700',
        color: 'blue.100',
      },

      '&:disabled': {
        bg: 'blue.150',
        color: 'blue.300',
      },
    },
    secondary: {
      bg: 'white',
      color: 'blue.500',
      border: 'button',
      borderColor: 'blue.500',

      '&:focus': {
        boxShadow: `0 0 2px 2px ${colors.blue['300']}`,
      },

      '&:hover': {
        color: 'blue.700',
        borderColor: 'blue.700',
      },

      '&:disabled': {
        color: 'blue.300',
        borderColor: 'blue.300',
      },
    },
    tertiary: {
      bg: 'transparent',
      color: 'blue.500',
      p: 0,
      textTransform: alternative ? 'uppercase' : 'initial',
      fontSize: alternative ? typography.fontSizes[1] : typography.fontSizes[3],

      '&:focus': {
        boxShadow: `0 0 2px 2px ${colors.blue['300']}`,
      },

      '&:hover': {
        color: 'blue.700',
      },

      '&:disabled': {
        color: 'blue.300',
      },
    },
    link: {
      textDecoration: 'underline',
      color: 'blue.500',
      fontWeight: CapUIFontWeight.Normal,
      p: 0,

      '&:focus': {
        boxShadow: `0 0 2px 2px ${colors.blue['300']}`,
      },

      '&:hover': {
        color: 'blue.700',
      },

      '&:disabled': {
        color: 'blue.300',
      },
    },
  },
  danger: {
    primary: {
      bg: 'red.500',
      color: 'red.100',

      '&:focus': {
        boxShadow: `0 0 2px 2px ${colors.red['300']}`,
      },

      '&:hover': {
        bg: 'red.700',
      },

      '&:disabled': {
        bg: 'red.300',
      },
    },
    secondary: {
      bg: 'white',
      color: 'red.500',
      border: 'button',
      borderColor: 'red.500',

      '&:focus': {
        boxShadow: `0 0 2px 2px ${colors.red['300']}`,
      },

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
      color: 'red.500',
      p: 0,
      textTransform: alternative ? 'uppercase' : 'initial',
      fontSize: alternative ? typography.fontSizes[1] : typography.fontSizes[3],

      '&:focus': {
        boxShadow: `0 0 2px 2px ${colors.red['300']}`,
      },

      '&:hover': {
        color: 'red.700',
      },

      '&:disabled': {
        color: 'red.300',
      },
    },
    link: {
      textDecoration: 'underline',
      color: 'red.500',
      fontWeight: CapUIFontWeight.Normal,
      p: 0,

      '&:focus': {
        boxShadow: `0 0 2px 2px ${colors.red['300']}`,
      },

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
      bg: 'gray.500',
      color: 'gray.100',

      '&:focus': {
        boxShadow: `0 0 2px 2px ${colors.gray['300']}`,
      },

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
      color: 'gray.500',
      border: 'button',
      borderColor: 'gray.500',

      '&:focus': {
        boxShadow: `0 0 2px 2px ${colors.gray['300']}`,
      },

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
      color: 'gray.500',
      p: 0,

      '&:focus': {
        boxShadow: `0 0 2px 2px ${colors.gray['300']}`,
      },

      '&:hover': {
        color: 'gray.700',
      },

      '&:disabled': {
        color: 'gray.300',
      },
    },
    link: {
      textDecoration: 'underline',
      color: 'gray.500',
      fontWeight: CapUIFontWeight.Normal,
      p: 0,

      '&:focus': {
        boxShadow: `0 0 2px 2px ${colors.gray['300']}`,
      },

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
