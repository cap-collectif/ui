import 'styled-components'

import { CapUITheme } from '../../styles'
import { Colors } from '../../styles/modules/colors.type'
import { ExtendedColors } from '../../utils/getThemeWithColorsToken'

declare module 'styled-components' {
  export interface DefaultTheme extends CapUITheme {
    colors: Colors & ExtendedColors
  }
}
