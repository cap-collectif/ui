import * as React from 'react'
import 'react-app-polyfill/ie11'
import { render } from 'react-dom'

import { CapUIProvider, capui, extendTheme } from '../.'

const appTheme = extendTheme({
  colors: {
    branding: {
      facebook: '#4267B2',
    },
  },
})

const App = () => {
  return (
    <CapUIProvider theme={appTheme}>
      <capui.div color="white" bg={'branding.facebook'}>
        Hello from example
      </capui.div>
    </CapUIProvider>
  )
}

render(<App />, document.getElementById('root'))
