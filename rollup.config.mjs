import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import svgr from '@svgr/rollup'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/ui.esm.js',
      format: 'esm',
      sourcemap: true,
      plugins: [terser()],
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
  plugins: [peerDepsExternal(), svgr({ ref: true, icon: true }), typescript()],
  treeshake: true,
}
