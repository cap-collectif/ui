import * as React from 'react'
import 'react-app-polyfill/ie11'
import { render } from 'react-dom'

import { capui } from '../.'

const App = () => {
  return <div>{capui}</div>
}

render(<App />, document.getElementById('root'))
