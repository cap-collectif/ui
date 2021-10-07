const svgr = require('@svgr/rollup').default

module.exports = {
  rollup(config, options) {
    config.plugins.push(svgr({ ref: true }))
    return config
  },
}
