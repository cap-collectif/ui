import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import svgr from '@svgr/rollup'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/ui.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/ui.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    svgr({ ref: true, icon: true }),
    json(),
    resolve({ preferBuiltins: true }),
    commonjs(),
    typescript(),
  ],
  treeshake: true,
}
