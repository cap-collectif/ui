import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import ToastContainer from './components/toast/ToastContainer'
import { CSSReset } from './styles/CSSReset'
import { CapUITheme, capuiTheme } from './styles/theme'
import { getThemeWithColorsToken } from './utils/getThemeWithColorsToken'

interface Props {
  resetCSS?: boolean
  theme?: CapUITheme
  children?: any
}

export const CapUIProvider: FC<Props> = ({
  resetCSS = true,
  theme = capuiTheme,
  children,
}) => {
  return (
    // @ts-expect-error : complex color types
    <ThemeProvider theme={getThemeWithColorsToken(theme)}>
      {resetCSS && <CSSReset />}
      <ToastContainer />
      {children}
    </ThemeProvider>
  )
}
