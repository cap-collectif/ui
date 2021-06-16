import { useTheme as useStyledTheme } from 'styled-components'

import { CapUITheme } from '../styles'

export const useTheme = (): CapUITheme => useStyledTheme()
