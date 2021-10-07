const path = require('path')

const EXLUDED_DOCGEN_PROPS = [
  'as',
  'gap',
  'sx',
  '_hover',
  '_active',
  '_focus',
  '_disabled',
  'uppercase',
  'zIndex',
  'minSize',
  'maxSize',
  'boxShadow',
  'textShadow',
  'fontSize',
  'letterSpacing',
  'fontWeight',
  'fontFamily',
  'lineHeight',
  'css',
  'disableFocusStyles',
  '_variants',
  '_selected',
  'bgGradient',
  'backgroundGradient',
  'bgClip',
  'backgroundClip',
  'focusBorderColor',
  'align',
  'justify',
  'wrap',
  'direction',
  'basis',
  'grow',
  'shrink',
  'spacing',
  'transform',
  'transformOrigin',
  'enableGpuAcceleration',
  'scale',
  'scaleX',
  'scaleY',
  'rotate',
  'translateX',
  'translateY',
  'skewY',
  'skewX',
  'ref',
  '_invalid',
  'invalidFocusBorderColor',
]

const ALLOWED_DOCGEN_NODE_MODULES = ['tippy.js']

module.exports = {
  babel: async options => ({
    ...options,
    plugins: [
      ...options.plugins,
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ],
  }),
  webpackFinal: async config => {
    const fileLoaderRule = config.module.rules.find(rule => {
      return !Array.isArray(rule.test) && rule.test.test('.svg')
    })
    if (fileLoaderRule) {
      fileLoaderRule.exclude = path.resolve(__dirname, '../src/assets')
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    })
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
        },
      },
    }
  },
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-essentials',
  ],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop, component) => {
        if (component.name === 'Box') {
          return false
        }
        if (EXLUDED_DOCGEN_PROPS.includes(prop.name)) {
          return false
        }
        if (
          prop.parent &&
          prop.parent.fileName &&
          ALLOWED_DOCGEN_NODE_MODULES.some(module =>
            prop.parent.fileName.includes(module),
          )
        ) {
          return true
        }
        if (prop.parent && /node_modules/.test(prop.parent.fileName)) {
          return false
        }

        return true
      },

      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
}
