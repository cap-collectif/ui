import colors from '../../styles/modules/colors'

const styles = {
  primary: {
    outline: 'none',
    backgroundColor: 'transparent',

    ':hover': {
      backgroundColor: 'blue.150',

      '.cap-icon': {
        color: 'blue.500',
      },

      ':focus': {
        boxShadow: `0 0 2px 2px ${colors.blue['300']}`,
      },
    },
  },
  danger: {
    outline: 'none',
    backgroundColor: 'transparent',

    ':hover': {
      backgroundColor: 'red.150',

      '.cap-icon': {
        color: 'red.500',
      },

      ':focus': {
        boxShadow: `0 0 2px 2px ${colors.red['300']}`,
      },
    },
  },
}

export default styles
