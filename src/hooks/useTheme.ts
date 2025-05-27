import { useTheme as useStyledTheme } from 'styled-components'

import { CapUITheme } from '../styles'
import { Colors as DefaultColors } from '../styles/modules/colors'
import { ExtendedColors } from '../utils/getThemeWithColorsToken'

type Colors = DefaultColors & ExtendedColors

export const useTheme = (): Omit<CapUITheme, 'colors'> & {
  colors: Colors
} => useStyledTheme()
