const svgr = require('@svgr/rollup').default
const url = require('@rollup/plugin-url')

module.exports = {
  rollup(config, options) {
    config.plugins = [
      svgr({ ref: true }),
      url({ include: '**/*.ttf', limit: 0 }),
      ...config.plugins,
    ]

    return config
  },
}
