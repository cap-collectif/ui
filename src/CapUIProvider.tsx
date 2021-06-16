import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

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
      {resetCSS && <CSSReset />}
      {children}
    </ThemeProvider>
  )
}
