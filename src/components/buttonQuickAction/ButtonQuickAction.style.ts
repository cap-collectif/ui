import colors, { BaseColorsName } from '../../styles/modules/colors'

const styles = (variantColor: BaseColorsName) => ({
  outline: 'none',
  backgroundColor: 'transparent',

  ':hover': {
    backgroundColor: colors[variantColor]['150'],

    '.cap-icon': {
      color: colors[variantColor]['500'],
    },

    ':focus': {
      boxShadow: `0 0 2px 2px ${colors[variantColor]['300']}`,
    },
  },
  ':focus': {
    backgroundColor: colors[variantColor]['150'],
    boxShadow: `0 0 2px 2px ${colors[variantColor]['300']}`,
  },
})

export default styles
