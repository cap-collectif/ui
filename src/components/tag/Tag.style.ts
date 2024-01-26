import { BaseColorsName } from '../../styles/modules/colors'

export const getTagStyle = (colors, color: BaseColorsName) => ({
  bg: colors[color]['150'],
  color: colors[color]['800'],
  '--current-shadow-color': colors[color]['200'],
})
