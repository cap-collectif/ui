import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import svgr from '@svgr/rollup'
import * as fs from 'fs-extra'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const writeCjsEntryFile = () => {
  const contents = `
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ui.cjs.production.min.js')
} else {
  module.exports = require('./ui.cjs.development.js')
}
`
  return fs.outputFile('dist/index.js', contents)
}

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/ui.esm.js',
      format: 'esm',
      sourcemap: true,
      plugins: [terser()],
    },
    {
      file: 'dist/ui.cjs.development.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/ui.cjs.production.min.js',
      format: 'cjs',
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    {
      name: 'closeBundle',
      closeBundle() {
        writeCjsEntryFile()
      },
    },
    peerDepsExternal(),
    svgr({ ref: true, icon: true }),
    typescript(),
  ],
  treeshake: true,
}
