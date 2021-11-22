const svgr = require('@svgr/rollup').default
const peerDepsExternal = require('rollup-plugin-peer-deps-external/dist/rollup-plugin-peer-deps-external')

module.exports = {
  rollup(config, options) {
    config.plugins = [
      peerDepsExternal(),
      svgr({ ref: true }),
      ...config.plugins,
    ]

    return config
  },
}
