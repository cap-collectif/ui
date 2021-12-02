const svgr = require('@svgr/rollup').default
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const postcss = require('rollup-plugin-postcss')
const cssnext = require('postcss-cssnext')
const cssnano = require('cssnano')

module.exports = {
  rollup(config, options) {
    config.plugins = [
      peerDepsExternal(),
      postcss({
        plugins: [cssnext({ warnForDuplicates: false }), cssnano()],
        extensions: ['.css'],
        minimize: true,
      }),
      svgr({ ref: true }),
      ...config.plugins,
    ]

    return config
  },
}
