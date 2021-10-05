import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import Fonts from './Fonts'
import ToastsContainer from './components/toast/ToastsContainer'
import { CSSReset } from './styles/CSSReset'
import { CapUITheme, capuiTheme } from './styles/theme'

interface Props {
  readonly resetCSS?: boolean
  readonly theme?: CapUITheme
}

export const CapUIProvider: FC<Props> = ({
  resetCSS = true,
  theme = capuiTheme,
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Fonts />
      {resetCSS && <CSSReset />}
      <ToastsContainer />

      {children}
    </ThemeProvider>
  )
}
