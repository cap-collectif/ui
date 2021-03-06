import { CapUIProvider } from '../src'
import Fonts from './Fonts'
import GlobalCSS from './GlobalCSS'

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color|bgColor|bg)/,
      date: /(date|createdAt|endAt|startAt|updatedAt|deletedAt)$/i,
    },
  },
}

export const decorators = [
  Story => (
    <CapUIProvider>
      <GlobalCSS />
      <Fonts />
      <Story />
    </CapUIProvider>
  ),
]
