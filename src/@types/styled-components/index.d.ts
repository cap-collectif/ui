import 'styled-components'

import { CapUITheme } from '../../styles'

declare module 'styled-components' {
  export interface DefaultTheme extends CapUITheme {}
}
