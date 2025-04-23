import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import svgr from '@svgr/rollup'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/ui.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    ...(isProduction
      ? []
      : [
          {
            file: 'dist/ui.cjs.development.js',
            format: 'cjs',
            sourcemap: true,
          },
        ]),

    {
      file: 'dist/ui.cjs.production.min.js',
      format: 'cjs',
      sourcemap: true,
      plugins: [terser()],
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
