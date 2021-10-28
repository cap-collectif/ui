const svgr = require('@svgr/rollup').default

module.exports = {
  rollup(config, options) {
    config.plugins = [svgr({ ref: true }), ...config.plugins]

    return config
  },
}
